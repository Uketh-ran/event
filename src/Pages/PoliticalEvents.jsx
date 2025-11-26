import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaBullhorn, FaUsers, FaVideo } from "react-icons/fa";
import corporateImg from "./Images/corporateevent.jpg"; // add this image in src/Pages/Images
import "./CorporateEvent.css";

const PoliticalEvents = () => {
    const navigate = useNavigate();

    const services = [
        {
            icon: <FaBullhorn />,
            title: "Election Campaigns",
            path: "/election-campaign",
        },
        {
            icon: <FaUsers />,
            title: "Public Meetings & Rallies",
            path: "/public-rallies",
        },
        {
            icon: <FaVideo />,
            title: "Press Meet & Media Coverage",
            path: "/press-meet",
        },
    ];

    return (
        <div className="corporate-page text-white">
            <Container className="py-5">
                {/* Header Section */}
                <Row className="align-items-center mb-5">
                    <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
                        <h1 className="fw-bold display-5 text-gradient mb-3 animate__animated animate__fadeInDown">
                            🎉 Political Party Events
                        </h1>
                        <p className="fs-5 animate__animated animate__fadeInLeft">
                            We manage political gatherings with proper planning, stage setup,
                            sound & lighting arrangements, media handling and crowd management
                            professionally for powerful public reach.
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
                    Political Party Services 🎉
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

export default PoliticalEvents;
