import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import rectangle from "../image/rectangle.png";
import partners from "../image/Assets Mockup Cipa's site/partenaires CIPA 1.png";
// import "./Partners.css";

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
      <div className="relative top-[100px] bg-zinc-500 w-full h-96 grid grid-cols-3 gap-10 flex justify-center items-center">
        <div className="text-white flex justify-center items-center">
          <h1>Nous sommes une entreprise de nettoyage <br />
            professionnelle dédiée à fournir des services <br />
            de nettoyage de haute qualité. Avec une  <br />
            équipe qualifiée, des pratiques  <br />
            respectueuses de l'environnement et un <br />
            engagement envers la satisfaction de nos <br />
            clients, nous assurons des espaces  <br />
            impeccables et hygiéniques. Votre partenaire <br />
            de confiance pour un environnement plus  <br />
            propre et plus sain.</h1>
        </div>

        <div className="relative absolute bottom-10">
          <h1 className="text-white font-bold flex justify-center items-start">Navigation</h1>
          <Link to="/home"><h1 className="text-white flex justify-center items-start">Accueil</h1></Link>
          <Link to="/aboutus"><h1 className="text-white flex justify-center items-start">A Propos</h1></Link>
          <Link to="/services"><h1 className="text-white flex justify-center items-start">Nos Services</h1></Link>
          <Link to="/partners"><h1 className="text-white flex justify-center items-start">Nos Références</h1></Link>
          <Link to="/contactus"><h1 className="text-white flex justify-center items-start">Contactez-nous</h1></Link>
        </div>

        <div className="relative absolute bottom-12">
          <h1 className="text-white font-bold flex justify-center items-start">Réseaux sociaux</h1>
          <div className="flex justify-start items-center grid grid-cols-1">
            <Link to="/home"><h1 className="text-white flex justify-center items-start">Facebook</h1></Link>
            <Link to="/aboutus"><h1 className="text-white flex justify-center items-start">Whatsapp</h1></Link>
            <Link to="/services"><h1 className="text-white flex justify-center items-start">LinkedIn</h1></Link>
            <Link to="/partners"><h1 className="text-white flex justify-center items-start">Instagram</h1></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
