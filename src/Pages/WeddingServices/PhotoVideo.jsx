import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaCameraRetro } from "react-icons/fa";
import "../WeddingReception.css";
import { useNavigate } from "react-router-dom";
import themeImg from "../Images/anniversary.jpg.avif";

const PhotoVideo = () => {
  const navigate = useNavigate();
  return (
    <div className="wedding-page text-white">
      <Container className="py-5 text-center">
        <div className="d-flex align-items-center justify-content-center mb-4">
          <FaCameraRetro className="fs-1 text-light " />
          <h1 className="text-light">Photography & Videography</h1>
        </div>
        <img
          src={themeImg}
          alt="Romantic Theme Decoration"
          className="img-fluid rounded imgs shadow mb-4 imgs"
        />
        <p className="fs-5">
          Capture every special moment with our professional photographers and videographers.
          We deliver cinematic wedding albums and highlight reels you’ll treasure forever.
        </p>
        <Button onClick={() => navigate("/wedding-reception")} variant="warning" className="mt-3">⬅ Back to Wedding Page</Button>
      </Container>
    </div>
  );
};

export default PhotoVideo;
