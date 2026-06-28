import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import steamData from "./steamData.json";

function Steam() {
  const { profile, top_games } = steamData;

  // Determine status color and text based on Steam API values
  let statusColor = "#898989"; // Default Offline (Grey)
  let statusText = "Offline";
  
  if (profile.gameextrainfo) {
    statusColor = "#90ba3c"; // In-Game (Green)
    statusText = `In-Game: ${profile.gameextrainfo}`;
  } else if (profile.personastate > 0) {
    statusColor = "#57cbde"; // Online (Blue/Cyan)
    statusText = "Online";
  }

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Find Me on <strong className="purple">Steam</strong>
      </h1>
      
      <Col md={12} style={{ paddingBottom: "30px" }}>
        {/* Steam Profile Card */}
        <Card 
          style={{ 
            backgroundColor: "#171a21", 
            border: "1.5px solid #2a475e", 
            borderRadius: "4px",
            boxShadow: "4px 4px 0px 0px #3F4E4F",
            color: "#c6d4df"
          }}
        >
          <Card.Body className="d-flex flex-column flex-md-row align-items-center" style={{ padding: "25px" }}>
            {/* Avatar with Status Ring */}
            <div 
              style={{ 
                position: "relative",
                border: `3px solid ${statusColor}`,
                borderRadius: "4px",
                padding: "2px",
                backgroundColor: "#1b2838",
                width: "100px",
                height: "100px",
                flexShrink: 0
              }}
            >
              <img 
                src={profile.avatarfull} 
                alt={profile.personaname} 
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "2px" }}
              />
            </div>
            
            {/* Profile Info */}
            <div className="ms-md-4 mt-3 mt-md-0 text-center text-md-start" style={{ flexGrow: 1 }}>
              <a 
                href={profile.profileurl} 
                target="_blank" 
                rel="noreferrer" 
                style={{ 
                  textDecoration: "none", 
                  color: "#ffffff", 
                  fontSize: "1.8rem", 
                  fontWeight: "bold",
                  fontFamily: '"Exo 2", sans-serif'
                }}
                className="steam-username"
              >
                {profile.personaname}
              </a>
              
              <div 
                style={{ 
                  color: statusColor, 
                  fontWeight: "bold", 
                  fontSize: "1.1rem", 
                  marginTop: "3px" 
                }}
              >
                {statusText}
              </div>
              
              {/* Quick stats */}
              <div 
                style={{ 
                  marginTop: "15px", 
                  fontSize: "1rem", 
                  display: "flex", 
                  flexWrap: "wrap", 
                  justifyContent: "center",
                  gap: "20px" 
                }}
                className="justify-content-md-start"
              >
                <div>
                  <span style={{ color: "#66c0f4", fontWeight: "bold" }}>Games Owned:</span> {profile.game_count}
                </div>
                <div>
                  <span style={{ color: "#66c0f4", fontWeight: "bold" }}>Total Playtime:</span> {profile.total_playtime_hours} hrs
                </div>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Top 10 Played Games Grid */}
      <h2 
        className="project-heading pb-3" 
        style={{ 
          fontSize: "1.8rem", 
          textAlign: "left", 
          width: "100%", 
          paddingLeft: "15px",
          color: "#ffffff"
        }}
      >
        Top Played Games
      </h2>

      {top_games && top_games.length > 0 ? (
        <Row className="g-4 px-3" style={{ width: "100%" }}>
          {top_games.map((game) => (
            <Col key={game.appid} xs={12} sm={6} md={4} lg={3} className="project-card">
              <Card 
                style={{ 
                  backgroundColor: "#1b2838", 
                  border: "1.5px solid #2a475e", 
                  borderRadius: "4px",
                  boxShadow: "3px 3px 0px 0px #3F4E4F",
                  color: "#c6d4df",
                  transition: "all 0.25s ease-in-out",
                  height: "100%"
                }}
                className="project-card-view"
              >
                <Card.Img 
                  variant="top" 
                  src={`https://cdn.akamai.steamstatic.com/steam/apps/${game.appid}/header.jpg`} 
                  alt={game.name}
                  style={{ borderTopLeftRadius: "2px", borderTopRightRadius: "2px" }}
                  onError={(e) => {
                    // Fallback to placeholder if Steam capsule art fails to load
                    e.target.onerror = null;
                    e.target.src = "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg";
                  }}
                />
                <Card.Body className="d-flex flex-column justify-content-between" style={{ padding: "15px" }}>
                  <Card.Title 
                    style={{ 
                      fontSize: "1.15rem", 
                      fontWeight: "bold", 
                      color: "#ffffff",
                      fontFamily: '"Exo 2", sans-serif',
                      marginBottom: "10px"
                    }}
                  >
                    {game.name}
                  </Card.Title>
                  <Card.Text style={{ fontSize: "0.95rem", color: "#66c0f4" }}>
                    Playtime: <strong>{game.playtime_hours} hrs</strong>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Col md={12}>
          <div style={{ color: "#898989", fontStyle: "italic", textAlign: "center" }}>
            No top games data available or profile is set to private.
          </div>
        </Col>
      )}
    </Row>
  );
}

export default Steam;
