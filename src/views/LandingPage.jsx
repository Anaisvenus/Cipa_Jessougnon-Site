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
import maskman from "../image/Assets Mockup Cipa's site/Mask group.png";
import whiteman from "../image/Assets Mockup Cipa's site/Flyer service de nettoyage promotion bleu (4).png";

import company from '../image/company.gif';
import indstry from '../image/industry.gif';
import desherbage from '../image/désherbage.gif';
import consultaion from '../image/consultation.gif';
import products from '../image/products.gif';

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
              {/* <img className="h-14 mt-16" src={devisbutton} alt="Logo" /> */}
              <button
                className="mt-10 cursor-pointer text-white font-bold relative text-[14px] w-[12em] 
                h-[3em] text-center bg-lime-500 bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy
                hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px]
                before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r
                before:from-lime-500 before:from-10% before:via-lime-300 before:via-30% before:to-lime-700
                before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl
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
      {/* <img src={animationGif} alt="Animated GIF" style={{ width: '100px', height: 'auto' }} /> */}

      {/* About us on the LandingPage */}
      <div className="relative mt-12">
        {/* Image de fond */}
        <img 
          className="w-full h-3/6 transform -translate-y-10 z-0 opacity-50 bg-grey-200" 
          src={thumbsUp} 
          alt="Thumbs Up Woman" 
        />
        <div className="absolute inset-0 transform -translate-y-10 z-10 bg-neutral-950 opacity-50" />

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
        <h1 className="text-7xl font-bold z-10 p-10 text-black text-start">Nos Services</h1>

        {/* First Row of Services */}
        <div className="flex justify-center items-center space-x-16 mt-20"> {/* Use `space-x-16` for spacing */}
          <div className="flex flex-col items-center"> {/* Flex column to center text under image */}
            <Link to="/services">
            <div className="rounded-full border bg-lime-400 w-40 h-40 flex justify-center items-center">
              <img src={company} alt="Animated GIF" style={{ width: '100px', height: 'auto' }} />
            </div>
            </Link>
            <Link to="/services">
              <h1 className="mt-2 text-lg font-semibold">Entretien et Nettoyage de Bâtiment</h1> {/* Centered text */}
            </Link>
          </div>

          <div className="flex flex-col items-center"> 
            <Link to="/services">
            <div className="rounded-full border bg-lime-400 w-40 h-40 flex justify-center items-center">
              <img src={indstry} alt="Animated GIF" style={{ width: '100px', height: 'auto' }} />
            </div>
            </Link>
            <Link to="/services">
              <h1 className="mt-2 text-lg font-semibold">Entretien et nettoyage Industriel</h1> {/* Centered text */}
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <Link to="/services">
            <div className="rounded-full border bg-lime-400 w-40 h-40 flex justify-center items-center">
              <img src={desherbage} alt="Animated GIF" style={{ width: '100px', height: 'auto' }} />
            </div>
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
            <div className="rounded-full border bg-lime-400 w-40 h-40 flex justify-center items-center">
              <img src={consultaion} alt="Animated GIF" style={{ width: '100px', height: 'auto' }} />
            </div>
            </Link>
            <Link to="/services">
              <h1 className="mt-2 text-lg font-semibold">Consultation et Expertise en Hygiène</h1> {/* Centered text */}
            </Link>
          </div>

          <div className="flex flex-col items-center"> 
            <Link to="/services">
              <div className="rounded-full border bg-lime-400 w-40 h-40 flex justify-center items-center">
                <img src={products} alt="Animated GIF" style={{ width: '100px', height: 'auto' }} />
              </div>
            </Link>
            <Link to="/services">
              <h1 className="mt-2 text-lg font-semibold">Ventes de matériels et produits de désinfection</h1> {/* Centered text */}
            </Link>
          </div>
        </div>
      </div>

      {/* Partners on the LandingPage */}
      <div className="relative absolute top-24">
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
      <div>
        <div className="relative">
          <h1 className="absolute top-20 right-20 text-7xl font-bold z-10 p-10 text-black">Pourquoi nous choisir?</h1>

          <div className="relative absolute top-60">
            <img 
              className="z-10 absolute left-72" 
              style={{ height: '500px', width: '400px' }} 
              src={maskman} 
              alt="Logo" 
            />
            
            <div className="grid grid-col-1 gap-20 absolute right-60 top-20">
              <div className=" flex items-center">
                <div className="rounded-full border bg-zinc-900 w-10 h-10 text-white text-center flex justify-center items-center">1</div>
                <h1 className="ml-2 text-lime-500 font-semibold">Nous disposons d'un centre de formation en Hygiène <br />et en Assistance Domestique.</h1>
              </div>
              
              <div className=" flex items-center">
                <div className="rounded-full border bg-zinc-900 w-10 h-10 text-white text-center flex justify-center items-center">2</div>
                <h1 className="ml-2 text-lime-500 font-semibold">Nous mettons un accent particulier sur l'hygiène corporelle <br />et vestimentaire de l'ensemble de notre personnel.</h1>
              </div>
              
              <div className=" flex items-center">
                <div className="rounded-full border bg-zinc-900 w-10 h-10 text-white text-center flex justify-center items-center">3</div>
                <h1 className="ml-2 text-lime-500 font-semibold">Nous évaluons de façon rigoureuse et méticuleuse les besoins <br />qualitatifs et quantitatifs de nos services.</h1>
              </div>
            </div>
          </div>
        </div>

        
        <div className="relative">
          <div className="absolute top-60">
            <img 
              className="z-10 absolute right-72" 
              style={{ height: '500px', width: '400px' }} 
              src={whiteman} 
              alt="Logo" 
            />
            
            <div className="grid grid-col-1 gap-20 absolute left-60 top-20">
              <div className=" flex items-center">
                <div className="rounded-full border bg-zinc-900 w-10 h-10 text-white text-center flex justify-center items-center">1</div>
                <h1 className="ml-2 text-lime-500 font-semibold">Nous disposons d'un centre de formation en Hygiène <br />et en Assistance Domestique.</h1>
              </div>
              
              <div className=" flex items-center">
                <div className="rounded-full border bg-zinc-900 w-10 h-10 text-white text-center flex justify-center items-center">2</div>
                <h1 className="ml-2 text-lime-500 font-semibold">Nous mettons un accent particulier sur l'hygiène corporelle <br />et vestimentaire de l'ensemble de notre personnel.</h1>
              </div>
              
              <div className=" flex items-center">
                <div className="rounded-full border bg-zinc-900 w-10 h-10 text-white text-center flex justify-center items-center">3</div>
                <h1 className="ml-2 text-lime-500 font-semibold">Nous évaluons de façon rigoureuse et méticuleuse les besoins <br />qualitatifs et quantitatifs de nos services.</h1>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default LandingPage;
