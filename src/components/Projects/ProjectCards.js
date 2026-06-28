import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view d-flex flex-column justify-content-between">
      <div className="project-img-container">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" className="project-img" />
      </div>
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: "bold", fontSize: "1.2rem", color: "white" }}>
            {props.title}
          </Card.Title>
          
          <Card.Text style={{ textAlign: "justify", fontSize: "0.95rem", color: "#DCD7C9", minHeight: "100px" }} className="my-3">
            {props.description}
          </Card.Text>

          <div className="project-skills mt-2 mb-4">
            {props.skills && props.skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="d-flex w-100 gap-2 mt-auto">
          <Button 
            variant="primary" 
            href={props.ghLink} 
            target="_blank"
            className={props.demoLink ? "w-50" : "w-100"}
          >
            <BsGithub /> &nbsp; GitHub
          </Button>

          {props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="w-50"
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
