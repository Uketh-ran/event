
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaCameraRetro, FaMusic, FaBirthdayCake, FaGift } from "react-icons/fa";
import { IoBalloonOutline } from "react-icons/io5";
import birthdayImg from "./Images/birthday.jpg"; // make sure image exists in src/Pages/Images
import "./BirthdayFunction.css";

const BirthdayFunction = () => {
  const navigate = useNavigate();

  // Service details
  const services = [
    {
      icon: <IoBalloonOutline className="fs-1 text-warning" />,
      title: "Theme Decoration",
      path: "/birthday-theme"
    },
    {
      icon: <FaCameraRetro className="fs-1 text-info" />,
      title: "Photo & Video Coverage",
      path: "/birthday-photo-video"
    },
    {
      icon: <FaMusic className="fs-1 text-danger" />,
      title: "Live Music & Anchors",
      path: "/birthday-live-music"
    },
    {
      icon: <FaBirthdayCake className="fs-1 text-pink" />,
      title: "Cake & Catering",
      path: "/birthday-catering"
    },
    {
      icon: <FaGift className="fs-1 text-success" />,
      title: "Return Gift Setup",
      path: "/birthday-gifts"
    },
  ];

  return (
    <div className="birthday-page text-white">
      <Container className="py-5">
        {/* Header Section */}
        <Row className="align-items-center mb-5">
          <Col md={6} className="text-center text-md-start mb-4 mb-md-0">
            <h1 className="fw-bold display-5 text-gradient mb-3 animate__animated animate__fadeInDown">
              🎂 Birthday Function
            </h1>
            <p className="fs-5 animate__animated animate__fadeInLeft">
              Celebrate your special day with our{" "}
              <strong>
                beautiful themes, decorations, and entertainment
              </strong>{" "}
              that bring joy and color to every moment! From kids to adults, we
              make every birthday unforgettable. 💫
            </p>

            <Button
              variant="light"
              className="mt-3 fw-semibold text-dark"
              onClick={() => navigate("/")}
            >
              ← Back to Home
            </Button>
          </Col>

          {/* Right Side Image */}
          <Col md={6} className="text-center animate__animated animate__fadeInRight">
            <img
              src={birthdayImg}
              alt="Birthday Celebration"
              className="img-fluid rounded shadow-lg birthday-img"
            />
          </Col>
        </Row>

        {/* Services Section */}
        <h2 className="text-center fw-bold mb-4 text-gradient animate__animated animate__fadeInUp">
          Our Birthday Services 🎉
        </h2>

        <Row className="g-4">
          {services.map((services, index) => (
            <Col md={4} sm={6} key={index}>
              <Card className="service-card text-center h-100 animate__animated animate__zoomIn" onClick={() => navigate(services.path)} style={{ cursor: 'pointer' }}>
                <Card.Body>
                  {services.icon}
                  <Card.Title className="fw-bold mt-3">{services.title}</Card.Title>
                  <Card.Text className="text-light small">{services.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BirthdayFunction;
