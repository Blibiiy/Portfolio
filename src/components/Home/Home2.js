import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row style={{ justifyContent: "center" }}>
          <Col md={10} className="home-about-description" style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ textAlign: "center" }}>
              I am a <b className="purple">Game Programmer</b> with a solid technical foundation as a <b className="purple">Full-Stack Developer</b>. I have hands-on experience building web applications using <b className="purple">React, Node.js, Express, and MongoDB</b>.
              <br />
              <br />
              While I can manage the entire stack, my core strength and enjoyment lie in <b className="purple">backend architecture</b>. I naturally focus on <b className="purple">optimizing system performance</b>, writing clean code, and structuring highly maintainable databases and APIs.
              <br />
              <br />
              My journey with <b className="purple">Unity and C#</b> started two years ago when I spent time diving deep into the fundamentals and gaining solid hands-on experience. After focusing heavily on software engineering and full-stack systems, I have returned to my true passion with a renewed drive to master <b className="purple">game development</b> inside out.
              <br />
              <br />
              I am now looking for an intensive opportunity to deeply expand my skills and understand the <b className="purple">game development pipeline</b> as a whole. My ultimate goal is to learn how to build polished, highly playable games, and successfully <b className="purple">launch my career in the gaming industry</b>.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
