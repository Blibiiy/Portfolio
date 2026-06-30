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
              I am a <b className="purple">Full-Stack Software Engineer</b> with a deep passion for <b className="purple">Game Development</b>. I possess a strong technical foundation and hands-on experience building scalable web applications using <b className="purple">React, Node.js, Express, and MongoDB</b>.
              <br />
              <br />
              While I am capable across the entire stack, my core expertise and enjoyment lie in <b className="purple">backend architecture</b>. I consistently prioritize <b className="purple">optimizing system performance</b>, writing clean code, and structuring highly maintainable databases and APIs.
              <br />
              <br />
              I have successfully applied these rigorous software engineering principles to my work with <b className="purple">Unity and C#</b>. Having built a robust foundation in <b className="purple">full-stack systems</b>, I am channeling my technical problem-solving skills into my true passion: mastering <b className="purple">complex gameplay mechanics</b> and the <b className="purple">game development pipeline</b> inside out.
              <br />
              <br />
              I am now seeking an intensive opportunity to deeply expand my <b className="purple">game development capabilities</b> and contribute to a renowned game studio. My ultimate goal is to bridge my software engineering background with interactive design to build polished, <b className="purple">highly playable games</b> and successfully launch my career in the <b className="purple">gaming industry</b>.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
