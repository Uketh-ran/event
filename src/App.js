import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Navbar from './Pages/Navbar';
import Footer from './Pages/Footer';
import WeddingReception from './Pages/WeddingReception';
import ThemeDecoration from "./Pages/WeddingServices/ThemeDecoration";
import ReceptionParty from "./Pages/WeddingServices/ReceptionParty";
import LiveMusic from "./Pages/WeddingServices/LiveMusic";
import PhotoVideo from "./Pages/WeddingServices/PhotoVideo";


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div style={{ marginTop: "80px" }}>

          {/* Route Paths */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wedding-reception" element={<WeddingReception />} />
            <Route path="/theme-decoration" element={<ThemeDecoration />} />
            <Route path="/reception-party" element={<ReceptionParty />} />
            <Route path="/live-music" element={<LiveMusic />} />
            <Route path="/photo-video" element={<PhotoVideo />} />

          </Routes>
          <Footer />
        </div>

      </Router>
    </div>
  );
}

export default App;
