
import React, { useEffect, useState } from "react";
import { Container, Button, Carousel } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";
import "../WeddingReception.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ThemeDecoration = () => {
  const navigate = useNavigate();
  const [themeData, setThemeData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5005/api/theme");
      setThemeData(res.data);
    } catch (err) {
      console.log("Error fetching theme data", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="wedding-page text-white">
      <Container className="py-5 text-center">
        <div className="d-flex align-items-center justify-content-center mb-4">
          <FaHeart className="fs-1 text-danger" />
          <h1 className="text-light">Theme Decoration</h1>
        </div>

        {/* Carousel Display */}
        {themeData?.images && themeData.images.length > 0 && (
          <Carousel className="mb-4">
            {themeData.images.map((img, i) => (
              <Carousel.Item key={i}>
                <img
                  src={`http://localhost:5005/uploads/theme/${img}`}
                  className="d-block w-100 rounded shadow imgs"
                  alt="Theme Decoration"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        )}

        {/* Description */}
        <p className="fs-5">
          {themeData?.description}
        </p>

        <Button onClick={() => navigate("/wedding-reception")} variant="warning" className="mt-3">
          ⬅ Back to Wedding Page
        </Button>
      </Container>
    </div>
  );
};

export default ThemeDecoration;
