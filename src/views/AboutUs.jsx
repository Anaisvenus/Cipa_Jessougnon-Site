import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faLeaf,
  faHandshake,
  faUserTie,
  faMagnifyingGlass,
  faSliders,
  faLightbulb,
  faHandHoldingHeart,
  faHelmetSafety,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../image/logo.png";
import bat from "../image/DG Cipa.png";

function AboutUs() {
  return (
    <div className="AboutUs min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center">
        {/* AboutUs */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-10 p-6 mt-20">
          <div className="md:w-1/2 flex justify-center">
            <img className="h-64 md:h-96 w-auto" src={logo} alt="Logo" />
          </div>

          {/* About Section */}
          <div className="md:w-1/2 space-y-6 p-4">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Qui sommes-nous?</h1>
            <p className="text-base md:text-lg lg:text-2xl leading-relaxed">
              CIPA JESSOUGNON SA est une société spécialisée dans les domaines de l'entretien et nettoyage,
              désinfection et dératisation des espaces publics et privés. Elle est dotée d'un personnel
              qualifié, avec des équipements de dernière génération et une solide expérience de près de
              20 ans. Nos prestations respectent les principes de nettoyage dans les établissements
              de grande affluence et de luxe. Elles allient la protection à l'usage des techniques
              douces et procèdent à la réalisation de tests en cas de doute, du vertical à l'horizontal,
              du propre vers le sale à reculons.
            </p>
          </div>
        </div>

        {/* Vision and Mission */}
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-10 p-6 mt-20">
          {/* Vision and Mission Text */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Notre Vision</h1>
            <p className="text-base md:text-lg lg:text-2xl leading-relaxed">
              En tant que professionnel de l'hygiène, notre vision est d'être l'entreprise leader
              dans le domaine de l'hygiène collective et hospitalière au Bénin, en luttant contre
              les maladies infectieuses endémiques et pandémiques.
            </p>
            <h1 className="mt-8 text-2xl md:text-4xl font-bold">Notre Mission</h1>
            <p className="mt-4 text-base md:text-lg lg:text-2xl leading-relaxed">
              Notre mission est d'assurer la propreté et le bien-être des espaces en fournissant
              des services de nettoyage de qualité, respectant les normes de sécurité et environnementales.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center">
            <img className="h-64 md:h-96 w-auto" src={bat} alt="Building" />
          </div>
        </div>

        {/* Values Section */}
        <div className="w-full px-6 md:px-20 mt-24">
          <h1 className="text-2xl md:text-4xl font-bold mb-10 text-center">Nos Valeurs</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-lg p-6 md:p-10 border-2 border-lime-400">
            {/* First Column */}
            <div className="space-y-6">
              {[
                { icon: faStar, title: "Qualité", description: "Offrir des services de nettoyage de haute qualité." },
                { icon: faLeaf, title: "Respect de l'environnement", description: "Adopter des pratiques durables et écologiques." },
                { icon: faHandshake, title: "Fiabilité", description: "Respecter les engagements envers les clients." },
                { icon: faUserTie, title: "Professionnalisme", description: "Former le personnel pour garantir un service courtois." },
                { icon: faMagnifyingGlass, title: "Transparence", description: "Communiquer clairement sur les services et tarifs." },
              ].map(({ icon, title, description }, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <FontAwesomeIcon icon={icon} className="text-4xl" />
                  <div>
                    <span className="font-bold text-2xl">{title}: </span>
                    <p className="text-2xl">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Second Column */}
            <div className="space-y-6">
              {[
                { icon: faSliders, title: "Adaptabilité", description: "Offrir des solutions personnalisées pour chaque client." },
                { icon: faLightbulb, title: "Innovation", description: "Adopter des techniques et technologies novatrices." },
                { icon: faHandHoldingHeart, title: "Responsabilité sociale", description: "Soutenir les initiatives locales et les communautés." },
                { icon: faHelmetSafety, title: "Sécurité", description: "Respecter les normes de santé et de sécurité au travail." },
                { icon: faFaceSmile, title: "Satisfaction client", description: "Écouter les retours et améliorer continuellement." },
              ].map(({ icon, title, description }, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <FontAwesomeIcon icon={icon} className="text-4xl" />
                  <div>
                    <span className="font-bold text-2xl">{title}: </span>
                    <p className="text-2xl">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-24 bg-lime-200 w-full p-6 md:p-20 text-black grid grid-cols-1 md:grid-cols-4 gap-10">
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
    </div>
  );
}

export default AboutUs;
