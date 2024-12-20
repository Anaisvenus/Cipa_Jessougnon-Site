import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import consultation from "../image/services&products/consultation.png";
import desinfection from "../image/decontamination.png";
import grasscleaning from "../image/services&products/grass cleaning.png";
import grassinstall from "../image/services&products/grass install.png";
import hospital from "../image/hospital.png";
import nettoyagebat from "../image/nettoyage_palais.jpg";
import nettoyageindustrie from "../image/industry.png";
import produits from "../image/products.png";
import phytosanitaire from "../image/services&products/phytosanitaire.png";
import distgel from "../image/4.png";
import savon from "../image/1.png";
import distsent from "../image/6.png";
import tunnel from "../image/trash.png";
import papier from "../image/products/10.png";
import desodorisant_cipa from "../image/Produits_photos/désinfectant.png";
import des_cipa from "../image/2.png";
import videoSrc from "../image/vitre_nettoyage.mp4";
import dist_savon_cipa from "../image/3.png";
import lingettes_cipa from "../image/Produits_photos/lingettes_1.png";
import essui_cipa from "../image/Produits_photos/essuitout.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./Services.css";

function Services() {
  return (
    <div className="Services h-screen">
      
      <Navbar/>
      {/* <video 
          className="w-20 rounded-lg" 
          controls 
          src={videoSrc} 
          poster="URL_DE_L_IMAGE_DE_PREVIEW" 
        >
          Votre navigateur ne supporte pas la balise vidéo.
        </video> */}
      {/* Services */}
      <h1 className="ml-10 md:ml-40 mb-10 text-2xl md:text-4xl font-bold transition-colors duration-300 hover:text-lime-500">Nos Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mx-5 md:mx-40">

        {/* Service Card Template */}
        {/* You can wrap this template in a loop if you have the data dynamically */}
        
        {/* Bâtiment */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-auto md:h-96 p-4">
          <img className="h-48 md:h-60 w-full object-cover rounded-md mx-auto hover:scale-105 transition-all duration-500" src={nettoyagebat} alt="Nettoyage de façades" />
          <p className="text-start mt-4">
            <span className="italic font-bold">Nettoyage de façades des bâtiments (vitrées, carrelées, allucobonds): </span>
            Service de nettoyage des surfaces extérieures des bâtiments, y compris les fenêtres et les murs en carrelage ou en allucobonds, pour maintenir une apparence professionnelle.
          </p>
        </div>

        {/* Phyto */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-auto md:h-96 p-4">
          <img className="h-48 md:h-60 w-full object-cover rounded-md mx-auto hover:scale-105 transition-all duration-500" src={phytosanitaire} alt="Entretien phytosanitaire" />
          <p className="text-start mt-4">
            <span className="italic font-bold">Entretien phytosanitaire (dératisation, désinsectisation, vidange de fosse): </span>
            Solutions de contrôle des nuisibles, y compris la dératisation et la désinsectisation, ainsi que le nettoyage des fosses septiques pour assurer un environnement sain.
          </p>
        </div>

        {/* Industrie */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-auto md:h-96 p-4">
          <img className="h-48 md:h-60 w-full object-cover rounded-md mx-auto hover:scale-105 transition-all duration-500" src={nettoyageindustrie} alt="Logo" />
          <p className="text-start mt-4">
            <span className="italic font-bold">Entretien et nettoyage industriel: </span>
            Nettoyage approfondi des installations industrielles, des machines et des sols pour garantir un espace de travail propre et sûr.
          </p>
        </div>

        {/* Désinfection */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-auto md:h-96 p-4">
          <img className="h-48 md:h-60 w-full object-cover rounded-md mx-auto hover:scale-105 transition-all duration-500" src={desinfection} alt="Logo" />
          <p className="text-start mt-4">
            <span className="italic font-bold">Décontamination et désinfection de locaux, espaces publics et hospitaliers: </span>
            Service de désinfection et décontamination pour réduire la propagation des germes dans les hôpitaux et les espaces publics, assurant ainsi un environnement sûr.
          </p>
        </div>

        {/* Produits */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-auto md:h-96 p-4">
          <img className="h-48 md:h-60 w-full object-cover rounded-md mx-auto hover:scale-105 transition-all duration-500" src={produits} alt="Logo" />
          <p className="text-start mt-4">
            <span className="italic font-bold">Ventes de matériels et produits de désinfection: </span>
            Fourniture de produits et matériels de désinfection de haute qualité pour aider à maintenir des normes d'hygiène.
          </p>
        </div>

        {/* Installation d'espaces verts */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-auto md:h-96 p-4">
          <img className="h-48 md:h-60 w-full object-cover rounded-md mx-auto hover:scale-105 transition-all duration-500" src={grassinstall} alt="Logo" />
          <p className="text-start mt-4">
            <span className="italic font-bold">Installation et entretien d'espaces verts: </span>
            Création et entretien d'espaces verts, y compris jardins et pelouses, pour un environnement agréable.
          </p>
        </div>

        {/* Désherbage */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-auto md:h-96 p-4">
          <img className="h-48 md:h-60 w-full object-cover rounded-md mx-auto hover:scale-105 transition-all duration-500" src={grasscleaning} alt="Logo" />
          <p className="text-start mt-4">
            <span className="italic font-bold">Désherbage mécanique, chimique et bio: </span>
            Contrôle des mauvaises herbes par des méthodes mécaniques, chimiques ou écologiques pour garder les espaces extérieurs propres.
          </p>
        </div>

        {/* Formation hospitalière */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-auto md:h-96 p-4">
          <img className="h-48 md:h-60 w-full object-cover rounded-md mx-auto hover:scale-105 transition-all duration-500" src={hospital} alt="Logo" />
          <p className="text-start mt-4">
            <span className="italic font-bold">Formation pratique en hygiène domestique, communautaire et hospitalière: </span>
            Formation pratique sur les bonnes pratiques d'hygiène pour les ménages, les communautés et les établissements de santé.
          </p>
        </div>

        {/* Consultation */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-auto md:h-96 p-4">
          <img className="h-48 md:h-60 w-full object-cover rounded-md mx-auto hover:scale-105 transition-all duration-500" src={consultation} alt="Logo" />
          <p className="text-start mt-4">
            <span className="italic font-bold">Consultation et expertise en hygiène: </span>
            Conseils d'experts sur les pratiques d'hygiène, y compris des évaluations et des recommandations pour améliorer la propreté.
          </p>
        </div>

      </div>

      {/* Products */}
      <h1 className="ml-10 md:ml-40 mb-10 text-2xl md:text-4xl font-bold transition-colors duration-300 hover:text-lime-500">Nos Produits</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mx-5 md:mx-40">

        {/* Les désodorisants */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-auto md:h-96 p-4">
          <img className="h-48 md:h-60 w-full object-cover rounded-md mx-auto hover:scale-105 transition-all duration-500" src={des_cipa} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les désodorisants</span>
          </p>
        </div>

        {/* Les distributeurs de désinfectants */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-auto md:h-96 p-4">
          <img className="h-48 md:h-60 w-full object-cover rounded-md mx-auto hover:scale-105 transition-all duration-500" src={distgel} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les distributeurs de désinfectants</span>
          </p>
        </div>

        {/* Les savons antimicrobiens */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-auto md:h-96 p-4">
          <img className="h-48 md:h-60 w-full object-cover rounded-md mx-auto hover:scale-105 transition-all duration-500" src={savon} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les savons antimicrobiens</span>
          </p>
        </div>

        {/* Les distributeurs de savons antimicrobiens */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-auto md:h-96 p-4">
          <img className="h-48 md:h-60 w-full object-cover rounded-md mx-auto hover:scale-105 transition-all duration-500" src={dist_savon_cipa} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les distributeurs de savons antimicrobiens</span>
          </p>
        </div>

        {/* Les distributeurs d'essui-tout */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-auto md:h-96 p-4">
          <img className="h-48 md:h-60 w-full object-cover rounded-md mx-auto hover:scale-105 transition-all duration-500" src={distsent} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les distributeurs d'essuie main</span>
          </p>
        </div>

        {/* Les produits de désinfection et de décontamination */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-auto md:h-96 p-4">
          <img className="h-48 md:h-60 w-full object-cover rounded-md mx-auto hover:scale-105 transition-all duration-500" src={desodorisant_cipa} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les produits de désinfection et de décontamination d'espace (Purif'Air)</span>
          </p>
        </div>

        {/* Les poubelles */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-auto md:h-96 p-4">
          <img className="h-48 md:h-60 w-full object-cover rounded-md mx-auto hover:scale-105 transition-all duration-500" src={tunnel} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les poubelles</span>
          </p>
        </div>

        {/* Les équipements de décontamination */}
        {/* <div className="flex flex-col items-start bg-blue-200 rounded-xl h-auto md:h-96 p-4">
          <img className="h-48 md:h-60 w-full object-cover rounded-md mx-auto hover:scale-105 transition-all duration-500" src={decontamination} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les équipements de décontamination</span>
          </p>
        </div> */}

        {/* Les désinfectants pour matériels médicaux */}
        {/* <div className="flex flex-col items-start bg-blue-200 rounded-xl h-auto md:h-96 p-4">
          <img className="h-48 md:h-60 w-full object-cover rounded-md mx-auto hover:scale-105 transition-all duration-500" src={medidecon} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les désinfectants pour matériels médicaux (invasifs et non invasifs)</span>
          </p>
        </div> */}

        {/* Les papiers hygiéniques */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-auto md:h-96 p-4">
          <img className="h-48 md:h-60 w-full object-cover rounded-md mx-auto hover:scale-105 transition-all duration-500" src={papier} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les papiers hygiéniques</span>
          </p>
        </div>

        {/* Les papiers essuie-mains */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-auto md:h-96 p-4">
          <img className="h-48 md:h-60 w-full object-cover rounded-md mx-auto hover:scale-105 transition-all duration-500" src={essui_cipa} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les papiers essuie-mains</span>
          </p>
        </div>

        {/* Les lingettes désinfectantes */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-auto md:h-96 p-4">
          <img className="h-48 md:h-60 w-full object-cover rounded-md mx-auto hover:scale-105 transition-all duration-500" src={lingettes_cipa} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les lingettes désinfectantes</span>
          </p>
        </div>

      </div>


      {/* Atouts */}
      <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-10 mt-6 md:mt-10 ml-5 md:ml-10 text-black transition-colors duration-300 hover:text-lime-500">
        Nos Atouts
      </h1>
      <div className="mb-10 rounded-2xl md:rounded-none text-black p-5 md:p-10 bg-blue-200 mx-4 md:mx-0 max-w-full md:max-w-[1400px]">
        <ul className="space-y-2 font-bold text-lg md:text-xl">
          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:text-lime-500">
              Nous disposons d'un centre de formation en Hygiène et en Assistance Domestique
            </p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:text-lime-500">
              Nous garantissons une disponibilité continue 24H sur 24H
            </p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:text-lime-500">
              Nous avons des techniciens professionnels, habilités et formés
            </p>
          </li>

          {/* Additional list items follow the same structure... */}

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:text-lime-500">
              Nous sommes joignables via les réseaux sociaux Whatsapp, Facebook, Twitter et Instagram
            </p>
          </li>
        </ul>
      </div>



      {/* Footer */}
      <Footer/>


    </div>
  );
}

export default Services;
