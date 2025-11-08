
import { Container, Button } from "react-bootstrap";
import { FaBirthdayCake } from "react-icons/fa";
// import "../WeddingReception.css";
import "./BirthdayService.css";
import { useNavigate } from "react-router-dom";
import themeImg from "../Images/anniversary.jpg.avif";

const BdCakeCatering = () => {
    const navigate = useNavigate();
    return (
        <div className="wedding-page text-white">
            <Container className="py-5 text-center">
                <div className="d-flex align-items-center justify-content-center mb-4">
                    <FaBirthdayCake className="fs-1 text-light" />
                    <h1 className="text-light mb-0">Cake & Catering</h1>
                </div>
                <img
                    src={themeImg}
                    alt="Romantic Theme Decoration"
                    className="img-fluid rounded imgs shadow mb-4 imgs"
                />
                <p className="fs-5">
                    oinboienvkwmvwmvmvekvmmvmkvmk
                </p>
                <Button onClick={() => navigate("/birthday-function")} variant="warning" className="mt-3">⬅ Back to Birthday Page</Button>
            </Container>
        </div>
    );
};

export default BdCakeCatering;
