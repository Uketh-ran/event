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
import SchoolFunction from './Pages/SchoolFunction';
import AnnualDay from './Pages/SchoolFunction/AnnualDay';
import SportsDay from './Pages/SchoolFunction/SportsDay';
import CollegeEvents from './Pages/CollegeFunction';
import Freshersday from './Pages/CollegeFunction/Freshersday';
import Culturalfest from './Pages/CollegeFunction/Culturalfest';
import Technicalsymposium from './Pages/CollegeFunction/Technicalsymposium';
import Farewellfunction from './Pages/CollegeFunction/Farewellfunction';
import CorporateEvent from './Pages/CorporateEvent';
import TeamBulding from './Pages/CorporateFunction/TeamBulding';
import ProductLaunch from './Pages/CorporateFunction/ProductLaunch';
import Corporatemeet from './Pages/CorporateFunction/Corporatemeet';
import Annualdaycelebration from './Pages/CorporateFunction/Annualdaycelebration';



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

            <Route path="/school-function" element={<SchoolFunction/>} />
            <Route path="/annual-day" element={<AnnualDay/>} />
            <Route path="/sports-day" element={<SportsDay/>} />

            <Route path="/college-function" element={<CollegeEvents/>} />
            <Route path="/freshers-day" element={<Freshersday/>} />
            <Route path="/cultural-fest" element={<Culturalfest/>} />
            <Route path="/technical-symposium" element={<Technicalsymposium/>} />
            <Route path="/farewell-function" element={<Farewellfunction/>} />

            <Route path="/corporate-function" element={<CorporateEvent/>} />
            <Route path="/team-building" element={<TeamBulding/>} />
            <Route path="/product-launch" element={<ProductLaunch/>} />
            <Route path="/corporate-meet" element={<Corporatemeet/>} />
            <Route path="/corporate-annual" element={<Annualdaycelebration/>} />

          </Routes>
          <Footer />
        </div>

      </Router>
    </div>
  );
}

export default App;
