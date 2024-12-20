
import Navbar from "../components/Navbar";
import logo from "../image/logo.png";
import { Link} from "react-router-dom";
import aspirateur from "../image/Assets Mockup Cipa's site/apirateur.png";
import thumbsUp from "../image/Assets Mockup Cipa's site/thumbsUpWoman.png";
import rectangle from "../image/rectangle.png";
import partners from "../image/Assets Mockup Cipa's site/partenaires CIPA 1.png";
import maskman from "../image/Assets Mockup Cipa's site/Mask group.png";
import blackwoman from "../image/Flyer service de nettoyage promotion bleu.png";
import company from '../image/company.gif';
import indstry from '../image/industry.gif';
import desherbage from '../image/désherbage.gif';
import consultaion from '../image/consultation.gif';
import products from '../image/products.gif';
import React, { useEffect, useState } from 'react';
import "./LandingPage.css";
import "./MyComponent";
import { useScroll } from './useScroll';


function comp() {
  
  const isScrolled = useScroll(200);
  

  return (
    <div className="LandingPage h-screen mx-auto px-auto">
      
      <Navbar/>



      {/* Logo and information */}
      <div className="md:flex md:flex-col md:flex-row justify-center items-center md:space-x-44 space-y-8 md:space-y-0 p-4">
        <div className="text-center md:text-left">
          <div>
            {/* <img className="h-14 mx-auto md:mx-0" src={equipment} alt="equipment" /> */}
            <h1 className="text-xl" style={{ color: '#000000' }}>Équipements médicaux, réactifs, <br />
            désinfection, dératisation, entretien, hygiène et bio-nettoyage</h1>
          </div>
          <br />

          <div>
            <h1 className="text-5xl md:text-7xl font-bold" style={{ color: '#b6d023' }}>CIPA <br /> JESSOUGNON SA</h1>
          </div>
          <br />

          <h3 className="text-sm md:text-base md:text-lg">
            CIPA JESSOUGNON, est une société spécialisée dans les domaines de l'Entretien et <br />
            Nettoyage, désinfection et dératisation des espaces publics et privés. Elle est dotée <br />
            d'un personnel qualifié, rompu à la tâche, avec des équipements de dernière génération. <br />
            Elle a une solide expérience professionnelle de près de 20 ans et participe chaque année <br />
            aux salons d'hygiène en Europe.
          </h3>

          <div>
            <a
              className="relative absolute top-10 w-full md:w-60 text-white hover:bg-blue-400 py-2 px-4 rounded-full transition duration-300"
              type="submit"
               href="tel:+229 62 31 5172"
              style={{ backgroundColor: '#b6d023' }}>
              Contactez-nous
            </a>
          </div>
          <br />
        </div>

        {/* Image section */}
        <div className="w-full md:w-auto">
          <img className="h-64 md:h-80 md:h-4/6 md:mx-auto" src={aspirateur} alt="Logo" />
        </div>
      </div>




      {/* About us on the LandingPage */}
      <div className={`relative mt-12 transition-transform duration-500 ease-in-out ${isScrolled ? 'transform scale-105 opacity-90' : ''}`}>
        {/* Background Image */}
        <img
          className="md:w-full h-64 md:h-96 md:h-3/6 transform -translate-y-10 z-0 opacity-50 object-cover"
          src={thumbsUp}
          alt="Thumbs Up Woman"
        />
        <div className="absolute inset-0 transform -translate-y-10 z-10 bg-bleu-900 opacity-50" />

        {/* Logo Image */}
        <img
          className="absolute md:top-24 md:bottom-24 md:left-20 md:left-20 md:left-40 z-20"
          style={{ height: '600px', width: '400px' }}
          src={logo}
          alt="Logo"
        />

        {/* Title */}
        <h1 className="absolute top-12 md:top-20 right-10 md:right-20 md:right-80 text-4xl md:text-5xl md:text-7xl font-bold z-10 p-4 md:p-6 text-white">
          A propos
        </h1>

        {/* Description */}
        <h3 className="absolute top-32 md:top-48 right-4 md:right-10 md:right-28 text-sm md:text-lg md:text-xl z-10 p-4 md:p-6 text-start text-white">
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
      <div className="relative md:flex md:flex-col justify-center items-center p-4">
        {/* Section Title */}
        <h1 className="text-4xl md:text-5xl md:text-7xl font-bold z-10 p-4 text-black text-center">
          Nos Services
        </h1>

        {/* First Row of Services */}
        <div className="md:flex md:flex-wrap justify-center items-center space-x-0 md:space-x-8 md:space-x-16 mt-10 md:mt-16">
          <div className="md:flex md:flex-col items-center m-4 w-48">
            <Link to="/services">
              <div
                className="rounded-full border w-32 h-32 md:w-40 md:h-40 md:flex justify-center items-center"
                style={{ backgroundColor: '#b6d023' }}>
                <img src={company} alt="Animated GIF" className="md:w-20 md:w-24" />
              </div>
            </Link>
            <Link to="/services">
              <h1 className="mt-2 text-center text-base md:text-lg font-semibold">
                Entretien et Nettoyage de Bâtiment
              </h1>
            </Link>
          </div>

          <div className="md:flex md:flex-col items-center m-4 w-48">
            <Link to="/services">
              <div
                className="rounded-full border w-32 h-32 md:w-40 md:h-40 md:flex justify-center items-center"
                style={{ backgroundColor: '#b6d023' }}>
                <img src={indstry} alt="Animated GIF" className="md:w-20 md:w-24" />
              </div>
            </Link>
            <Link to="/services">
              <h1 className="mt-2 text-center text-base md:text-lg font-semibold">
                Entretien et nettoyage Industriel
              </h1>
            </Link>
          </div>

          <div className="md:flex md:flex-col items-center m-4 w-48">
            <Link to="/services">
              <div
                className="rounded-full border w-32 h-32 md:w-40 md:h-40 md:flex justify-center items-center"
                style={{ backgroundColor: '#b6d023' }}>
                <img src={desherbage} alt="Animated GIF" className="md:w-20 md:w-24" />
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
        <div className="md:flex md:flex-wrap justify-center items-center space-x-0 md:space-x-8 md:space-x-16 mt-10 md:mt-16">
          <div className="md:flex md:flex-col items-center m-4 w-48">
            <Link to="/services">
              <div
                className="rounded-full border w-32 h-32 md:w-40 md:h-40 md:flex justify-center items-center"
                style={{ backgroundColor: '#b6d023' }}>
                <img src={consultaion} alt="Animated GIF" className="md:w-20 md:w-24" />
              </div>
            </Link>
            <Link to="/services">
              <h1 className="mt-2 text-center text-base md:text-lg font-semibold">
                Consultation et Expertise en Hygiène
              </h1>
            </Link>
          </div>

          <div className="md:flex md:flex-col items-center m-4 w-48">
            <Link to="/services">
              <div
                className="rounded-full border w-32 h-32 md:w-40 md:h-40 md:flex justify-center items-center"
                style={{ backgroundColor: '#b6d023' }}>
                <img src={products} alt="Animated GIF" className="md:w-20 md:w-24" />
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
          className="md:w-full transform -translate-y-10 z-0 opacity-70" style={{ height: '900px', width: '1600px' }} 
          src={rectangle} 
          alt="Thumbs Up Woman" 
        />
        <h1 className="absolute top-0 right-20 text-7xl font-bold z-10 p-10 text-black">Nos Références</h1>
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
          <div className="relative md:top-60">
            <img
              className="md:z-10 absolute md:left-72"
              style={{ height: '500px', width: '350px' }}
              src={maskman}
              alt="Logo"
            />
            <div className="grid grid-cols-1 gap-20 absolute right-14 top-20">
              <div className="md:flex items-center">
                <div
                  className="rounded-full border w-10 h-10 text-black text-center md:flex justify-center items-center"
                  style={{ backgroundColor: '#b6d023' }}
                >
                  1
                </div>
                <h1 className="ml-2 font-semibold text-zinc-800 text-2xl">
                  Nous disposons d'un centre de formation en Hygiène <br />
                  et en Assistance Domestique.
                </h1>
              </div>

              <div className="md:flex items-center">
                <div
                  className="rounded-full border w-10 h-10 text-black text-center md:flex justify-center items-center"
                  style={{ backgroundColor: '#b6d023' }}
                >
                  2
                </div>
                <h1 className="ml-2 font-semibold text-zinc-800 text-2xl">
                  Nous mettons un accent particulier sur l'hygiène <br />
                  corporelle et vestimentaire de l'ensemble de notre personnel.
                </h1>
              </div>

              <div className="md:flex items-center">
                <div
                  className="rounded-full border w-10 h-10 text-black text-center md:flex justify-center items-center"
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
              <div className="md:flex items-center">
                <div
                  className="rounded-full border w-10 h-10 text-black text-center md:flex justify-center items-center"
                  style={{ backgroundColor: '#b6d023' }}
                >
                  4
                </div>
                <h1 className="md:ml-2 font-semibold text-zinc-800 md:text-2xl">
                  Nous disposons d'une ligne d'appel Service Clientèle <br />
                  et Contentieux ouverte en permanence
                </h1>
              </div>

              <div className="md:flex items-center">
                <div
                  className="rounded-full border w-10 h-10 text-black text-center md:flex justify-center items-center"
                  style={{ backgroundColor: '#b6d023' }}
                >
                  5
                </div>
                <h1 className="ml-2 font-semibold text-zinc-800 text-2xl">
                  Nous disposons d'une documentation scientifique et <br />
                  technique pour toutes nos interventions
                </h1>
              </div>

              <div className="md:flex items-center">
                <div
                  className="rounded-full border w-10 h-10 text-black text-center md:flex justify-center items-center"
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
              className="md:z-10 absolute md:right-72 rounded-lg"
              style={{ height: '500px', width: '350px' }}
              src={blackwoman}
              alt="Logo"
            />
          </div>
        </div>
      </div>




      {/* Contact Us Section */}
      <div className="relative top-[1400px] bg-blue-200 w-full h-72 md:flex justify-center items-center">
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

// export default LandingPage;
