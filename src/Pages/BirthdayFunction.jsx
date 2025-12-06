
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaCameraRetro, FaMusic, FaBirthdayCake} from "react-icons/fa";
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
    }
  ];

  return (
    <div className="birthday-page pt-0 text-white">
      <Container className="py-5 text-center">
        
        <h1 className="fw-bold display-5 text-gradient mb-3 animate__animated animate__fadeInDown ">
          🎂 Birthday Function 🎂
        </h1>
        <p className="text-warning fs-5 fw-semibold animate__animated animate__fadeInUp">
          Make your special day even more magical ✨
        </p>
        <Row className="mt-5">
          <Col md={6} className="text-start mt-4 mt-md-0">

            <p className="fs-5 ">
              Celebrate your special day with our 
              beautiful themes, decorations, and entertainment
              that bring joy and color to every moment! From kids to adults, we
              make every birthday unforgettable. 💫
            </p>
            <Button
              variant="success"
              href="https://wa.me/9344146346"
              className="mt-3"
            >
              💬 Contact Us on WhatsApp
            </Button> <br />
            <Button
              variant="light"
              className="mt-3 fw-semibold text-dark"
              onClick={() => navigate("/")}
            >
              ← Back to Home
            </Button>
          </Col>

          {/* Right Side Image */}
          <Col md={6} className=" animate__animated animate__fadeInRight mt-4 mt-md-0">
            <img
              src={birthdayImg}
              alt="Birthday Celebration"
              className="img-fluid rounded shadow-lg birthday-img"
            />
          </Col>
        </Row>

        {/* Services Section */}
        <h2 className="text-center fw-bold mb-4 mt-4 text-gradient animate__animated animate__fadeInUp">
          Our Birthday Services 🎉
        </h2>

        <Row className="g-4">
          {services.map((services, index) => (
            <Col md={4} sm={6} key={index}>
              <Card className="service-card text-center h-100 animate__animated animate__zoomIn" onClick={() => navigate(services.path)} style={{ cursor: 'pointer' }}>
                <Card.Body>
                  {services.icon}
                  <Card.Title className="fw-bold mt-3">{services.title}</Card.Title>
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
