// import React from "react";
// import { Container, Button } from "react-bootstrap";
// import { FaCameraRetro } from "react-icons/fa";
// import "../WeddingReception.css";
// import { useNavigate } from "react-router-dom";
// import themeImg from "../Images/anniversary.jpg.avif";

// const PhotoVideo = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="wedding-page text-white">
//       <Container className="py-5 text-center">
//         <div className="d-flex align-items-center justify-content-center mb-4">
//           <FaCameraRetro className="fs-1 text-light " />
//           <h1 className="text-light">Photography & Videography</h1>
//         </div>
//         <img
//           src={themeImg}
//           alt="Romantic Theme Decoration"
//           className="img-fluid rounded imgs shadow mb-4 imgs"
//         />
//         <p className="fs-5">
//           Capture every special moment with our professional photographers and videographers.
//           We deliver cinematic wedding albums and highlight reels you’ll treasure forever.
//         </p>
//         <Button onClick={() => navigate("/wedding-reception")} variant="warning" className="mt-3">⬅ Back to Wedding Page</Button>
//       </Container>
//     </div>
//   );
// };

// export default PhotoVideo;

// import React from "react";
// import { Container, Button } from "react-bootstrap";
// import { FaMusic } from "react-icons/fa";
// import "../WeddingReception.css";
// import { useNavigate } from "react-router-dom";
// import themeImg from "../Images/anniversary.jpg.avif";

// const PhotoVideo = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="wedding-page text-white">
//       <Container className="py-5 text-center">
//         <div className="d-flex align-items-center justify-content-center mb-4">
//           <FaMusic className="fs-1 text-info " />
//           <h1 className="text-light">Live Music & DJ</h1>
//         </div>
//         <img
//           src={themeImg}
//           alt="Romantic Theme Decoration"
//           className="img-fluid rounded imgs shadow mb-4 imgs"
//         />
//         <p className="fs-5">
//           Music brings magic to your reception!
//           Choose from live bands, DJs, or classical performances to match your vibe.
//         </p>
//         <Button onClick={() => navigate("/wedding-reception")} variant="warning" className="mt-3">⬅ Back to Wedding Page</Button>
//       </Container>
//     </div>
//   );
// };

// export default PhotoVideo;


import React, { useEffect, useState } from "react";
import { Container, Button, Carousel } from "react-bootstrap";
import { FaCameraRetro } from "react-icons/fa";
import "../WeddingReception.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PhotoVideo = () => {
  const navigate = useNavigate();
  const [themeData, setThemeData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5005/api/WedPhotoVideo");
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
          <FaCameraRetro className="fs-1 text-danger" />
          <h1 className="text-light">Photo & Video</h1>
        </div>

        {/* Carousel Display */}
        {themeData?.images && themeData.images.length > 0 && (
          <Carousel className="mb-4">
            {themeData.images.map((img, i) => (
              <Carousel.Item key={i}>
                <img
                  src={`http://localhost:5005/uploads/WedPhotoVideo/${img}`}
                  className="d-block w-100 rounded shadow imgs"
                  alt="Theme Decoration"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        )}

        {/* Description */}
        <p className="fs-5 ">
          {themeData?.description}
        </p>

        <Button onClick={() => navigate("/wedding-reception")} variant="warning" className="mt-3">
          ⬅ Back to Wedding Page
        </Button>
      </Container>
    </div>
  );
};

export default PhotoVideo;
