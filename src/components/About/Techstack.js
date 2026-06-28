import React from "react";
import { Col, Row } from "react-bootstrap";

function Techstack() {
  const technologies = [
    "C++",
    "C#",
    "Unity",
    "Javascript",
    "Node.Js",
    "React.Js",
    "PostgreSQL",
    "Mongo DB",
    "Next.js",
    "Express.Js",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Git",
    "Firebase",
    "Docker",
    "Postgresql",
    "Python",
    "Flutter",
    "Tailwind",
    "Postman",
    "AWS",
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {technologies.map((tech, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <div className="tech-icons-text">{tech}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
