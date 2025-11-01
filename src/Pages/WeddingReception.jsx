import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaHeart, FaGlassCheers, FaMusic, FaCameraRetro } from "react-icons/fa";
import "./WeddingReception.css";
import weddingImage from "./Images/weddingreception.jpg";
import { Link } from "react-router-dom";



const WeddingReception = () => {
    return (
        <div className="wedding-page text-white">
            <Container className="py-5 text-center">
                {/* Title */}
                <h1 className="fw-bold display-4 text-gradient mb-3 animate__animated animate__fadeInDown">
                    💍 Wedding Reception 💍
                </h1>
                <p className="text-warning fs-5 fw-semibold animate__animated animate__fadeInUp">
                    Make your special day even more magical ✨
                </p>

                {/* Description */}
                <Row className="mt-5 align-items-center">
                    <Col md={6} className="text-start">
                        <p className="fs-5">
                            Celebrate your love story with <span className="text-primary">Cuddle Teddy Events</span>.
                            We handle everything — from stunning stage decorations to lively entertainment —
                            ensuring your big day is unforgettable.
                        </p>
                        <ul className="fs-5 list-unstyled">
                            <li>💐 Beautiful Stage Decoration</li>
                            <li>🎵 Music, DJ, and Live Bands</li>
                            <li>📸 Professional Photography & Videography</li>
                            <li>🍽️ Catering & Guest Management</li>
                            <li>✨ Lighting and Floral Arrangements</li>
                        </ul>

                        <Button
                            variant="success"
                            href="https://wa.me/9344146346"
                            className="mt-3"
                        >
                            💬 Contact Us on WhatsApp
                        </Button>
                    </Col>

                    <Col md={6} className="mt-4 mt-md-0">
                        <img
                            src={weddingImage}
                            alt="Wedding Reception"
                            className="img-fluid rounded shadow-lg wedding-img"
                        />
                    </Col>
                </Row>

                {/* Service Cards */}
                <Row className="mt-5 g-4">
                    <Col md={3} sm={6}>
                        <Link to="/theme-decoration" className="text-decoration-none">
                            <Card className="service-card">
                                <Card.Body>
                                    <FaHeart className="fs-1 text-danger mb-3" />
                                    <Card.Title>Theme Decoration</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col md={3} sm={6}>
                        <Link to="/reception-party" className="text-decoration-none">
                            <Card className="service-card">
                                <Card.Body>
                                    <FaGlassCheers className="fs-1 text-warning mb-3" />
                                    <Card.Title>ReceptionParty</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col md={3} sm={6}>
                        <Link to="/live-music" className="text-decoration-none">
                            <Card className="service-card">
                                <Card.Body>
                                    <FaMusic className="fs-1 text-info mb-3" />
                                    <Card.Title>LiveMusic & DJ</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col md={3} sm={6}>
                        <Link to="/photo-video" className="text-decoration-none">
                            <Card className="service-card">
                                <Card.Body>
                                    <FaCameraRetro className="fs-1 text-light mb-3" />
                                    <Card.Title>Photos & Videos</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WeddingReception;
