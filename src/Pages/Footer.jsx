import React from "react";
import { Container } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-bg text-white py-4 mt-1">
      <Container className="text-center">
        <p className="mb-2 fw-semibold">Contact Us</p>
        <p className="mb-1"><FaPhoneAlt /> 9344146346</p>
        <p className="mb-1"><FaEnvelope /> srivari1407@gmail.com</p>
        <p><FaMapMarkerAlt /> Trichy, Tamil Nadu</p>
        <p className="small mb-0 mt-3 text-secondary">
          © {new Date().getFullYear()} Cuddle Teddy Events. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
