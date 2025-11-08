import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import themeImg from "../Images/anniversary.jpg.avif";

import "./AnniversaryService.css";

const Cateringcakesetup = () => {
  const navigate = useNavigate();

  return (
    <div className="anniversary-service-page text-white text-center py-5">
      <Container>
        <h2 className="fw-bold mb-4">🍰 Catering & Cake Setup</h2>
        <img
          src={themeImg}
          alt="Romantic Theme Decoration"
          className="img-fluid rounded imgs shadow mb-4 imgs"
        />
        <p className="fs-5">
          We create romantic vibes with beautiful flower setups, candles, fairy lights,
          and customized backdrops to make your anniversary look dreamy and elegant. 🌹✨
        </p>
        <Button variant="warning" onClick={() => navigate("/anniversary-function")}>
          ← Back to Anniversary Page
        </Button>
      </Container>
    </div>
  );
};

export default Cateringcakesetup;
