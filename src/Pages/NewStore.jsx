import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import corporateImg from "./Images/corporateevent.jpg"; // add this image in src/Pages/Images
import "./CorporateEvent.css";

const NewStore = () => {
  const navigate = useNavigate();
  const services = [
    {
      icon: "✂️",
      title: "Grand Ribbon Cutting Setup",
      path: "/ribbon-cutting",
    },
    {
      icon: "🎤",
      title: "Stage & Audio Arrangements",
      path: "/stage-audio",
    },
    {
      icon: "📸",
      title: "Photo & Video Coverage",
      path: "/store-photo-video",
    },
    {
      icon: "🌺",
      title: "Welcome Banner & Floral Decoration",
      path: "/store-decoration",
    },
    {
      icon: "🥤",
      title: "Snacks & Refreshment Catering",
      path: "/refreshment-catering",
    },
  ];

  return (
    <div className="corporate-page text-white">
      <Container className="py-5">
        {/* Header Section */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <h1 className="fw-bold display-5 text-gradient mb-3 animate__animated animate__fadeInDown">
              🏪 New Store Opening Ceremony
            </h1>
            <p className="fs-5 animate__animated animate__fadeInLeft">
              We organize professional and memorable <strong>New Store Opening Ceremony</strong>
              that build relationships, enhance brand identity, and celebrate success.
              From small conferences to large annual meets — we make it impactful!
            </p>
            <Button
              variant="success"
              href="https://wa.me/9344146346"
              className="mt-3"
            >
              💬 Contact Us on WhatsApp
            </Button> <br />
            <Button
              variant="light"
              className="mt-3 fw-semibold text-dark"
              onClick={() => navigate("/")}
            >
              ← Back to Home
            </Button>
          </Col>

          {/* Right Image */}
          <Col md={6} className="text-center animate__animated animate__fadeInRight">
            <img
              src={corporateImg}
              alt="Corporate Event"
              className="img-fluid rounded shadow-lg corporate-img imgs"
            />
          </Col>
        </Row>

        {/* Services Section */}
        <h2 className="text-center fw-bold mb-4 text-gradient animate__animated animate__fadeInUp">
          New Store Opening Ceremony Services 🏪
        </h2>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} key={index}>
              <Card
                className="service-card text-center h-100 animate__animated animate__zoomIn"
                onClick={() => navigate(service.path)}
              >
                <Card.Body>
                  <span style={{ fontSize: "1.8rem" }}>{service.icon}</span>
                  <Card.Title className="fw-bold mt-3">
                    {service.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default NewStore;
