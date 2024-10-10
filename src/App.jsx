import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';
import AboutUs from './views/AboutUs';
import Accueil from './views/Accueil';
import Services from './views/Services';
import Partners from './views/Partners';
import ContactUs from './views/ContactUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Accueil />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/partners" element={<Partners />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
