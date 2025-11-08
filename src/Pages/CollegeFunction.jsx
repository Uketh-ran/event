import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaLaugh, FaMicrophoneAlt, FaLightbulb, FaHeart } from "react-icons/fa";
import collegeImg from "./Images/collegeevent.png"; // make sure image exists
import "./CollegeFunction.css";

const CollegeFunction = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaLaugh className="fs-1 text-warning" />,
      title: "Fresher’s Day",
      path: "/freshers-day",
    },
    {
      icon: <FaMicrophoneAlt className="fs-1 text-danger" />,
      title: "Cultural Fest",
      path: "/cultural-fest",
    },
    {
      icon: <FaLightbulb className="fs-1 text-info" />,
      title: "Technical Symposium",
      path: "/technical-symposium",
    },
    {
      icon: <FaHeart className="fs-1 text-success" />,
      title: "Farewell Function",
      path: "/farewell-function",
    },
  ];

  return (
    <div className="college-page text-white">
      <Container className="py-5">
        {/* Header Section */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <h1 className="fw-bold display-5 text-gradient mb-3 animate__animated animate__fadeInDown">
              🎓 College Events
            </h1>
            <p className="fs-5 animate__animated animate__fadeInLeft">
              From <strong>Freshers’ Day</strong> to <strong>Farewell Functions</strong>, 
              we bring your campus events to life with creative themes, 
              professional coordination, and unforgettable memories!
            </p>

            <Button
              variant="light"
              className="mt-3 fw-semibold text-dark"
              onClick={() => navigate("/")}
            >
              ← Back to Home
            </Button>
          </Col>

          {/* Right Side Image */}
          <Col md={6} className="text-center animate__animated animate__fadeInRight">
            <img
              src={collegeImg}
              alt="College Event"
              className="img-fluid rounded shadow-lg college-img imgs"
            />
          </Col>
        </Row>

        {/* Services Section */}
        <h2 className="text-center fw-bold mb-4 text-gradient animate__animated animate__fadeInUp">
          Our College Services 🎉
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
                  <Card.Title className="fw-bold mt-3">{service.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CollegeFunction;
