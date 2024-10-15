import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import consultation from "../image/services&products/consultation.png";
import desinfection from "../image/services&products/desinfection.png";
import grasscleaning from "../image/services&products/grass cleaning.png";
import grassinstall from "../image/services&products/grass install.png";
import hospital from "../image/services&products/hospital cleaning.png";
import nettoyagebat from "../image/services&products/nettoyage bât.png";
import nettoyageindustrie from "../image/services&products/nettoyage industrie.png";
import produits from "../image/services&products/produits.png";
import phytosanitaire from "../image/services&products/phytosanitaire.png";
import sanitizer from "../image/products/1.png";
import distgel from "../image/products/2.png";
import savon from "../image/products/3.png";
import distsavon from "../image/products/4.png";
import distsent from "../image/products/5.png";
import desinfections from "../image/products/6.png";
import tunnel from "../image/products/7.png";
import decontamination from "../image/products/8.png";
import medidecon from "../image/products/9.png";
import papier from "../image/products/10.png";
import sopalin from "../image/products/11.png";
import lingettes from "../image/products/12.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./Services.css";

function Services() {
  return (
    <div className="Services h-screen">
      
      <Navbar/>
      {/* Services */}
      <h1 className="ml-40 mb-10 text-4xl font-bold transition-colors duration-300 hover:text-lime-500">Nos Services</h1>
      <div className="grid grid-cols-2 gap-10 mx-40">

        {/* Bâtiment */}
        <div className="flex flex-col items-start bg-lime-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto" src={nettoyagebat} alt="Logo" />
          <p className="text-start mt-4">
            <span className="font-bold">Nettoyage de façades des bâtiments (vitrées, carrelées, allucobonds): </span>
            Service de nettoyage des surfaces extérieures des bâtiments, y compris les fenêtres et les murs en carrelage ou en allucobonds, pour maintenir une apparence professionnelle.
          </p>
        </div>

        {/* Phyto */}
        <div className="flex flex-col items-start bg-lime-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto" src={phytosanitaire} alt="Logo" />
          <p className="text-start mt-4">
            <span className="font-bold">Entretien phytosanitaire (dératisation, désinsectisation, vidange de fosse): </span>
            Solutions de contrôle des nuisibles, y compris la dératisation et la désinsectisation, ainsi que le nettoyage des fosses septiques pour assurer un environnement sain.
          </p>
        </div>

        {/* Industrie */}
        <div className="flex flex-col items-start bg-lime-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto" src={nettoyageindustrie} alt="Logo" />
          <p className="text-start mt-4">
            <span className="font-bold">Entretien et nettoyage industriel: </span>
            Nettoyage approfondi des installations industrielles, des machines et des sols pour garantir un espace de travail propre et sûr.
          </p>
        </div>

        {/* Désinfection */}
        <div className="flex flex-col items-start bg-lime-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto" src={desinfection} alt="Logo" />
          <p className="text-start mt-4">
            <span className="font-bold">Décontamination et désinfection de locaux, espaces publics et hospitaliers: </span>
            Service de désinfection et décontamination pour réduire la propagation des germes dans les hôpitaux et les espaces publics, assurant ainsi un environnement sûr.
          </p>
        </div>

        {/* Produits */}
        <div className="flex flex-col items-start bg-lime-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto" src={produits} alt="Logo" />
          <p className="text-start mt-4">
            <span className="font-bold">Ventes de matériels et produits de désinfection: </span>
            Fourniture de produits et matériels de désinfection de haute qualité pour aider à maintenir des normes d'hygiène.
          </p>
        </div>

        {/* Installation d'espaces verts */}
        <div className="flex flex-col items-start bg-lime-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto" src={grassinstall} alt="Logo" />
          <p className="text-start mt-4">
            <span className="font-bold">Installation et entretien d'espaces verts: </span>
            Création et entretien d'espaces verts, y compris jardins et pelouses, pour un environnement agréable.
          </p>
        </div>

        {/* Désherbage */}
        <div className="flex flex-col items-start bg-lime-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto" src={grasscleaning} alt="Logo" />
          <p className="text-start mt-4">
            <span className="font-bold">Désherbage mécanique, chimique et bio: </span>
            Contrôle des mauvaises herbes par des méthodes mécaniques, chimiques ou écologiques pour garder les espaces extérieurs propres.
          </p>
        </div>

        {/* Formation hospitalière */}
        <div className="flex flex-col items-start bg-lime-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto" src={hospital} alt="Logo" />
          <p className="text-start mt-4">
            <span className="font-bold">Formation pratique en hygiène domestique, communautaire et hospitalière: </span>
            Formation pratique sur les bonnes pratiques d'hygiène pour les ménages, les communautés et les établissements de santé.
          </p>
        </div>

        {/* Consultation */}
        <div className="flex flex-col items-start bg-lime-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto" src={consultation} alt="Logo" />
          <p className="text-start mt-4">
            <span className="font-bold">Consultation et expertise en hygiène: </span>
            Conseils d'experts sur les pratiques d'hygiène, y compris des évaluations et des recommandations pour améliorer la propreté.
          </p>
        </div>

      </div>

      {/* Products */}
      <h1 className="ml-40 mb-10 mt-10 text-4xl font-bold transition-colors duration-300 hover:text-lime-500">Nos Produits</h1>
      <div className="grid grid-cols-2 gap-10 mx-40">

        {/* Les désinfectants de mains */}
        <div className="flex flex-col items-center bg-lime-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto" src={sanitizer} alt="Logo" />
          <p className="text-center mt-4">
            <span className="font-bold">Les désinfectants de mains</span>
          </p>
        </div>

        {/* Les distributeurs de désinfectants */}
        <div className="flex flex-col items-center bg-lime-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto" src={distgel} alt="Logo" />
          <p className="text-center mt-4">
            <span className="font-bold">Les distributeurs de désinfectants</span>
          </p>
        </div>

        {/* Les savons antimicrobiens */}
        <div className="flex flex-col items-center bg-lime-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto" src={savon} alt="Logo" />
          <p className="text-center mt-4">
            <span className="font-bold">Les savons antimicrobiens</span>
          </p>
        </div>

        {/* Les distributeurs de savons antimicrobiens */}
        <div className="flex flex-col items-center bg-lime-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto" src={distsavon} alt="Logo" />
          <p className="text-center mt-4">
            <span className="font-bold">Les distributeurs de savons antimicrobiens</span>
          </p>
        </div>

        {/* Les distributeurs automatiques de senteurs */}
        <div className="flex flex-col items-center bg-lime-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto" src={distsent} alt="Logo" />
          <p className="text-center mt-4">
            <span className="font-bold">Les distributeurs automatiques de senteurs</span>
          </p>
        </div>

        {/* Les produits de désinfection et de décontamination */}
        <div className="flex flex-col items-center bg-lime-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto" src={desinfections} alt="Logo" />
          <p className="text-center mt-4">
            <span className="font-bold">Les produits de désinfection et de décontamination d’espace (Purif’Air)</span>
          </p>
        </div>

        {/* Les tunnels de désinfection */}
        <div className="flex flex-col items-center bg-lime-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto" src={tunnel} alt="Logo" />
          <p className="text-center mt-4">
            <span className="font-bold">Les tunnels de désinfection</span>
          </p>
        </div>

        {/* Les équipements de décontamination */}
        <div className="flex flex-col items-center bg-lime-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto" src={decontamination} alt="Logo" />
          <p className="text-center mt-4">
            <span className="font-bold">Les équipements de décontamination</span>
          </p>
        </div>

        {/* Les désinfectants pour matériels médicaux */}
        <div className="flex flex-col items-center bg-lime-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto" src={medidecon} alt="Logo" />
          <p className="text-center mt-4">
            <span className="font-bold">Les désinfectants pour matériels médicaux (invasifs et non invasifs)</span>
          </p>
        </div>

        {/* Les papiers hygiéniques */}
        <div className="flex flex-col items-center bg-lime-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto" src={papier} alt="Logo" />
          <p className="text-center mt-4">
            <span className="font-bold">Les papiers hygiéniques</span>
          </p>
        </div>

        {/* Les papiers essuie-mains */}
        <div className="flex flex-col items-center bg-lime-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto" src={sopalin} alt="Logo" />
          <p className="text-center mt-4">
            <span className="font-bold">Les papiers essuie-mains</span>
          </p>
        </div>

        {/* Les lingettes désinfectantes */}
        <div className="flex flex-col items-center bg-lime-200 rounded-xl h-96 p-4">
          <img className="h-60 mx-auto" src={lingettes} alt="Logo" />
          <p className="text-center mt-4">
            <span className="font-bold">Les lingettes désinfectantes</span>
          </p>
        </div>

      </div>


      {/* Atouts */}
      <h1 className="text-4xl font-bold mb-10 mt-10 ml-10 text-black font-bold text-4xl transition-colors duration-300 hover:text-lime-500">Nos Atouts</h1>
      <div className="absolute left-10 w-full rounded-2xl text-black p-10 bg-lime-200" style={{ width: '1400px' }}>
        <ul className="space-y-2 font-bold text-xl">
          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:underline">Nous disposons d'un centre de formation en Hygiène et en Assistance Domestique</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:underline">Nous garantissons une disponibilité continue 24H sur 24H</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:underline">Nous avons des techniciens professionnels, habilités et formés</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:underline">Nous formons nos équipes à l'utilisation de nos produits et matériels d'hygiène</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:underline">Nous mettons un accent particulier sur l'hygiène corporelle et vestimentaire de l'ensemble de notre personnel.</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:underline">Nous veillons à ce que l'ensemble de notre personnel se conforme aux mesures sanitaires en vigueur en république du Bénin</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:underline">Nous mettons en place des moyens techniques précis et conforme aux besoins du client</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:underline">Nous conseillons et accompagnons plusieurs structures dans l'élaboration et la mise en œuvre de leur politique d'hygiène</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:underline">Nous élaborons pour chacune de nos interventions les protocoles d'hygiène adéquats</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:underline">Nous évaluons de façon rigoureuse et méticuleuse les besoins qualitatifs et quantitatifs de nos services</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:underline">Nous suivons, vérifions et ajustons nos plans d'hygiène</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:underline">Nous disposons d'une documentation scientifique et technique pour toutes nos interventions</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:underline">Nous réalisons des audits et des contrôles réguliers sur les divers sites où nous intervenons</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:underline">Nous disposons d'une ligne d'appel Service Clientèle et Contentieux ouverte en permanence</p>
          </li>

          <li className="flex items-start space-x-4">
            <FontAwesomeIcon icon={faStar} />
            <p className="hover:underline">Nous sommes joignables via les réseaux sociaux Whatsapp, Facebook, Twitter et Instagram</p>
          </li>
        </ul>
      </div>

      
      {/* Footer */}
      <div className="relative top-[700px] bg-zinc-500 w-full h-96 grid grid-cols-4 gap-10 flex justify-center items-center">
      <img className="h-32 mx-auto" src={logo} alt="Logo" />
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

export default Services;
