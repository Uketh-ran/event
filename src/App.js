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
import BirthdayFunction from './Pages/BirthdayFunction';
import AnniversaryFunction from './Pages/AnniversaryFunction';
import RomanticThemeDecoration from './Pages/AnniversaryFunction/Romantic Theme Decoration';
import CoupleEntrySetup from './Pages/AnniversaryFunction/Couple Entry Setup';
import PhotoVideoCoverage from './Pages/AnniversaryFunction/Photo Video Coverage';
import LiveMusicAnchors from './Pages/AnniversaryFunction/Live Music Anchors';
import Cateringcakesetup from './Pages/AnniversaryFunction/Cateringcakesetup';
import BdThemeDecoration from './Pages/BirthdayServices/BdThemeDecoration';
import BdPhotoVideo from './Pages/BirthdayServices/BdPhotoVideo';
import BdLiveMusic from './Pages/BirthdayServices/BdLiveMusic';
import BdCakeCatering from './Pages/BirthdayServices/BdCakeCatering';
import BdReturnGifts from './Pages/BirthdayServices/BdReturnGifts';



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

            <Route path="/birthday-function" element={<BirthdayFunction />} />
            <Route path="/birthday-theme" element={<BdThemeDecoration />} />
            <Route path="/birthday-photo-video" element={<BdPhotoVideo />} />
            <Route path="/birthday-live-music" element={<BdLiveMusic />} />
            <Route path="/birthday-catering" element={<BdCakeCatering />} />
            <Route path="/birthday-gifts" element={<BdReturnGifts />} />

            <Route path="/anniversary-function" element={<AnniversaryFunction />} />
            <Route path="/anniversary-theme" element={<RomanticThemeDecoration />} />
            <Route path="/anniversary-entry" element={<CoupleEntrySetup />} />
            <Route path="/anniversary-photo-video" element={<PhotoVideoCoverage />} />
            <Route path="/anniversary-live-music" element={<LiveMusicAnchors />} />
            <Route path="/anniversary-catering" element={<Cateringcakesetup />} />

          </Routes>
          <Footer />
        </div>

      </Router>
    </div>
  );
}

export default App;
