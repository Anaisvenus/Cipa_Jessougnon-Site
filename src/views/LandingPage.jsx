import Navbar from "../components/Navbar";
import logo from "../image/logo.png";
import { Link} from "react-router-dom";
import devisbutton from "../image/Assets Mockup Cipa's site/Frame 4.png";
import aspirateur from "../image/Assets Mockup Cipa's site/apirateur.png";
import equipment from "../image/Assets Mockup Cipa's site/texte_équipements.png";
import thumbsUp from "../image/Assets Mockup Cipa's site/thumbsUpWoman.png";
import services1 from "../image/Assets Mockup Cipa's site/Group 24.png";
import services2 from "../image/Assets Mockup Cipa's site/Group 25.png";
import services3 from "../image/Assets Mockup Cipa's site/Group 26.png";
import services4 from "../image/Assets Mockup Cipa's site/Group 27.png";
import services5 from "../image/Assets Mockup Cipa's site/Group 28.png";
import rectangle from "../image/Assets Mockup Cipa's site/Rectangle 7.png";
import partners from "../image/Assets Mockup Cipa's site/partenaires CIPA 1.png";

function LandingPage() {
  return (
    <div className="LandingPage h-screen">

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

      {/* About us on the LandingPage */}
      <div className="relative mt-12">
        {/* Image de fond */}
        <img 
          className="w-full h-3/6 transform -translate-y-10 z-0 opacity-50 bg-grey-200" 
          src={thumbsUp} 
          alt="Thumbs Up Woman" 
        />
        <div className="absolute inset-0 transform -translate-y-10 z-10 bg-black opacity-30" />

        {/* Texte superposé à l'image */}
        <img className="absolute bottom-24 left-0 z-10" style={{ height: '800px', width: '600px' }} src={logo} alt="Logo" />


        <h1 className="absolute top-20 right-80 text-7xl font-bold z-10 p-10 text-white">A propos</h1>
        <h3 className="absolute top-48 right-28 text-xl z-10 p-10 text-start text-white">
          CIPA JESSOUGNON SA est une société spécialisée<br />
          dans les domaines del'Entretien et Nettoyage,<br />
          désinfection et dératisation des espaces publics et<br />
          privés. Elle est dotée d'un personnel qualifié, rompu<br />
          à la tâche, avec des équipements de dernière génération,<br />
          une solide expérience professionnelle de près de 20 ans<br />
          et participe chaque année aux salons d'hygiène en Europe.<br />
          L'ensemble de nos prestations respectent les principes de<br />
          nettoyage dans les Etablissement de grandes affluences et<br />
          de luxe. Elles allient la protection à l'usage des techniques<br />
          douces et procèdent à la réalisation de tests en cas de<br />
          doute, du vertical à l'horizontal, du propre vers le sale <br />à reculons.<br />
        </h3>
      </div>

      {/* Services on the LandingPage */}
      <div className="relative flex flex-col justify-center items-center">
        {/* Section Title */}
        <h1 className="text-7xl font-bold z-10 p-10 text-black  text-start">Nos Services</h1>

        {/* First Row of Services */}
        <div className="flex justify-center items-center space-x-16 mt-20"> {/* Use `space-x-16` for spacing */}
          <div className="flex flex-col items-center"> {/* Flex column to center text under image */}
            <Link to="/services">
              <img 
                className="h-40 w-auto" // Adjust height as needed
                src={services1} 
                alt="Service 1" 
              />
            </Link>
            <Link to="/services">
              <h1 className="mt-2 text-lg font-semibold">Entretien et Nettoyage de Bâtiment</h1> {/* Centered text */}
            </Link>
          </div>

          <div className="flex flex-col items-center"> 
            <Link to="/services">
              <img 
                className="h-40 w-auto" // Adjust height as needed
                src={services2} 
                alt="Service 2" 
              />
            </Link>
            <Link to="/services">
              <h1 className="mt-2 text-lg font-semibold">Entretien et nettoyage Industriel</h1> {/* Centered text */}
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link to="/services">
              <img 
                className="h-40 w-auto" // Adjust height as needed
                src={services3} 
                alt="Service 3" 
              />
            </Link>
            <Link to="/services">
              <h1 className="mt-2 text-lg font-semibold">Désherbage mécanique, chimique et Bio</h1> {/* Centered text */}
            </Link>
          </div>
        </div>

        {/* Second Row of Services */}
        <div className="flex justify-center items-center space-x-16 mt-16"> {/* Use `space-x-16` for spacing */}
          <div className="flex flex-col items-center"> 
            <Link to="/services">
              <img 
                className="h-40 w-auto" // Adjust height as needed
                src={services4} 
                alt="Service 4" 
              />
            </Link>
            <Link to="/services">
              <h1 className="mt-2 text-lg font-semibold">Consultation et Expertise en Hygiène</h1> {/* Centered text */}
            </Link>
          </div>

          <div className="flex flex-col items-center"> 
            <Link to="/services">
              <img 
                className="h-40 w-auto" // Adjust height as needed
                src={services5} 
                alt="Service 5" 
              />
            </Link>
            <Link to="/services">
              <h1 className="mt-2 text-lg font-semibold">Ventes de matériels et produits de désinfection</h1> {/* Centered text */}
            </Link>
          </div>
        </div>
      </div>

      {/* Partners on the LandingPage */}
      <div className="relative mt-14">
        {/* Image de fond */}
        <img 
          className="w-full h-auto transform -translate-y-10 z-0 opacity-50 bg-grey-200" 
          src={rectangle} 
          alt="Thumbs Up Woman" 
        />
        <div className="absolute inset-0 transform -translate-y-10 z-10 bg-zinc-900" />

        <h1 className="absolute top-0 right-40 text-7xl font-bold z-10 p-10 text-white">Nos Références</h1>
        {/* Texte superposé à l'image */}
        <img className="absolute top-28 left-10 z-10" style={{ height: '700px', width: '1400px' }} src={partners} alt="Logo" />


      </div>


      {/* </div> */}



      {/* Partners on the LandingPage */}
      {/* <div>
        <h1>Nos Références</h1>
      </div> */}

    </div>
  );
}

export default LandingPage;
