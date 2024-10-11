import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { faHelmetSafety } from "@fortawesome/free-solid-svg-icons";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";
// import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="AboutUs h-screen">
      
      <Navbar/>
      <div className="h-screen flex flex-col justify-start items-center text-white">
        {/* First Section with two columns */}
        <div className="grid grid-cols-2 gap-40 mb-10">
          {/* First Column */}
          <div className="bg-zinc-700 rounded-2xl p-10" style={{ height: '500px', width: '600px' }}>
            <h1 className="text-4xl font-bold">Qui sommes-nous?</h1>
            <p className="mt-4 text-lg font-light">
              CIPA JESSOUGNON SA est une société spécialisée dans les <br />
              domaines de l'Entretien et Nettoyage, désinfection et <br />
              dératisation des espaces publics et privés. Elle est <br />
              dotée d'un personnel qualifié, rompu à la tâche, avec <br />
              des équipements de dernière génération, une solide <br />
              expérience professionnelle de près de 20 ans et <br />
              participe chaque année aux salons d'hygiène en Europe. <br />
              L'ensemble de nos prestations respectent les principes de <br />
              nettoyage dans les Etablissement de grandes affluences <br />
              et de luxe. Elles allient la protection à l'usage des <br />
              techniques douces et procèdent à la réalisation de tests <br />
              en cas de doute, du vertical à l'horizontal, du propre <br />
              vers le sale à reculons.
            </p>
          </div>

          {/* Second Column */}
          <div className="bg-zinc-700 rounded-2xl p-10" style={{ height: '500px', width: '600px' }}>
            <h1 className="text-4xl font-bold">Notre Vision</h1>
            <p className="mt-4 text-lg font-light">
              En tant que professionnel de l'hygiène, notre vision est d'être<br />
              l'entreprise leader dans le domaine de l'hygiène Collective et<br />
              Hospitalière et un partenaire incontournable dans la lutte et la<br />
              prévention des maladies infectieuses endémiques et <br />
              pandémiques au Bénin.
            </p>

            <h1 className="mt-8 text-4xl font-bold">Notre Mission</h1>
            <p className="mt-4 text-lg font-light">
              Nous nous sommes fixé pour mission principale d'assurer la <br />
              propreté, l'hygiène et le bien-être des espaces en fournissant<br />
              des services de nettoyage de qualité optimales, réguliers<br />
              et de désinfection adaptés aux besoins spécifiques de nos <br />
              clients. Nous accordons une importance capitale à l'utilisation<br />
              de techniques et de produits efficaces pour maintenir un <br />
              environnement sain et agréable, tout en respectant les normes <br />
              de sécurité et environnementales.
            </p>
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-10">Nos Valeurs</h1>

        <div className="grid grid-cols-2 gap-10 w-full rounded-2xl text-white p-10" style={{ width: '1400px', backgroundColor: '#b6d023' }}>
          {/* First Column */}
          <div className="space-y-10">
            <div className="flex items-start space-x-4">
              <FontAwesomeIcon icon={faStar} className="text-3xl" />
              <div>
                <span className="font-bold">Qualité: </span>
                <p>S'engager à fournir des services de nettoyage de haute qualité, en utilisant des méthodes et des produits efficaces.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FontAwesomeIcon icon={faLeaf} className="text-3xl" />
              <div>
                <span className="font-bold">Respect de l'environnement: </span>
                <p>Utiliser des produits écologiques et des pratiques durables pour minimiser l'impact sur l'environnement.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FontAwesomeIcon icon={faHandshake} className="text-3xl" />
              <div>
                <span className="font-bold">Fiabilité: </span>
                <p>Être ponctuel et respecter les engagements pris envers les clients.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FontAwesomeIcon icon={faUserTie} className="text-3xl" />
              <div>
                <span className="font-bold">Professionnalisme: </span>
                <p>Former le personnel pour qu'il agisse avec courtoisie et compétence, en respectant les normes de sécurité et d'hygiène.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FontAwesomeIcon icon={faMagnifyingGlass} className="text-3xl" />
              <div>
                <span className="font-bold">Transparence: </span>
                <p>Communiquer clairement sur les services, les tarifs et les méthodes utilisées, en établissant une relation de confiance avec les clients.</p>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="space-y-10">
            <div className="flex items-start space-x-4">
              <FontAwesomeIcon icon={faSliders} className="text-3xl" />
              <div>
                <span className="font-bold">Adaptabilité: </span>
                <p>Savoir s'ajuster aux besoins spécifiques de chaque client, en offrant des solutions personnalisées.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FontAwesomeIcon icon={faLightbulb} className="text-3xl" />
              <div>
                <span className="font-bold">Innovation: </span>
                <p>Rechercher constamment de nouvelles techniques et technologies pour améliorer l'efficacité des services.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FontAwesomeIcon icon={faHandHoldingHeart} className="text-3xl" />
              <div>
                <span className="font-bold">Responsabilité sociale: </span>
                <p>Contribuer au bien-être de la communauté locale en soutenant des initiatives sociales ou en offrant des emplois à des personnes défavorisées.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FontAwesomeIcon icon={faHelmetSafety} className="text-3xl" />
              <div>
                <span className="font-bold">Sécurité: </span>
                <p>Prioriser la sécurité des employés et des clients en respectant les normes de santé et de sécurité au travail.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <FontAwesomeIcon icon={faFaceSmile} className="text-3xl" />
              <div>
                <span className="font-bold">Satisfaction client: </span>
                <p>Mettre un point d'honneur à écouter les retours des clients et à améliorer continuellement les services en fonction de leurs besoins.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="relative top-[600px] bg-zinc-500 w-full h-96 grid grid-cols-3 gap-10 flex justify-center items-center">
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

export default AboutUs;
