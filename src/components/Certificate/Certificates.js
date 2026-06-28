import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Particle from "../Particle";
import CertificateCard from "./CertificateCards";

// Import Unity certificates (Top 3)
import imgUnityGameDev from "../../Assets/Certificate/udemy/The Ultimate Guide to Game Development with Unity (Official).png";
import imgUnityCombat from "../../Assets/Certificate/udemy/Unity 3rd Person Combat & Traversal.png";
import imgUnityRPG from "../../Assets/Certificate/udemy/The Ultimate Guide to Creating an RPG Game in Unity 6.png";

// Import Dicoding certificates (Middle 10)
import imgDicodingDevSoftware from "../../Assets/Certificate/dicoding/Memulai Dasar Pemrograman untuk Menjadi Pengembang.png";
import imgDicodingLogic from "../../Assets/Certificate/dicoding/Pengenalan ke Logika Pemrograman (Programming Logic 101).png";
import imgDicodingAWSCloud from "../../Assets/Certificate/dicoding/Belajar Dasar Cloud dan Gen AI di AWS.png";
import imgDicodingWeb from "../../Assets/Certificate/dicoding/Belajar Dasar Pemrograman Web.png";
import imgDicodingJS from "../../Assets/Certificate/dicoding/Belajar Dasar Pemrograman JavaScript.png";
import imgDicodingFrontEnd from "../../Assets/Certificate/dicoding/Belajar Membuat Front-End Web untuk Pemula.png";
import imgDicodingReactBasic from "../../Assets/Certificate/dicoding/Belajar Membuat Aplikasi Web Dengan React.png";
import imgDicodingReactFundamental from "../../Assets/Certificate/dicoding/Belajar Fundamental Aplikasi Web dengan React.png";
import imgDicodingBackendBasic from "../../Assets/Certificate/dicoding/Belajar Back-End Pemula dengan JavaScript.png";
import imgDicodingBackendFundamental from "../../Assets/Certificate/dicoding/Belajar Fundamental Back-End dengan JavaScript.png";

// Import other Udemy certificates (Bottom 3)
import imgUdemyNodeJS from "../../Assets/Certificate/udemy/NodeJS Pemula sampai Mahir.png";
import imgUdemyReactJS from "../../Assets/Certificate/udemy/React Pemula sampai Mahir.png";
import imgUdemyFlutter from "../../Assets/Certificate/udemy/The Complete Flutter Development Bootcamp with Dart.png";

function Certificates() {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handlePreview = (image, title) => {
    setModalImage(image);
    setModalTitle(title);
    setShowModal(true);
  };

  const certificatesList = [
    // --- 3 UNITY CERTIFICATES AT THE TOP ---
    {
      title: "The Ultimate Guide to Game Development with Unity (Official)",
      issuer: "Udemy - The Ultimate Guide to Game Development with Unity (Official)",
      credentialId: "UC-5fc438af-43b6-44ea-9454-10a47084480c",
      credentialUrl: "https://ude.my/UC-5fc438af-43b6-44ea-9454-10a47084480c",
      skills: ["C#", "Unity", "Game Programming"],
      duration: "36.5 Jam",
      imgPath: imgUnityGameDev,
    },
    {
      title: "Unity 3rd Person Combat & Traversal",
      issuer: "Udemy - Unity 3rd Person Combat & Traversal",
      credentialId: "UC-f40aea29-f668-45a8-acdf-adac33214dae",
      credentialUrl: "https://ude.my/UC-f40aea29-f668-45a8-acdf-adac33214dae",
      skills: ["C#", "Unity", "Game Programming"],
      duration: "10 Jam",
      imgPath: imgUnityCombat,
    },
    {
      title: "The Ultimate Guide to Creating an RPG Game in Unity 6",
      issuer: "Udemy - Unity Alex Dev",
      credentialId: "UC-87e98933-46d7-4502-bc73-8fd96af5a46b",
      credentialUrl: "https://ude.my/UC-87e98933-46d7-4502-bc73-8fd96af5a46b",
      skills: ["C#", "Unity", "Game Programming"],
      duration: "61 Jam",
      imgPath: imgUnityRPG,
    },

    // --- 10 DICODING CERTIFICATES IN THE MIDDLE ---
    {
      title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
      issuer: "Coding Camp powered by DBS Foundation",
      credentialId: "QLZ99D2RMZ5D",
      credentialUrl: "https://dicoding.com/certificates/QLZ99D2RMZ5D",
      skills: ["Full-stack Development"],
      duration: "9 Jam",
      imgPath: imgDicodingDevSoftware,
    },
    {
      title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
      issuer: "Coding Camp powered by DBS Foundation",
      credentialId: "07Z6782V2PQR",
      credentialUrl: "https://dicoding.com/certificates/07Z6782V2PQR",
      skills: ["Full-stack Development"],
      duration: "6 Jam",
      imgPath: imgDicodingLogic,
    },
    {
      title: "Belajar Dasar Cloud dan Gen AI di AWS",
      issuer: "Coding Camp powered by DBS Foundation",
      credentialId: "0LZ0YQWQ3X65",
      credentialUrl: "https://dicoding.com/certificates/0LZ0YQWQ3X65",
      skills: ["AWS", "Cloud Computing"],
      duration: "18 Jam",
      imgPath: imgDicodingAWSCloud,
    },
    {
      title: "Belajar Dasar Pemrograman Web",
      issuer: "Coding Camp powered by DBS Foundation",
      credentialId: "NVP7N8M8OZR0",
      credentialUrl: "https://dicoding.com/certificates/NVP7N8M8OZR0",
      skills: ["HTML", "CSS"],
      duration: "45 Jam",
      imgPath: imgDicodingWeb,
    },
    {
      title: "Belajar Dasar Pemrograman JavaScript",
      issuer: "Coding Camp powered by DBS Foundation",
      credentialId: "QLZ99RJR7Z5D",
      credentialUrl: "https://dicoding.com/certificates/QLZ99RJR7Z5D",
      skills: ["JavaScript", "OOP"],
      duration: "46 Jam",
      imgPath: imgDicodingJS,
    },
    {
      title: "Belajar Membuat Front-End Web untuk Pemula",
      issuer: "Coding Camp powered by DBS Foundation",
      credentialId: "1RXYW0K0QZVM",
      credentialUrl: "https://dicoding.com/certificates/1RXYW0K0QZVM",
      skills: ["DOM", "HTML", "CSS", "JavaScript"],
      duration: "45 Jam",
      imgPath: imgDicodingFrontEnd,
    },
    {
      title: "Belajar Membuat Aplikasi Web dengan React",
      issuer: "Coding Camp powered by DBS Foundation",
      credentialId: "1OP8RJK4QZQK",
      credentialUrl: "https://dicoding.com/certificates/1OP8RJK4QZQK",
      skills: ["React.js"],
      duration: "35 Jam",
      imgPath: imgDicodingReactBasic,
    },
    {
      title: "Belajar Fundamental Aplikasi Web dengan React",
      issuer: "Coding Camp powered by DBS Foundation",
      credentialId: "2VX305DKNXYQ",
      credentialUrl: "https://dicoding.com/certificates/2VX305DKNXYQ",
      skills: ["React.js"],
      duration: "55 Jam Belajar",
      imgPath: imgDicodingReactFundamental,
    },
    {
      title: "Belajar Back-End Pemula dengan JavaScript",
      issuer: "Coding Camp powered by DBS Foundation",
      credentialId: "81P2O5YL8ZOY",
      credentialUrl: "https://dicoding.com/certificates/81P2O5YL8ZOY",
      skills: ["JavaScript", "Node.js"],
      duration: "50 Jam",
      imgPath: imgDicodingBackendBasic,
    },
    {
      title: "Belajar Fundamental Back-End dengan JavaScript",
      issuer: "Coding Camp powered by DBS Foundation",
      credentialId: "L4PQ9WO7VPO1",
      credentialUrl: "https://dicoding.com/certificates/L4PQ9WO7VPO1",
      skills: ["AWS", "PostgreSQL", "JavaScript"],
      duration: "90 Jam",
      imgPath: imgDicodingBackendFundamental,
    },

    // --- 3 UDEMY CERTIFICATES AT THE BOTTOM ---
    {
      title: "NodeJS : Pemula sampai Mahir",
      issuer: "Udemy - Programmer Zaman Now",
      credentialId: "UC-7e98f8fe-931f-4cdd-94d0-d7fb1d4c0d5f",
      credentialUrl: "https://ude.my/UC-7e98f8fe-931f-4cdd-94d0-d7fb1d4c0d5f",
      skills: ["JavaScript", "Node.js"],
      duration: "27.5 Jam",
      imgPath: imgUdemyNodeJS,
    },
    {
      title: "React.js : Pemula sampai Mahir",
      issuer: "Udemy - Programmer Zaman Now",
      credentialId: "UC-85466b67-43c5-4101-8656-7bba38126464",
      credentialUrl: "https://ude.my/UC-85466b67-43c5-4101-8656-7bba38126464",
      skills: ["React.js"],
      duration: "10.5 Jam",
      imgPath: imgUdemyReactJS,
    },
    {
      title: "The Complete Flutter Development Bootcamp with Dart",
      issuer: "Udemy - Dr. Angela Yu, Developer and Lead Instructor",
      credentialId: "UC-42c7e6ff-ecde-40a5-9d45-d68d474524b9",
      credentialUrl: "https://ude.my/UC-42c7e6ff-ecde-40a5-9d45-d68d474524b9",
      skills: ["Dart", "Flutter"],
      duration: "29 Jam",
      imgPath: imgUdemyFlutter,
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certificates</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here is a collection of professional certificates I have earned.
        </p>
        
        {/* Uniform 3-column Grid (Col md={4}) */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {certificatesList.map((cert, index) => (
            <Col md={4} key={index} className="project-card">
              <CertificateCard
                imgPath={cert.imgPath}
                title={cert.title}
                issuer={cert.issuer}
                credentialId={cert.credentialId}
                credentialUrl={cert.credentialUrl}
                skills={cert.skills}
                duration={cert.duration}
                onImageClick={() => handlePreview(cert.imgPath, cert.title)}
              />
            </Col>
          ))}
        </Row>
      </Container>

      {/* Lightbox Modal for Certificate Preview */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
        contentClassName="certificate-modal-content"
      >
        <Modal.Header closeButton className="certificate-modal-header">
          <Modal.Title style={{ fontFamily: "'Exo 2', sans-serif" }}>
            {modalTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="certificate-modal-body">
          <div className="text-center">
            <img
              src={modalImage}
              alt="Certificate Full View"
              className="img-fluid certificate-modal-img"
            />
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default Certificates;
