import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="AboutUs h-screen">
      
      <Navbar/>
      <div className="h-screen flex flex-col justify-start items-center text-white">
        {/* First Section with two columns */}
        <div className="grid grid-cols-2 gap-10 mb-10">
          {/* First Column */}
          <div className="bg-zinc-700 rounded-2xl p-10" style={{ height: '400px', width: '600px' }}>
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
          <div className="bg-zinc-700 rounded-2xl p-10" style={{ height: '400px', width: '600px' }}>
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

        {/* Goals Section, placed directly below the first section */}
        <div className="bg-lime-400 w-full h-auto rounded-2xl text-white" style={{ height: '400px', width: '1200px' }}>
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faStar} />
            <span className="font-bold">Qualité:</span>
            <p>S'engager à fournir des services de nettoyage de haute qualité, <br />en utilisant des méthodes et des produits efficaces.</p>
          </div>

          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faLeaf} />
            <span className="font-bold">Respect de l'environnement:</span>
            <p> Utiliser des produits écologiques et des <br /> pratiques durables pour minimiser l'impact <br />sur l'environnement</p>
          </div>

          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faHandshake} />
            <span className="font-bold">Fiabilité:</span>
            <p>Être ponctuel et respecter les engagements pris envers les clients.</p>
          </div>

          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faUserTie} />
            <span className="font-bold">Professionnalisme:</span>
            <p>Former le personnel pour qu'il agisse avec courtoisie <br />et compétence, en respectant les normes de sécurité<br /> et d'hygiène.</p>
          </div>

          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <span className="font-bold">Transparence:</span>
            <p>Communiquer clairement sur les services, les tarifs et les<br /> méthodes utilisées, en établissant une relation de<br /> confiance avec les clients.</p>
          </div>

          {/* Add more content for the goals section here */}
        </div>
      </div>



    </div>
  );
}

export default AboutUs;
