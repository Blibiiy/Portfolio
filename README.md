# M. Isra Al Fattah - Personal Portfolio Website

This is a customized personal portfolio website built with **React.js**. It features a modern **Retro-Gaming / Tech-Minimalist** aesthetic with a slate and earth tone color palette, tailored to showcase skills in **Game Programming** and **Full-Stack Software Engineering**.

Developed by **M. Isra Al Fattah** (israalfattah), based on a modified template of Soumyajit's personal portfolio.

---

## Color Palette & Design System
* **Primary Background**: `#2C3639` (Dark Slate / Charcoal)
* **Secondary Elements**: `#3F4E4F` (Muted Green-Grey)
* **Highlight / Accent**: `#A27B5C` (Warm Cokelat / Accent)
* **Text / Light Elements**: `#DCD7C9` (Cream)
* **Typography**: *Exo 2* for headings & buttons, *PT Mono* for descriptions & code elements.
* **Vibe**: Clean retro gaming borders with flat shadows and smooth scale transitions.

---

## Key Features & Pages

### 1. Home
* Custom introduction outlining full-stack software engineering background and passion for game development.
* Interactive retro social media links (GitHub, LinkedIn, Instagram).
* Monospace type-writer animations (optional) and clean structure.

### 2. About
* **Bio Section**: A flowing, non-rigid layout where the profile picture wraps naturally with the descriptive text.
* **Technical Skills & Tools**: Interactive grid of software development and game programming technology icons.
* **GitHub Contribution Calendar**: Visual representation of active coding contributions using the custom brown accent theme.
* **Steam Top Games**: Integration of a custom Node.js script that fetches real-time Steam gameplay metrics, displaying the top 11 most played games with custom playtime calculations.

### 3. Projects
* Displayed in a wide **2x2 Grid Layout** for maximum readability.
* Core projects highlighted:
  1. **HEARTZ**: A speech therapy platform integrating an Express.js backend and a 2D CNN classifier.
  2. **Ruang_Belajar**: A mobile app using Flutter and BLoC with gaze distraction and fatigue tracking.
  3. **Astro_View**: A web app using Node.js/Express to aggregate NASA API microservices with Socket.IO.
  4. **HeadGear_Classification**: A serverless Flutter mobile app utilizing TensorFlow Lite (TFLite) for offline computer vision.
* Custom button layouts that dynamically adapt to show either GitHub, Demo, or both side-by-side.

### 4.CV
* Dedicated page to preview and directly download `Muhammad_Isra_Alfattah_CV.pdf` inside the same tab.

### 5.Certificate
* Displays a comprehensive collection of **16 professional credentials** in a consistent grid layout.
* **Unity/Game Dev certificates** are positioned at the very top (first 3), followed by 10 Dicoding credentials and 3 other Udemy credentials.
* **Modal Lightbox Preview**: Clicking any certificate card opens a beautiful full-screen modal preview directly in the same tab, keeping the user in the app.

---

## Tech Stack & Dependencies
* **Core**: React.js (v17.0.2), React-Bootstrap, React Router DOM (v6)
* **PDF rendering**: react-pdf
* **Github Contributions**: react-github-calendar
* **Icons**: react-icons (Tabler Icons, FontAwesome, Boxicons, AntDesign)
* **Styling**: Custom CSS3 variables and Bootstrap grid

---

## Getting Started & Setup

### Prerequisites
Make sure you have Node.js and npm installed on your machine.

### Installation
1. Clone or download this repository.
2. In the project directory, run:
   ```bash
   npm install
   ```

### Running the App Locally
Run the React development server:
```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Updating Steam Data
To sync your top 11 most played games from Steam:
1. Ensure your Steam Web API Key and Steam ID are configured (usually in scripts/fetchSteamData.js or environment variables).
2. Execute the fetch script:
   ```bash
   node scripts/fetchSteamData.js
   ```

### Production Build
Create an optimized production bundle:
```bash
npm run build
```
The compiled files will be saved in the `build/` folder, ready for deployment.
