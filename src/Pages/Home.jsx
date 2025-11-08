
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
    FaWhatsapp,
    FaEnvelope,
    FaInstagram,
    FaFacebook,
    FaYoutube,
} from "react-icons/fa";
import teddy from "./Images/teddy.png"; // your image path
import "./Home.css"; // custom styles

const Home = () => {
    return (
        <div className="home-page text-white">
            <Container className="py-5 text-center">
                {/* Title */}
                <h1 className="fw-bold display-4 text-gradient animate__animated animate__fadeInDown">
                    💜 Cuddle Teddy Events 💜
                </h1>
                <p className="text-warning fs-5 fw-semibold">Functions & Events</p>

                <Row className="align-items-center mt-5 g-4">
                    {/* Left Text Section */}
                    <Col
                        xs={12}
                        md={6}
                        className="text-start text-md-start text-center animate__animated animate__fadeInLeft"
                    >
                        <li>
                            💍 <Link to="/wedding-reception" className="event-link">Wedding Reception</Link>
                        </li>
                        <li>
                            🎂 <Link to="/birthday-function" className="event-link"> Birthday Function</Link>
                        </li>
                        <li>
                            💞 <Link to="/anniversary-function" className="event-link"> Anniversary Function</Link>
                        </li>
                        <li>
                            🏫  <Link to="/school-function" className="event-link"> School Function</Link>
                        </li>
                        <li>
                            🎓 <Link to="/college-function" className="event-link"> College Function</Link>
                        </li>
                        <li>
                            🏢 <Link to="/corporate-function" className="event-link"> Corporate Event Function</Link>
                        </li>
                        {/* <ul className="fs-5 list-unstyled mx-auto" style={{ maxWidth: "400px" }}>
              <li>🏪 New Store Opening Ceremony</li>
              <li>🎉 Political Party Events</li>
            </ul> */}

                        <p className="mt-4 text-info fw-bold animate__animated animate__fadeInUp">
                            All Function Events can Create a <br />
                            <span className="text-primary">Memorable & Unique Celebration!</span>
                        </p>

                        {/* Buttons */}
                        <div className="mt-4 d-flex flex-wrap justify-content-center justify-content-md-start gap-3">
                            <Button
                                variant="success"
                                href="https://wa.me/9344146346"
                                className="btn-custom"
                            >
                                <FaWhatsapp className="me-2" /> WhatsApp
                            </Button>
                            <Button
                                variant="danger"
                                href="mailto:srivari1407@gmail.com"
                                className="btn-custom"
                            >
                                <FaEnvelope className="me-2" /> Email Us
                            </Button>
                        </div>

                        {/* Social Icons */}
                        <div className="mt-4 fs-3 d-flex justify-content-center justify-content-md-start gap-4">
                            <a href="/" className="text-light social-icon">
                                <FaInstagram />
                            </a>
                            <a href="/" className="text-light social-icon">
                                <FaFacebook />
                            </a>
                            <a href="/" className="text-light social-icon">
                                <FaYoutube />
                            </a>
                        </div>
                    </Col>

                    {/* Right Teddy Image */}
                    <Col
                        xs={12}
                        md={6}
                        className="animate__animated animate__fadeInRight d-flex justify-content-center"
                    >
                        <img
                            src={teddy}
                            alt="Cuddle Teddy"
                            className="teddy-img img-fluid rounded shadow-lg"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;
