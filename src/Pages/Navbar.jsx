import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
// import { FaTeddyBear } from "react-icons/fa6"; // you can change the icon
import "./Navbar.css";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar-dark nav-bg py-3 shadow-sm fixed-top">
      <Container>
        <Navbar.Brand href="#" className="fw-bold fs-4 text-gradient">
          {/* <FaTeddyBear className="me-2" /> */}
          Cuddle Teddy Events
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="/" className="text-light mx-2">Home</Nav.Link>
            {/* <Nav.Link href="#about" className="text-light mx-2">About</Nav.Link> */}
            <Nav.Link href="#contact" className="text-light mx-2">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
