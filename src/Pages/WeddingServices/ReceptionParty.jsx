import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaGlassCheers } from "react-icons/fa";
import "../WeddingReception.css";
import { useNavigate } from "react-router-dom";

const ReceptionParty = () => {
    const navigate = useNavigate();
  return (
    <div className="wedding-page text-white">
      <Container className="py-5 text-center">
        <FaGlassCheers className="fs-1 text-warning mb-3" />
        <h1 className="text-gradient mb-4">Reception Party</h1>
        <p className="fs-5">
          Celebrate your big day with music, dance, and fun!  
          From DJ lights to stage sound systems, we handle every detail for a grand party experience.
        </p>
        <Button onClick={() => navigate("/wedding-reception")} variant="warning" className="mt-3">⬅ Back to Wedding Page</Button>
      </Container>
    </div>
  );
};

export default ReceptionParty;
