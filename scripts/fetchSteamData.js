const fs = require('fs');
const path = require('path');
const https = require('https');

// Load environment variables manually
const envPath = path.join(__dirname, '../.env');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      const key = match[1];
      let value = match[2] || '';
      // Remove surrounding quotes if any
      if (value.length > 0 && value.charAt(0) === '"' && value.charAt(value.length - 1) === '"') {
        value = value.substring(1, value.length - 1);
      }
      process.env[key] = value;
    }
  });
}

const apiKey = process.env.STEAM_API_KEY;
const steamId = process.env.STEAM_ID;

if (!apiKey || !steamId) {
  console.error("Steam API Key or Steam ID is missing in .env!");
  process.exit(1);
}

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`Failed to parse JSON: ${e.message}`));
        }
      });
    }).on('error', (err) => reject(err));
  });
}

async function main() {
  try {
    console.log("Fetching Steam player summaries...");
    const summariesUrl = `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${apiKey}&steamids=${steamId}`;
    const summariesResult = await fetchJSON(summariesUrl);
    
    const player = summariesResult.response && summariesResult.response.players && summariesResult.response.players[0];
    if (!player) {
      throw new Error("No player data found or API Key is invalid.");
    }
    
    console.log("Fetching Steam owned games...");
    const gamesUrl = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${apiKey}&steamid=${steamId}&include_appinfo=true&include_played_free_games=true&format=json`;
    const gamesResult = await fetchJSON(gamesUrl);
    
    const games = gamesResult.response && gamesResult.response.games || [];
    const gameCount = gamesResult.response && gamesResult.response.game_count || games.length;
    
    // Sort games by playtime_forever descending and take top 10
    const topGames = games
      .sort((a, b) => b.playtime_forever - a.playtime_forever)
      .slice(0, 11)
      .map(game => ({
        appid: game.appid,
        name: game.name,
        playtime_hours: Math.round(game.playtime_forever / 60)
      }));
      
    // Calculate total playtime across all games
    const totalPlaytimeMinutes = games.reduce((sum, g) => sum + g.playtime_forever, 0);
    const totalPlaytimeHours = Math.round(totalPlaytimeMinutes / 60);

    const outputData = {
      profile: {
        steamid: player.steamid,
        personaname: player.personaname,
        profileurl: player.profileurl,
        avatarfull: player.avatarfull,
        personastate: player.personastate, // 0: Offline, 1: Online, 2: Busy, 3: Away, etc.
        gameextrainfo: player.gameextrainfo || null, // Name of the game currently playing, if any
        gameid: player.gameid || null, // ID of game currently playing
        game_count: gameCount,
        total_playtime_hours: totalPlaytimeHours
      },
      top_games: topGames
    };

    const targetDir = path.join(__dirname, '../src/components/About');
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const outputPath = path.join(targetDir, 'steamData.json');
    fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2), 'utf8');
    console.log(`Successfully saved Steam data to ${outputPath}!`);
  } catch (error) {
    console.error("Error fetching Steam data:", error.message);
    // Write an empty/fallback file so build won't break
    const fallbackPath = path.join(__dirname, '../src/components/About/steamData.json');
    const fallbackData = {
      profile: {
        steamid: steamId,
        personaname: "Isra",
        profileurl: `https://steamcommunity.com/profiles/${steamId}`,
        avatarfull: "https://avatars.cloudflare.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg",
        personastate: 0,
        gameextrainfo: null,
        game_count: 0,
        total_playtime_hours: 0
      },
      top_games: []
    };
    const targetDir = path.join(__dirname, '../src/components/About');
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    fs.writeFileSync(fallbackPath, JSON.stringify(fallbackData, null, 2), 'utf8');
    console.log(`Saved fallback Steam data to ${fallbackPath}`);
  }
}

main();
