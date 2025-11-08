import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaLightbulb  } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import themeImg from "../Images/collegeevent.png";
import "../CollegeFunction.css";


const Technicalsymposium = () => {
  const navigate = useNavigate();
  return (
    <div className="wedding-page text-white">
      <Container className="py-5 text-center">
        <div className="d-flex align-items-center justify-content-center mb-4">
          <FaLightbulb  className="fs-1 text-info" />
          <h1 className="text-light ">Technical Symposium</h1>
        </div>
        <img
          src={themeImg}
          alt="Romantic Theme Decoration"
          className="img-fluid rounded imgs shadow mb-4 imgs"
        />
        <p className="fs-5">
          Create a stunning backdrop that matches your love story!
          Our team designs elegant and custom-themed decorations for your reception,
          including floral walls, lighting setups, and stage arrangements.
        </p>
        <Button onClick={() => navigate("/college-function")} variant="warning" className="mt-3">⬅ Back to College Events</Button>
      </Container>
    </div>
  );
};

export default Technicalsymposium;
