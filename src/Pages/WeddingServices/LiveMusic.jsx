import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaMusic } from "react-icons/fa";
import "../WeddingReception.css";
import { useNavigate } from "react-router-dom";
import themeImg from "../Images/anniversary.jpg.avif";

const LiveMusic = () => {
  const navigate = useNavigate();
  return (
    <div className="wedding-page text-white">
      <Container className="py-5 text-center">
        <div className="d-flex align-items-center justify-content-center mb-4">
          <FaMusic className="fs-1 text-info " />
          <h1 className="text-light">Live Music & DJ</h1>
        </div>
        <img
          src={themeImg}
          alt="Romantic Theme Decoration"
          className="img-fluid rounded imgs shadow mb-4 imgs"
        />
        <p className="fs-5">
          Music brings magic to your reception!
          Choose from live bands, DJs, or classical performances to match your vibe.
        </p>
        <Button onClick={() => navigate("/wedding-reception")} variant="warning" className="mt-3">⬅ Back to Wedding Page</Button>
      </Container>
    </div>
  );
};

export default LiveMusic;
