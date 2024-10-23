import Navbar from "../components/Navbar";
import logo from "../image/logo.png";
import { Link} from "react-router-dom";
import aspirateur from "../image/Assets Mockup Cipa's site/apirateur.png";
import equipment from "../image/Assets Mockup Cipa's site/texte_équipements.png";
import thumbsUp from "../image/Assets Mockup Cipa's site/thumbsUpWoman.png";
import rectangle from "../image/rectangle.png";
import partners from "../image/Assets Mockup Cipa's site/partenaires CIPA 1.png";
import maskman from "../image/Assets Mockup Cipa's site/Mask group.png";
import whiteman from "../image/Assets Mockup Cipa's site/Flyer service de nettoyage promotion bleu (4).png";
import company from '../image/company.gif';
import indstry from '../image/industry.gif';
import desherbage from '../image/désherbage.gif';
import consultaion from '../image/consultation.gif';
import products from '../image/products.gif';
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="LandingPage h-screen">

      <Navbar/>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-44 space-y-8 lg:space-y-0 p-4">
        {/* Logo and information */}
        <div className="text-center lg:text-left">
          <div>
            <img className="h-14 mx-auto lg:mx-0" src={equipment} alt="equipment" />
          </div>
          <br />

          <div>
            <h1 className="text-5xl lg:text-7xl font-bold">CIPA <br /> JESSOUGNON SA</h1>
          </div>
          <br />

          <h3 className="text-sm md:text-base lg:text-lg">
            CIPA JESSOUGNON, est une société spécialisée dans les domaines de l'Entretien et <br />
            Nettoyage, désinfection et dératisation des espaces publics et privés. Elle est dotée <br />
            d'un personnel qualifié, rompu à la tâche, avec des équipements de dernière génération. <br />
            Elle a une solide expérience professionnelle de près de 20 ans et participe chaque année <br />
            aux salons d'hygiène en Europe.
          </h3>

          <div>
            <button
              className="mt-6 lg:mt-10 w-full lg:w-60 text-white py-2 px-4 rounded-full hover:bg-lime-400 transition duration-300"
              type="submit"
              href="tel:+229 62 31 5172"
              style={{ backgroundColor: '#b6d023' }}>
              Contactez-nous
            </button>
          </div>
          <br />
        </div>

        {/* Image section */}
        <div className="w-full lg:w-auto">
          <img className="h-64 md:h-80 lg:h-4/6 mx-auto" src={aspirateur} alt="Logo" />
        </div>
      </div>

      {/* About us on the LandingPage */}
      <div className="relative mt-12">
        {/* Background Image */}
        <img
          className="w-full h-64 md:h-96 lg:h-3/6 transform -translate-y-10 z-0 opacity-50 object-cover"
          src={thumbsUp}
          alt="Thumbs Up Woman"
        />
        <div className="absolute inset-0 transform -translate-y-10 z-10 bg-neutral-950 opacity-50" />

        {/* Logo Image */}
        <img
          className="absolute top-24 lg:bottom-24 left-20 md:left-20 lg:left-40 z-20"
          style={{ height: '600px', width: '400px' }}
          src={logo}
          alt="Logo"
        />

        {/* Title */}
        <h1 className="absolute top-12 md:top-20 right-10 md:right-20 lg:right-80 text-4xl md:text-5xl lg:text-7xl font-bold z-10 p-4 md:p-6 text-white">
          A propos
        </h1>

        {/* Description */}
        <h3 className="absolute top-32 md:top-48 right-4 md:right-10 lg:right-28 text-sm md:text-lg lg:text-xl z-10 p-4 md:p-6 text-start text-white">
          CIPA JESSOUGNON SA est une société spécialisée<br />
          dans les domaines de l'Entretien et Nettoyage,<br />
          désinfection et dératisation des espaces publics et<br />
          privés. Elle est dotée d'un personnel qualifié, rompu<br />
          à la tâche, avec des équipements de dernière génération.<br />
          Elle a une solide expérience professionnelle de près de 20 ans<br />
          et participe chaque année aux salons d'hygiène en Europe.<br />
          L'ensemble de nos prestations respecte les principes de<br />
          nettoyage dans les Etablissements de grandes affluences et<br />
          de luxe. Nos prestations allient la protection à l'usage des<br />
          techniques douces et procèdent à la réalisation de tests en <br />
          cas de doute, du vertical à l'horizontal, du propre vers  <br />
          le sale à reculons.<br />
        </h3>
      </div>

      {/* Services on the LandingPage */}
      <div className="relative flex flex-col justify-center items-center p-4">
        {/* Section Title */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold z-10 p-4 text-black text-center">
          Nos Services
        </h1>

        {/* First Row of Services */}
        <div className="flex flex-wrap justify-center items-center space-x-0 md:space-x-8 lg:space-x-16 mt-10 md:mt-16">
          <div className="flex flex-col items-center m-4 w-48">
            <Link to="/services">
              <div
                className="rounded-full border w-32 h-32 md:w-40 md:h-40 flex justify-center items-center"
                style={{ backgroundColor: '#b6d023' }}>
                <img src={company} alt="Animated GIF" className="w-20 md:w-24" />
              </div>
            </Link>
            <Link to="/services">
              <h1 className="mt-2 text-center text-base md:text-lg font-semibold">
                Entretien et Nettoyage de Bâtiment
              </h1>
            </Link>
          </div>

          <div className="flex flex-col items-center m-4 w-48">
            <Link to="/services">
              <div
                className="rounded-full border w-32 h-32 md:w-40 md:h-40 flex justify-center items-center"
                style={{ backgroundColor: '#b6d023' }}>
                <img src={indstry} alt="Animated GIF" className="w-20 md:w-24" />
              </div>
            </Link>
            <Link to="/services">
              <h1 className="mt-2 text-center text-base md:text-lg font-semibold">
                Entretien et nettoyage Industriel
              </h1>
            </Link>
          </div>

          <div className="flex flex-col items-center m-4 w-48">
            <Link to="/services">
              <div
                className="rounded-full border w-32 h-32 md:w-40 md:h-40 flex justify-center items-center"
                style={{ backgroundColor: '#b6d023' }}>
                <img src={desherbage} alt="Animated GIF" className="w-20 md:w-24" />
              </div>
            </Link>
            <Link to="/services">
              <h1 className="mt-2 text-center text-base md:text-lg font-semibold">
                Désherbage mécanique, chimique et Bio
              </h1>
            </Link>
          </div>
        </div>

        {/* Second Row of Services */}
        <div className="flex flex-wrap justify-center items-center space-x-0 md:space-x-8 lg:space-x-16 mt-10 md:mt-16">
          <div className="flex flex-col items-center m-4 w-48">
            <Link to="/services">
              <div
                className="rounded-full border w-32 h-32 md:w-40 md:h-40 flex justify-center items-center"
                style={{ backgroundColor: '#b6d023' }}>
                <img src={consultaion} alt="Animated GIF" className="w-20 md:w-24" />
              </div>
            </Link>
            <Link to="/services">
              <h1 className="mt-2 text-center text-base md:text-lg font-semibold">
                Consultation et Expertise en Hygiène
              </h1>
            </Link>
          </div>

          <div className="flex flex-col items-center m-4 w-48">
            <Link to="/services">
              <div
                className="rounded-full border w-32 h-32 md:w-40 md:h-40 flex justify-center items-center"
                style={{ backgroundColor: '#b6d023' }}>
                <img src={products} alt="Animated GIF" className="w-20 md:w-24" />
              </div>
            </Link>
            <Link to="/services">
              <h1 className="mt-2 text-center text-base md:text-lg font-semibold">
                Ventes de matériels et produits de désinfection
              </h1>
            </Link>
          </div>
        </div>
      </div>


      {/* Partners on the LandingPage */}
      <div className="relative absolute top-32">
        {/* Image de fond */}
        <img 
          className="w-full transform -translate-y-10 z-0" style={{ height: '900px', width: '1600px' }} 
          src={rectangle} 
          alt="Thumbs Up Woman" 
        />
        <h1 className="absolute top-0 right-20 text-7xl font-bold z-10 p-10 text-white">Nos Références</h1>
        {/* Texte superposé à l'image */}
        <img className="absolute top-32 left-10 z-10" style={{ height: '700px', width: '1400px' }} src={partners} alt="Logo" />
      </div>

      {/* why us? on the LandingPage */}
      <div className="">
        {/* First Section */}
        <div className="relative top-10">
          <h1 className="absolute top-20 right-20 text-7xl font-bold z-10 p-10 text-black">
            Pourquoi nous choisir?
          </h1>
          <div className="relative top-60">
            <img
              className="z-10 absolute left-72"
              style={{ height: '500px', width: '400px' }}
              src={maskman}
              alt="Logo"
            />
            <div className="grid grid-cols-1 gap-20 absolute right-14 top-20">
              <div className="flex items-center">
                <div
                  className="rounded-full border w-10 h-10 text-black text-center flex justify-center items-center"
                  style={{ backgroundColor: '#b6d023' }}
                >
                  1
                </div>
                <h1 className="ml-2 font-semibold text-zinc-800 text-2xl">
                  Nous disposons d'un centre de formation en Hygiène <br />
                  et en Assistance Domestique.
                </h1>
              </div>

              <div className="flex items-center">
                <div
                  className="rounded-full border w-10 h-10 text-black text-center flex justify-center items-center"
                  style={{ backgroundColor: '#b6d023' }}
                >
                  2
                </div>
                <h1 className="ml-2 font-semibold text-zinc-800 text-2xl">
                  Nous mettons un accent particulier sur l'hygiène <br />
                  corporelle et vestimentaire de l'ensemble de notre personnel.
                </h1>
              </div>

              <div className="flex items-center">
                <div
                  className="rounded-full border w-10 h-10 text-black text-center flex justify-center items-center"
                  style={{ backgroundColor: '#b6d023' }}
                >
                  3
                </div>
                <h1 className="ml-2 font-semibold text-zinc-800 text-2xl">
                  Nous évaluons de façon rigoureuse et méticuleuse <br />
                  les besoins qualitatifs et quantitatifs de nos services.
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="relative top-[800px]">
          <div className="">
            <div className="grid grid-cols-1 gap-20 absolute left-14 top-20">
              <div className="flex items-center">
                <div
                  className="rounded-full border w-10 h-10 text-black text-center flex justify-center items-center"
                  style={{ backgroundColor: '#b6d023' }}
                >
                  4
                </div>
                <h1 className="ml-2 font-semibold text-zinc-800 text-2xl">
                  Nous disposons d'une ligne d'appel Service Clientèle <br />
                  et Contentieux ouverte en permanence
                </h1>
              </div>

              <div className="flex items-center">
                <div
                  className="rounded-full border w-10 h-10 text-black text-center flex justify-center items-center"
                  style={{ backgroundColor: '#b6d023' }}
                >
                  5
                </div>
                <h1 className="ml-2 font-semibold text-zinc-800 text-2xl">
                  Nous disposons d'une documentation scientifique et <br />
                  technique pour toutes nos interventions
                </h1>
              </div>

              <div className="flex items-center">
                <div
                  className="rounded-full border w-10 h-10 text-black text-center flex justify-center items-center"
                  style={{ backgroundColor: '#b6d023' }}
                >
                  6
                </div>
                <h1 className="ml-2 font-semibold text-zinc-800 text-2xl">
                  Nous sommes joignables via les réseaux sociaux <br />
                  Whatsapp, Facebook, Twitter et Instagram
                </h1>
              </div>
            </div>

            <img
              className="z-10 absolute right-72"
              style={{ height: '500px', width: '400px' }}
              src={whiteman}
              alt="Logo"
            />
          </div>
        </div>
      </div>

      {/* "Ask for a devis" Section */}
      <div className="relative top-[1400px] bg-zinc-900 w-full h-72 flex justify-center items-center">
        <button
          className="text-white w-5/6 h-36 rounded-full text-4xl font-bold hover:bg-lime-600 transition"
          type="submit"
          href="tel:+229 62 31 5172"
          style={{ backgroundColor: '#b6d023' }}
        >
          Contactez-nous
        </button>
      </div>

      {/* Footer Section */}
      <div className="relative top-[1500px] bg-lime-200 w-full p-6 md:p-20 text-black grid grid-cols-1 md:grid-cols-4 gap-10">
        <img className="h-24 mx-auto" src={logo} alt="Logo" />
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">À propos de nous</h2>
          <p>
            Nous sommes une entreprise de nettoyage professionnelle dédiée à fournir
            des services de haute qualité avec des pratiques respectueuses de
            l'environnement.
          </p>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">Navigation</h2>
          <ul>
            <li>
              <Link to="/home">Accueil</Link>
            </li>
            <li>
              <Link to="/aboutus">A Propos</Link>
            </li>
            <li>
              <Link to="/services">Nos Services</Link>
            </li>
            <li>
              <Link to="/partners">Nos Références</Link>
            </li>
            <li>
              <Link to="/contactus">Contactez-nous</Link>
            </li>
          </ul>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-lg font-bold">Réseaux sociaux</h2>
          <ul>
            <li>
              <Link to="/home">Facebook</Link>
            </li>
            <li>
              <Link to="/aboutus">WhatsApp</Link>
            </li>
            <li>
              <Link to="/services">LinkedIn</Link>
            </li>
            <li>
              <Link to="/partners">Instagram</Link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default LandingPage;
