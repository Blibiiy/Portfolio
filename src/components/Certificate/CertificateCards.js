import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgTime } from "react-icons/cg";
import { FiExternalLink } from "react-icons/fi";

function CertificateCards(props) {
  return (
    <Card className="project-card-view certificate-card-view">
      <div 
        className="certificate-img-container" 
        onClick={props.onImageClick}
        style={{ cursor: "pointer", overflow: "hidden", position: "relative" }}
      >
        <Card.Img 
          variant="top" 
          src={props.imgPath} 
          alt={props.title} 
          className="certificate-img"
        />
        <div className="certificate-img-overlay">
          <span>Click to Preview</span>
        </div>
      </div>
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title className="certificate-title" style={{ fontFamily: "'Exo 2', sans-serif" }}>
            {props.title}
          </Card.Title>
          
          <p className="certificate-issuer" style={{ color: "#A27B5C", fontSize: "0.95em", fontWeight: "bold" }}>
            {props.issuer}
          </p>

          <div className="certificate-details">
            <p className="certificate-duration" style={{ fontSize: "0.9em" }}>
              <CgTime style={{ marginBottom: "2px" }} /> &nbsp;
              <strong>Durasi:</strong> {props.duration}
            </p>
            
            {props.credentialId && (
              <p className="certificate-id" style={{ fontSize: "0.9em" }}>
                <strong>Credential ID:</strong> <code style={{ color: "#DCD7C9" }}>{props.credentialId}</code>
              </p>
            )}

            <div className="certificate-skills mt-2 mb-3">
              {props.skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        <Button 
          variant="primary" 
          href={props.credentialUrl} 
          target="_blank"
          rel="noopener noreferrer"
          className="w-100 mt-2"
        >
          <FiExternalLink /> &nbsp; Verify Credential
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CertificateCards;
