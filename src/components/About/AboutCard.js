import React from "react";
import Card from "react-bootstrap/Card";
import myPhoto from "../../Assets/my-photo.jpeg";
import Tilt from "react-parallax-tilt";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          {/* Floated Photo wrapping text */}
          <div className="float-md-end ms-md-5 mb-4 text-center d-flex justify-content-center">
            <Tilt>
              <img
                src={myPhoto}
                alt="about"
                className="img-fluid rounded-circle"
                style={{
                  width: "250px",
                  height: "250px",
                  objectFit: "cover",
                  border: "4px solid #A27B5C",
                  maxWidth: "100%"
                }}
              />
            </Tilt>
          </div>

          <p style={{ textAlign: "justify" }}>
            Hi there! I'm <span className="purple">Muhammad Isra Al Fattah</span>, a <span className="purple">Computer Science student</span> from Jambi, Indonesia, currently studying at <span className="purple">Universitas Negeri Padang</span>.
            <br />
            <br />
            Right now, I am gaining hands-on experience as an intern at the <span className="purple">Global Atmosphere Watch (GAW) Station</span> in Bukit Kototabang as a <span className="purple">Research Software Engineer</span>, while also sharpening my technical skills as a <span className="purple">Full-Stack Developer</span> cohort member in <span className="purple">DBS Foundation's Coding Camp 2026</span>.
            <br />
            <br />
            Outside of studies and coding, I balance my time by hitting the <span className="purple">gym, playing guitar, reading, or watching movies</span>. But a huge part of my free time goes into <span className="purple">single-player games, especially Souls-likes</span>, with <span className="purple">Elden Ring</span> being my absolute favorite.
            <br />
            <br />
            Honestly, I’m just naturally drawn to <span className="purple">tough challenges</span>, which is probably why I love both <span className="purple">programming and Souls games</span>. Even though they have a steep learning curve, the feeling of overcoming brutal obstacles is incredibly rewarding.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
