import Navbar from "../components/Navbar";
import devisbutton from "../image/Assets Mockup Cipa's site/Frame 4.png";
import aspirateur from "../image/Assets Mockup Cipa's site/apirateur.png";
import equipment from "../image/Assets Mockup Cipa's site/texte_équipements.png";
import { Link} from "react-router-dom";
import logo from "../image/logo.png";

function Accueil() {
  return (
    <>
        <div className="z-0 relative mb-12"
            x-data="{open:false,menu:false, lokasi:false}"
        >
            <div className="Accueil h-screen">
                
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

            </div>
        </div>
    </>
  );
}

export default Accueil;
