import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaGlassCheers } from "react-icons/fa";
import "../WeddingReception.css";
import { useNavigate } from "react-router-dom";
import themeImg from "../Images/anniversary.jpg.avif";

const ReceptionParty = () => {
  const navigate = useNavigate();
  return (
    <div className="wedding-page text-white">
      <Container className="py-5 text-center">
        <div className="d-flex align-items-center justify-content-center mb-4">
          <FaGlassCheers className="fs-1 text-warning " />
          <h1 className="text-light">Reception Party</h1>
        </div>
        <img
          src={themeImg}
          alt="Romantic Theme Decoration"
          className="img-fluid rounded imgs shadow mb-4 imgs"
        />
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
