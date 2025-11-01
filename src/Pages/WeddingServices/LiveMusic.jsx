import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaMusic } from "react-icons/fa";
import "../WeddingReception.css";
import { useNavigate } from "react-router-dom";

const LiveMusic = () => {
    const navigate = useNavigate();
  return (
    <div className="wedding-page text-white">
      <Container className="py-5 text-center">
        <FaMusic className="fs-1 text-info mb-3" />
        <h1 className="text-gradient mb-4">Live Music & DJ</h1>
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
