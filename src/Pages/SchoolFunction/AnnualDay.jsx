import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaMedal } from "react-icons/fa";
import annualImg from "../Images/schoolevent.png";
import "../SchoolFunction.css";

const AnnualDay = () => {
    const navigate = useNavigate();

    return (
        <div className="school-service-page text-white">
            <Container className="py-5 text-center">
                <div className="d-flex justify-content-center align-items-center mb-4">
                    <FaMedal className="fs-1 text-warning me-3" />
                    <h1 className="text-light">Annual Day Celebration</h1>
                </div>

                <Row>
                    <Col md={12}>
                        <img
                            src={annualImg}
                            alt="Annual Day"
                            className="img-fluid rounded shadow-lg imgs"
                        />
                    </Col>
                </Row>

                <Row className="align-items-center mt-5">
                    <Col md={12}>
                        <p className="fs-5 text-start">
                            Our Annual Day services include stage decoration, lighting setup,
                            sound systems, anchors, and complete event coordination. We make
                            sure every performance shines and every student feels special.
                        </p>
                        <Button
                            variant="warning"
                            className="mt-3 fw-semibold"
                            onClick={() => navigate("/school-function")}
                        >
                            ← Back to School Events
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AnnualDay;
