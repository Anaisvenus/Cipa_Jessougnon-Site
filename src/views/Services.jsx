import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./Services.css";

function Services() {
  return (
    <div className="Services h-screen">
      
      <Navbar/>
      {/* Services&Porducts */}
      <div className="grid grid-cols-3 gap-10 relative absolute left-14">
        {/* Services */}
        <div className="flex flex-col items-start space-y-2">
          <img className="h-32 mx-auto" src={logo} alt="Logo" />
          <p className="text-censtartter">
            Nettoyage de façades des bâtiments (vitrées, carrelées, allucobonds) <br />
            Service de nettoyage des surfaces extérieures des bâtiments, y compris les fenêtres et les murs en carrelage ou en allucobonds, pour maintenir une apparence professionnelle.
          </p>
        </div>
        {/* Services */}
        <div className="flex flex-col items-start space-y-2">
          <img className="h-32 mx-auto" src={logo} alt="Logo" />
          <p className="text-censtartter">
          Entretien phytosanitaire (dératisation, désinsectisation, vidange de fosse)
          Solutions de contrôle des nuisibles, y compris la dératisation et la désinsectisation, ainsi que le nettoyage des fosses septiques pour assurer un environnement sain.
          </p>
        </div>
        {/* Services */}
        <div className="flex flex-col items-start space-y-2">
          <img className="h-32 mx-auto" src={logo} alt="Logo" />
          <p className="text-censtartter">
          Entretien et nettoyage industriel
          Nettoyage approfondi des installations industrielles, des machines et des sols pour garantir un espace de travail propre et sûr.
          </p>
        </div>
        {/* Services */}
        <div className="flex flex-col items-start space-y-2">
          <img className="h-32 mx-auto" src={logo} alt="Logo" />
          <p className="text-censtartter">
          Décontamination et désinfection de locaux, espaces publics et hospitaliers
          Service de désinfection et décontamination pour réduire la propagation des germes dans les hôpitaux et les espaces publics, assurant ainsi un environnement sûr.
          </p>
        </div>
        {/* Services */}
        <div className="flex flex-col items-start space-y-2">
          <img className="h-32 mx-auto" src={logo} alt="Logo" />
          <p className="text-censtartter">
          Ventes de matériels et produits de désinfection
          Fourniture de produits et matériels de désinfection de haute qualité pour aider à maintenir des normes d'hygiène.
          </p>
        </div>
        {/* Services */}
        <div className="flex flex-col items-start space-y-2">
          <img className="h-32 mx-auto" src={logo} alt="Logo" />
          <p className="text-censtartter">
          Installation et entretien d’espaces verts
          Création et entretien d'espaces verts, y compris jardins et pelouses, pour un environnement agréable.
          </p>
        </div>
        {/* Services */}
        <div className="flex flex-col items-start space-y-2">
          <img className="h-32 mx-auto" src={logo} alt="Logo" />
          <p className="text-censtartter">
          Désherbage mécanique, chimique et bio
          Contrôle des mauvaises herbes par des méthodes mécaniques, chimiques ou écologiques pour garder les espaces extérieurs propres.
          </p>
        </div>
        {/* Services */}
        <div className="flex flex-col items-start space-y-2">
          <img className="h-32 mx-auto" src={logo} alt="Logo" />
          <p className="text-censtartter">
          Formation pratique en hygiène domestique, communautaire et hospitalière
          Formation pratique sur les bonnes pratiques d'hygiène pour les ménages, les communautés et les établissements de santé.
          </p>
        </div>
        {/* Services */}
        <div className="flex flex-col items-start space-y-2">
          <img className="h-32 mx-auto" src={logo} alt="Logo" />
          <p className="text-censtartter">
          Consultation et expertise en hygiène
          Conseils d'experts sur les pratiques d'hygiène, y compris des évaluations et des recommandations pour améliorer la propreté.
          </p>
        </div>


        {/* Products */}
        {/* <div className="produits">
          <div className="produits-inner">
            <div className="produits-front">
              <p>Nos Produits</p>
            </div>
            <div className="produits-back">
              <ul className="space-y-2">
                <li>
                    <p className="hover:underline">Les désinfectants de mains</p>
                </li>
                <li>
                    <p className="hover:underline">Les distributeurs de désinfectants</p>
                </li>
                <li>
                    <p className="hover:underline">Les savons antimicrobiens</p>
                </li>
                <li>
                    <p className="hover:underline">Les distributeurs de savons antimicrobiens</p>
                </li>
                <li>
                    <p className="hover:underline">Les distributeurs automatiques de senteurs</p>
                </li>
                <li>
                    <p className="hover:underline">Les produits de désinfection et de décontamination d'espace (Purif'Air)</p>
                </li>
                <li>
                    <p className="hover:underline">Les tunnels de désinfection</p>
                </li>
                <li>
                    <p className="hover:underline">Les équipements de décontamination</p>
                </li>
                <li>
                    <p className="hover:underline">Les desinfectants pour materiels médicaux (invasifs et non invasifs)</p>
                </li>
                <li>
                    <p className="hover:underline">Les Papiers hygieniques</p>
                </li>
                <li>
                    <p className="hover:underline">Les papiers essuies mains</p>
                </li>
                <li>
                    <p className="hover:underline">Les lingettes desinfectantes</p>
                </li>
                <li>
                    <p className="hover:underline">Les réactifs de laboratoires</p>
                </li>
                <li>
                    <p className="hover:underline">Les matériels et équipements médicaux</p>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

      </div>


      {/* Atouts */}
      {/* <h1 className="text-4xl font-bold mb-10 text-black font-bold text-4xl">Nos Atouts</h1>
      <div className="absolute left-10 w-full rounded-2xl text-white p-10" style={{ width: '1400px', backgroundColor: '#b6d023' }}>
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
      </div> */}

    </div>
  );
}

export default Services;
