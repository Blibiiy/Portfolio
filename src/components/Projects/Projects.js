import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Import project images
import imgHeartz from "../../Assets/Projects/Heartz.png";
import imgRuangBelajar from "../../Assets/Projects/Ruang_Belajar.jpg";
import imgAstroView from "../../Assets/Projects/AstroView.png";
import imgHeadgearClassification from "../../Assets/Projects/HeadGear_Classification.png";

function Projects() {
  const projectsList = [
    {
      title: "HEARTZ",
      imgPath: imgHeartz,
      description: "A speech therapy platform integrating an Express.js backend and a 2D CNN classifier with over 85% accuracy. The model successfully processed voice inputs using Mel-Spectrogram features to diagnose articulation errors in real-time. Then implemented AWS RDS for structured database management and AWS S3 to store user audio assets securely.",
      ghLink: "https://github.com/ghildnsy/Heartz",
      demoLink: "https://heartz-speech.vercel.app/",
      skills: ["Express.js", "2D CNN", "Mel-Spectrogram", "AWS RDS", "AWS S3"]
    },
    {
      title: "Ruang_Belajar",
      imgPath: imgRuangBelajar,
      description: "A mobile application using Flutter and BLoC to monitor study attentiveness and automate task scheduling. Integrated local ML Kit Face Detection to track user gaze distractions and fatigue states via the front camera in real-time. Deployed Gemini API to autonomously generate dynamic calendar schedules from unscheduled tasks based on active hours. Then implemented a local SQLite database to securely store focus metrics and calculate overall user productivity scores.",
      ghLink: "https://github.com/Blibiiy/Ruang_Belajar",
      skills: ["Flutter", "BLoC", "ML Kit", "Gemini API", "SQLite"]
    },
    {
      title: "Astro_View",
      imgPath: imgAstroView,
      description: "Built a web application using Node.js and Express to aggregate and process microservices from multiple NASA APIs. Integrated Socket.IO to manage persistent web-socket connections for real-time traffic monitoring, storing analytics in MongoDB Atlas. Implemented node-cron and Nodemailer to programmatically broadcast daily automated dispatches to email subscribers via SMTP. Then designed a clean service abstraction layer using Axios to dynamically filter and handle geospatial data arrays from the NASA EONET platform.",
      ghLink: "https://github.com/Blibiiy/AstroView",
      demoLink: "https://astroview-8xz3.onrender.com",
      skills: ["Node.js", "Express", "Socket.IO", "MongoDB Atlas", "SMTP", "Axios"]
    },
    {
      title: "HeadGear_Classification",
      imgPath: imgHeadgearClassification,
      description: "Built a serverless mobile application using Flutter to handle edge-based computer vision tasks directly on-device. Integrated a TensorFlow Lite (TFLite) classifier to categorize 20 distinct types of headgear completely offline with zero network latency. Implemented raw input normalizations to filter Top-K predictions using confidence thresholds above 20%. Then implemented a strict resource-disposal pipeline to explicitly free up native C++ memory and eliminate memory leaks.",
      ghLink: "https://github.com/Blibiiy/Headgear_Classification",
      skills: ["Flutter", "TFLite", "Computer Vision", "On-device ML", "C++ Memory"]
    }
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectsList.map((project, index) => (
            <Col md={6} key={index} className="project-card">
              <ProjectCard
                imgPath={project.imgPath}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                skills={project.skills}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
