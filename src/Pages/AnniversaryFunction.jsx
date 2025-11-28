import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import anniversaryImg from "./Images/anniversary.jpg.avif";
import "./AnniversaryFunction.css";

const AnniversaryFunction = () => {
    const navigate = useNavigate();

    const services = [
        { title: "💞 Romantic Theme Decoration", path: "/anniversary-theme" },
        { title: "💑 Couple Entry Setup", path: "/anniversary-entry" },
        { title: "📸 Photo & Video Coverage", path: "/anniversary-photo-video" },
        { title: "🎶 Live Music & Anchors", path: "/anniversary-live-music" },
        { title: "🍰 Catering & Cake Setup", path: "/anniversary-catering" },
    ];

    return (
        <div className="anniversary-page pt-0 text-white">
            <Container className="py-5 text-center">
                <h1 className="fw-bold display-5 text-gradient mb-3 animate__animated animate__fadeInDown ">
                    💞 Anniversary Function 💞
                </h1>
                <p className="text-warning fs-5 fw-semibold animate__animated animate__fadeInUp">
                    Make your special day even more magical ✨
                </p>
                <Row className="mt-5">
                    <Col md={6} className="text-start mt-4 mt-md-0">
                        <p className="fs-5 ">
                            Celebrate your love and togetherness with an elegant and romantic setup crafted just for you.
                            From decorations to entertainment, we make your anniversary truly unforgettable! 💖
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

                    <Col md={6} className="text-center animate__animated animate__fadeInRight">
                        <img
                            src={anniversaryImg}
                            alt="Anniversary Celebration"
                            className="img-fluid rounded shadow-lg anniversary-img imgs"
                        />
                    </Col>
                </Row>

                {/* Service Cards */}
                <h2 className="text-center fw-bold mb-4 mt-4 text-gradient animate__animated animate__fadeInUp">
                    Our Anniversary Services 💐
                </h2>

                <Row className="g-4">
                    {services.map((service, index) => (
                        <Col md={4} sm={6} key={index}>
                            <Card className="service-card text-center h-100 animate__animated animate__zoomIn" onClick={() => navigate(service.path)} style={{ cursor: 'pointer' }}>
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

export default AnniversaryFunction;
