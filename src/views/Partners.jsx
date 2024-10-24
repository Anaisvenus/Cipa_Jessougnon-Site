import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import rectangle from "../image/rectangle.png";
import partners from "../image/Assets Mockup Cipa's site/partenaires CIPA 1.png";

function Partners() {
  return (
    <div className="Partners h-screen">
      
      <Navbar/>
      <h1 className="ml-10 mb-10 text-4xl font-bold transition-colors duration-300 hover:text-lime-500">Nos Références</h1>
      {/* Partners on the LandingPage */}
      <div className="relative absolute top-10">
        {/* Image de fond */}
        <img 
          className="w-full transform -translate-y-10 z-0" style={{ height: '900px', width: '1600px' }} 
          src={rectangle} 
          alt="Thumbs Up Woman" 
        />
        {/* Texte superposé à l'image */}
        <img className="absolute top-14 left-10 z-10" style={{ height: '700px', width: '1400px' }} src={partners} alt="Logo" />
      </div>

      
      {/* Footer */}
      <div className="relative top-[100px] bg-lime-200 text-black w-full h-96 grid grid-cols-4 gap-10 flex justify-center items-center">
      <img className="h-24 mx-auto" src={logo} alt="Logo" />
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">À propos de nous</h2>
          <p>
            Nous sommes une entreprise de nettoyage professionnelle dédiée à fournir des services
            de haute qualité avec des pratiques respectueuses de l'environnement.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">Navigation</h2>
          <ul>
            <li><Link to="/home">Accueil</Link></li>
            <li><Link to="/aboutus">A Propos</Link></li>
            <li><Link to="/services">Nos Services</Link></li>
            <li><Link to="/partners">Nos Références</Link></li>
            <li><Link to="/contactus">Contactez-nous</Link></li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">Réseaux sociaux</h2>
          <ul>
            <li><Link to="/home">Facebook</Link></li>
            <li><Link to="/aboutus">WhatsApp</Link></li>
            <li><Link to="/services">LinkedIn</Link></li>
            <li><Link to="/partners">Instagram</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Partners;
