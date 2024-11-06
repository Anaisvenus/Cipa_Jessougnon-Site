import Navbar from "../components/Navbar";
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
      <h1 className="ml-40 mb-10 text-4xl font-bold transition-colors duration-300 hover:text-lime-500">Nos Services</h1>
      <div className="grid grid-cols-2 gap-10 mx-40">

        {/* Bâtiment */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto hover:scale-105 transition-all duration-500" src={nettoyagebat} alt="Logo" />
          <p className="text-start mt-4">
            <span className="italic font-bold">Nettoyage de façades des bâtiments (vitrées, carrelées, allucobonds): </span>
            Service de nettoyage des surfaces extérieures des bâtiments, y compris les fenêtres et les murs en carrelage ou en allucobonds, pour maintenir une apparence professionnelle.
          </p>
        </div>

        {/* Phyto */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto hover:scale-105 transition-all duration-500" src={phytosanitaire} alt="Logo" />
          <p className="text-start mt-4">
            <span className="italic font-bold">Entretien phytosanitaire (dératisation, désinsectisation, vidange de fosse): </span>
            Solutions de contrôle des nuisibles, y compris la dératisation et la désinsectisation, ainsi que le nettoyage des fosses septiques pour assurer un environnement sain.
          </p>
        </div>

        {/* Industrie */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto hover:scale-105 transition-all duration-500" src={nettoyageindustrie} alt="Logo" />
          <p className="text-start mt-4">
            <span className="italic font-bold">Entretien et nettoyage industriel: </span>
            Nettoyage approfondi des installations industrielles, des machines et des sols pour garantir un espace de travail propre et sûr.
          </p>
        </div>

        {/* Désinfection */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto hover:scale-105 transition-all duration-500" src={desinfection} alt="Logo" />
          <p className="text-start mt-4">
            <span className="italic font-bold">Décontamination et désinfection de locaux, espaces publics et hospitaliers: </span>
            Service de désinfection et décontamination pour réduire la propagation des germes dans les hôpitaux et les espaces publics, assurant ainsi un environnement sûr.
          </p>
        </div>

        {/* Produits */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto hover:scale-105 transition-all duration-500" src={produits} alt="Logo" />
          <p className="text-start mt-4">
            <span className="italic font-bold">Ventes de matériels et produits de désinfection: </span>
            Fourniture de produits et matériels de désinfection de haute qualité pour aider à maintenir des normes d'hygiène.
          </p>
        </div>

        {/* Installation d'espaces verts */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto hover:scale-105 transition-all duration-500" src={grassinstall} alt="Logo" />
          <p className="text-start mt-4">
            <span className="italic font-bold">Installation et entretien d'espaces verts: </span>
            Création et entretien d'espaces verts, y compris jardins et pelouses, pour un environnement agréable.
          </p>
        </div>

        {/* Désherbage */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto hover:scale-105 transition-all duration-500" src={grasscleaning} alt="Logo" />
          <p className="text-start mt-4">
            <span className="italic font-bold">Désherbage mécanique, chimique et bio: </span>
            Contrôle des mauvaises herbes par des méthodes mécaniques, chimiques ou écologiques pour garder les espaces extérieurs propres.
          </p>
        </div>

        {/* Formation hospitalière */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto hover:scale-105 transition-all duration-500" src={hospital} alt="Logo" />
          <p className="text-start mt-4">
            <span className="italic font-bold">Formation pratique en hygiène domestique, communautaire et hospitalière: </span>
            Formation pratique sur les bonnes pratiques d'hygiène pour les ménages, les communautés et les établissements de santé.
          </p>
        </div>

        {/* Consultation */}
        <div className="flex flex-col items-start bg-blue-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto hover:scale-105 transition-all duration-500" src={consultation} alt="Logo" />
          <p className="text-start mt-4">
            <span className="italic font-bold">Consultation et expertise en hygiène: </span>
            Conseils d'experts sur les pratiques d'hygiène, y compris des évaluations et des recommandations pour améliorer la propreté.
          </p>
        </div>

      </div>

      {/* Products */}
      <h1 className="ml-40 mb-10 mt-10 text-4xl font-bold transition-colors duration-300 hover:text-lime-500">Nos Produits</h1>
      <div className="grid grid-cols-2 gap-10 mx-40">

        {/* Les désodorisants */}
        <div className="flex flex-col items-center bg-blue-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto hover:scale-105 transition-all duration-500" src={des_cipa} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les désodorisants</span>
          </p>
        </div>

        {/* Les distributeurs de désinfectants */}
        <div className="flex flex-col items-center bg-blue-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto hover:scale-105 transition-all duration-500" src={distgel} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les distributeurs de désinfectants</span>
          </p>
        </div>

        {/* Les savons antimicrobiens */}
        <div className="flex flex-col items-center bg-blue-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto hover:scale-105 transition-all duration-500" src={savon} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les savons antimicrobiens</span>
          </p>
        </div>

        {/* Les distributeurs de savons antimicrobiens */}
        <div className="flex flex-col items-center bg-blue-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto hover:scale-105 transition-all duration-500" src={dist_savon_cipa} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les distributeurs de savons antimicrobiens</span>
          </p>
        </div>

        {/* Les distributeurs d'essui-tout */}
        <div className="flex flex-col items-center bg-blue-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto hover:scale-105 transition-all duration-500" src={distsent} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les distributeurs d'essuie main</span>
          </p>
        </div>

        {/* Les produits de désinfection et de décontamination */}
        <div className="flex flex-col items-center bg-blue-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto hover:scale-105 transition-all duration-500" src={desodorisant_cipa} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les produits de désinfection et de décontamination d'espace (Purif'Air)</span>
          </p>
        </div>

        {/* Les poubelles */}
        <div className="flex flex-col items-center bg-blue-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto hover:scale-105 transition-all duration-500" src={tunnel} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les poubelles</span>
          </p>
        </div>

        {/* Les équipements de décontamination */}
        {/* <div className="flex flex-col items-center bg-blue-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto hover:scale-105 transition-all duration-500" src={decontamination} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les équipements de décontamination</span>
          </p>
        </div> */}

        {/* Les désinfectants pour matériels médicaux */}
        {/* <div className="flex flex-col items-center bg-blue-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto hover:scale-105 transition-all duration-500" src={medidecon} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les désinfectants pour matériels médicaux (invasifs et non invasifs)</span>
          </p>
        </div> */}

        {/* Les papiers hygiéniques */}
        <div className="flex flex-col items-center bg-blue-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto hover:scale-105 transition-all duration-500" src={papier} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les papiers hygiéniques</span>
          </p>
        </div>

        {/* Les papiers essuie-mains */}
        <div className="flex flex-col items-center bg-blue-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto hover:scale-105 transition-all duration-500" src={essui_cipa} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les papiers essuie-mains</span>
          </p>
        </div>

        {/* Les lingettes désinfectantes */}
        <div className="flex flex-col items-center bg-blue-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto hover:scale-105 transition-all duration-500" src={lingettes_cipa} alt="Logo" />
          <p className="text-center mt-4">
            <span className="italic font-bold">Les lingettes désinfectantes</span>
          </p>
        </div>

      </div>


      {/* Atouts */}
      <h1 className="text-4xl font-bold mb-10 mt-10 ml-10 text-black font-bold text-4xl transition-colors duration-300 hover:text-lime-500">Nos Atouts</h1>
      <div className="absolute left-10 w-full rounded-2xl text-black p-10 bg-blue-200" style={{ width: '1400px' }}>
        <ul className="space-y-2 font-bold text-xl">
          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:text-lime-500">Nous disposons d'un centre de formation en Hygiène et en Assistance Domestique</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:text-lime-500">Nous garantissons une disponibilité continue 24H sur 24H</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:text-lime-500">Nous avons des techniciens professionnels, habilités et formés</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:text-lime-500">Nous formons nos équipes à l'utilisation de nos produits et matériels d'hygiène</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:text-lime-500">Nous mettons un accent particulier sur l'hygiène corporelle et vestimentaire de l'ensemble de notre personnel.</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:text-lime-500">Nous veillons à ce que l'ensemble de notre personnel se conforme aux mesures sanitaires en vigueur en république du Bénin</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:text-lime-500">Nous mettons en place des moyens techniques précis et conforme aux besoins du client</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:text-lime-500">Nous conseillons et accompagnons plusieurs structures dans l'élaboration et la mise en œuvre de leur politique d'hygiène</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:text-lime-500">Nous élaborons pour chacune de nos interventions les protocoles d'hygiène adéquats</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:text-lime-500">Nous évaluons de façon rigoureuse et méticuleuse les besoins qualitatifs et quantitatifs de nos services</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:text-lime-500">Nous suivons, vérifions et ajustons nos plans d'hygiène</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:text-lime-500">Nous disposons d'une documentation scientifique et technique pour toutes nos interventions</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:text-lime-500">Nous réalisons des audits et des contrôles réguliers sur les divers sites où nous intervenons</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:text-lime-500">Nous disposons d'une ligne d'appel Service Clientèle et Contentieux ouverte en permanence</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:text-lime-500">Nous sommes joignables via les réseaux sociaux Whatsapp, Facebook, Twitter et Instagram</p>
          </li>
        </ul>
      </div>

      
      {/* Footer */}
      <div className="relative top-[700px] text-black bg-lime-200 w-full h-96 grid grid-cols-4 gap-10 flex justify-center items-center">
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
            <li><Link to="/home" className="hover:text-blue-500">Accueil</Link></li>
            <li><Link to="/aboutus" className="hover:text-blue-500">A Propos</Link></li>
            <li><Link to="/services" className="hover:text-blue-500">Nos Services</Link></li>
            <li><Link to="/partners" className="hover:text-blue-500">Nos Références</Link></li>
            <li><Link to="/contactus" className="hover:text-blue-500">Contactez-nous</Link></li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">Réseaux sociaux</h2>
          <ul>
            <li><a href="https://www.facebook.com/CJessougnon?mibextid=LQQJ4d" className="hover:text-blue-500">Facebook</a></li>
            <li><a href="tel:+229 62 31 5172" className="hover:text-blue-500">WhatsApp</a></li>
            <li><a href="https://www.linkedin.com/company/cipa-jessougnon-sa/" className="hover:text-blue-500">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/cjessougnon?igsh=MTVvdDkyYXdyYXl2NQ==" className="hover:text-blue-500">Instagram</a></li>
          </ul>
        </div>
      </div>


    </div>
  );
}

export default Services;
