import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaUsers, FaLightbulb, FaHandshake, FaMicrophone } from "react-icons/fa";
import corporateImg from "./Images/corporateevent.jpg"; // add this image in src/Pages/Images
import "./CorporateEvent.css";

const CorporateEvent = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaUsers className="fs-1 text-info" />,
      title: "Team Building Activities",
      path: "/team-building",
    },
    {
      icon: <FaLightbulb className="fs-1 text-warning" />,
      title: "Product Launch Events",
      path: "/product-launch",
    },
    {
      icon: <FaHandshake className="fs-1 text-success" />,
      title: "Corporate Meet & Conference",
      path: "/corporate-meet",
    },
    {
      icon: <FaMicrophone className="fs-1 text-danger" />,
      title: "Annual Day Celebrations",
      path: "/corporate-annual",
    },
  ];

  return (
    <div className="corporate-page text-white">
      <Container className="py-5">
        {/* Header Section */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <h1 className="fw-bold display-5 text-gradient mb-3 animate__animated animate__fadeInDown">
              💼 Corporate Events
            </h1>
            <p className="fs-5 animate__animated animate__fadeInLeft">
              We organize professional and memorable <strong>Corporate Events</strong> 
              that build relationships, enhance brand identity, and celebrate success. 
              From small conferences to large annual meets — we make it impactful!
            </p>

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
          Our Corporate Services 🏢
        </h2>

        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} key={index}>
              <Card
                className="service-card text-center h-100 animate__animated animate__zoomIn"
                onClick={() => navigate(service.path)}
              >
                <Card.Body>
                  {service.icon}
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

export default CorporateEvent;
