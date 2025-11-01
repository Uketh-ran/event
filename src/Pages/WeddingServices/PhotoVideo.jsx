import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaCameraRetro } from "react-icons/fa";
import "../WeddingReception.css";

const PhotoVideo = () => {
  return (
    <div className="wedding-page text-white">
      <Container className="py-5 text-center">
        <FaCameraRetro className="fs-1 text-light mb-3" />
        <h1 className="text-gradient mb-4">Photography & Videography</h1>
        <p className="fs-5">
          Capture every special moment with our professional photographers and videographers.  
          We deliver cinematic wedding albums and highlight reels you’ll treasure forever.
        </p>
        <Button href="/wedding-reception" variant="warning" className="mt-3">⬅ Back to Wedding Page</Button>
      </Container>
    </div>
  );
};

export default PhotoVideo;
