import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaMedal, FaRunning } from "react-icons/fa";
import schoolImg from "./Images/schoolevent.png"; // main image for school events
import "./SchoolFunction.css";

const SchoolFunction = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaMedal className="fs-1 text-warning" />,
      title: "Annual Day",
      path: "/annual-day",
    },
    {
      icon: <FaRunning className="fs-1 text-danger" />,
      title: "Sports Day",
      path: "/sports-day",
    },
  ];

  return (
    <div className="school-page text-white">
      <Container className="py-5">
        {/* Header Section */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <h1 className="fw-bold display-5 text-gradient mb-3 animate__animated animate__fadeInDown">
              🏫 School Events
            </h1>
            <p className="fs-5 animate__animated animate__fadeInLeft">
              We organize <strong>Annual Days</strong> and <strong>Sports Events</strong> 
              that bring out the spirit and talent of students. From decorations 
              to event management, we make every moment unforgettable!
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
              src={schoolImg}
              alt="School Event"
              className="img-fluid rounded shadow-lg school-img imgs"
            />
          </Col>
        </Row>

        {/* Services Section */}
        <h2 className="text-center fw-bold mb-4 text-gradient animate__animated animate__fadeInUp">
          Our School Services 🎓
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

export default SchoolFunction;
