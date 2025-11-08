import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import "../WeddingReception.css";
import { useNavigate } from "react-router-dom";
import themeImg from "../Images/anniversary.jpg.avif";


const ThemeDecoration = () => {
  const navigate = useNavigate();
  return (
    <div className="wedding-page text-white">
      <Container className="py-5 text-center">
        <div className="d-flex align-items-center justify-content-center mb-4">
          <FaHeart className="fs-1 text-danger" />
          <h1 className="text-light ">Theme Decoration</h1>
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
        <Button onClick={() => navigate("/wedding-reception")} variant="warning" className="mt-3">⬅ Back to Wedding Page</Button>
      </Container>
    </div>
  );
};

export default ThemeDecoration;
