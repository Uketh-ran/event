import React from "react";
import { Container, Button } from "react-bootstrap";
import { IoBalloonOutline } from "react-icons/io5";
// import "../WeddingReception.css";
import "./BirthdayService.css";
import { useNavigate } from "react-router-dom";
import themeImg from "../Images/anniversary.jpg.avif";

const BdThemeDecoration = () => {
    const navigate = useNavigate();
    return (
        <div className="wedding-page text-white">
            <Container className="py-5 text-center">
                <div className="d-flex align-items-center justify-content-center mb-4">
                    <IoBalloonOutline className="fs-1 text-warning" />
                    <h1 className="text-light mb-0">Theme Decoration</h1>
                </div>
                <img
                    src={themeImg}
                    alt="Romantic Theme Decoration"
                    className="img-fluid rounded imgs shadow mb-4 imgs"
                />
                <p className="fs-5">
                    jhfdfdxhvghcf
                </p>
                <Button onClick={() => navigate("/birthday-function")} variant="warning" className="mt-3">⬅ Back to Birthday Page</Button>
            </Container>
        </div>
    );
};

export default BdThemeDecoration;
