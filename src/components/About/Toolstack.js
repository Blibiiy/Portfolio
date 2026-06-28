import React from "react";
import { Col, Row } from "react-bootstrap";

function Toolstack() {
  const tools = [
    "Windows",
    "Google Chrome",
    "Vs Code",
    "Pycharm",
    "Figma",
    "Visual Studio",
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map((tool, index) => (
        <Col key={index} xs={4} md={2} className="tech-icons">
          <div className="tech-icons-text">{tool}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
