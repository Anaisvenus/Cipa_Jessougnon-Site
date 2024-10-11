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
                        {/* <img className="h-14 mt-16" src={devisbutton} alt="Logo" /> */}
                        <button
                            className="mt-10 cursor-pointer text-white font-bold relative text-[14px] w-[12em] 
                            h-[3em] text-center bg-lime-500 bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy
                            hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px]
                            before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r
                            before:from-lime-500 before:from-10% before:via-lime-300 before:via-30% before:to-lime-700
                            before:bg-[length:400%] before:-z-10 before:hover:blur-xl
                            before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%]
                            active:bg-lime-700 focus:ring-lime-700 hover:brightness-110 hover:-translate-y-[1px]
                            hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px]">
                            Demander un devis
                        </button>

                        
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
