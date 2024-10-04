import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
// import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="AboutUs h-screen">
      <div className="flex justify-center items-center space-x-10">
        {/* Logo positioned within the grid */}
        <div>
          <img className="h-20 mx-auto" src={logo} alt="Logo" />
        </div>

        {/* Grid items with centered text */}
        <Link to="/" className="text-center">Accueil</Link>

        <Link to="/" className="text-center">A propos</Link>

        <Link to="/" className="text-center">Nos Services</Link>

        <Link to="/" className="text-center">Nos Références</Link>

        <Link to="/" className="text-center">Contactez-nous</Link>
      </div>
    </div>
  );
}

export default AboutUs;
