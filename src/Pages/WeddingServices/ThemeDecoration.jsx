import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import "../WeddingReception.css";


const ThemeDecoration = () => {
  return (
    <div className="wedding-page text-white">
      <Container className="py-5 text-center">
        <FaHeart className="fs-1 text-danger mb-3" />
        <h1 className="text-gradient mb-4">Theme Decoration</h1>
        <p className="fs-5">
          Create a stunning backdrop that matches your love story!  
          Our team designs elegant and custom-themed decorations for your reception,  
          including floral walls, lighting setups, and stage arrangements.
        </p>
        <Button href="/wedding-reception" variant="warning" className="mt-3">⬅ Back to Wedding Page</Button>
      </Container>
    </div>
  );
};

export default ThemeDecoration;
