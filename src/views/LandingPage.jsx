import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import devisbutton from "../image/Assets Mockup Cipa's site/Frame 4.png";
import aspirateur from "../image/Assets Mockup Cipa's site/apirateur.png";
import equipment from "../image/Assets Mockup Cipa's site/texte_équipements.png";
import cipa from "../image/Assets Mockup Cipa's site/CIPA JESSOUGNON SA.png";
import thumbsUp from "../image/Assets Mockup Cipa's site/thumbsUpWoman.png";
import rectangle from "../image/Assets Mockup Cipa's site/Rectangle 12.png";
// import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="LandingPage h-screen">

      <Navbar/>
      <div className="flex justify-center items-center space-x-44">
        
        {/* Logo positioned within the grid */}
        <div>
          <div>
            <img className="h-14" src={equipment} alt="equipment" />
          </div>
          <br />

          <div>
            {/* <img className="h-40 mt-5" src={cipa} alt="cipa" /> */}
            <h1 className="text-7xl font-bold">CIPA <br /> JESSOUGNON SA</h1>
          </div>
          <br />
          
          <h3>Cipa JESSOUGNON,est une société spécialisée dans les domaines de l'Entretien et <br />
              Nettoyage , désinfection et dératisation des espaces publics et privés. Elle est dotée <br />
              d'un personnel qualifié, rompu à la tâche, avec des équipements de dernière génération, <br />
              une solide expérience professionnelle de près de 20 ans et par ticipe chaque année aux <br />
              salons d' hygiène en Europe.</h3>

            <div>
              <img className="h-14 mt-16" src={devisbutton} alt="Logo" />
            </div>
            <br />
        </div>

        {/* Grid items with centered text */}
        <div>
          <img className="h-4/6 mx-auto" src={aspirateur} alt="Logo" />
        </div>
      </div>

      {/* <div>
        <img className=" w-full h-3/6" src={thumbsUp} alt="thumbs Up Woman" />
      </div> */}
      <div className="relative mt-20">
        {/* Image de fond */}
        <img 
          className="w-full h-3/6 transform -translate-y-10 z-0 opacity-50" 
          src={thumbsUp} 
          alt="Thumbs Up Woman" 
        />
        <img 
          className="w-full h-3/6 transform -translate-y-10 z-0 opacity-70" 
          src={rectangle} 
          alt="Thumbs Up Woman" 
        />

        {/* Texte superposé à l'image */}
        <div className="absolute top-0 left-0 z-10">
          <img className="h-96" src={logo} alt="Logo" />
        </div>
        <h1 className="absolute top-0 right-0 text-7xl font-bold z-10 p-10 text-white">A propos</h1>
        <h3 className="absolute top-40 right-0 text-2xl font-bold z-10 p-10 text-end text-white">
          CIPA JESSOUGNON SA est une société spécialisée dans les domaines de <br />
          l'Entretien et Nettoyage , désinfection et dératisation des espaces publics et<br />
          privés. Elle est dotée d'un personnel qualifié, rompu à la tâche, avec des<br />
          équipements de dernière génération, une solide expérience professionnelle<br />
          de près de 20 ans et participe chaque année aux salons d'hygiène en Europe.<br />
          L'ensemble de nos prestations respectent les principes de nettoyage dans<br />
          les Etablissement de grandes affluences et de luxe. Elles allient la protection<br />
          à l'usage des techniques douces et procèdent à la réalisation de tests en cas de<br />
          doute, du vertical à l'horizontal, du propre vers le sale à reculons.<br />
        </h3>
      </div>

    </div>
  );
}

export default LandingPage;
