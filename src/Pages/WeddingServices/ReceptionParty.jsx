import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaGlassCheers } from "react-icons/fa";
import "../WeddingReception.css";

const ReceptionParty = () => {
  return (
    <div className="wedding-page text-white">
      <Container className="py-5 text-center">
        <FaGlassCheers className="fs-1 text-warning mb-3" />
        <h1 className="text-gradient mb-4">Reception Party</h1>
        <p className="fs-5">
          Celebrate your big day with music, dance, and fun!  
          From DJ lights to stage sound systems, we handle every detail for a grand party experience.
        </p>
        <Button href="/wedding-reception" variant="warning" className="mt-3">⬅ Back to Wedding Page</Button>
      </Container>
    </div>
  );
};

export default ReceptionParty;
