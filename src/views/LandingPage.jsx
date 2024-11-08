import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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
// import { useScroll } from './useScroll';

export default function LandingPage() {
  return (
    <div className="container w-full">
      <Navbar/>
      


      {/* Presentation */}
      <main className="flex flex-wrap">

        {/* Main Section */}
        <section className="w-full md:w-3/4 p-4">
          <h2 className="text-l md:text-2xl font-semibold mb-4">Équipements médicaux, réactifs, <br />désinfection, dératisation, entretien, hygiène et bio-nettoyage</h2>
          <p className="text-gray-700 text-4xl md:text-7xl font-bold">CIPA <br /> JESSOUGNON SA</p>
          <div className="mt-4">
            <h3 className="text-sm md:text-base md:text-xl">
              CIPA JESSOUGNON, est une société spécialisée dans les domaines de l'Entretien et <br />
              Nettoyage, désinfection et dératisation des espaces publics et privés. Elle est dotée <br />
              d'un personnel qualifié, rompu à la tâche, avec des équipements de dernière génération. <br />
              Elle a une solide expérience professionnelle de près de 20 ans et participe chaque année <br />
              aux salons d'hygiène en Europe.
            </h3>
          </div>

          <a
              className="relative absolute top-6 w-full md:w-80 md:h-20 text-white py-2 px-4 rounded-full transition duration-300"
              type="submit"
               href="tel:+229 62 31 5172"
              style={{ backgroundColor: '#b6d023' }}>
              Contactez-nous
            </a>
        </section>


        {/* Right Sidebar */}
        <aside className="w-full md:w-1/4 p-4">
        <img className="hidden md:h-80 md:mt-6 md:mx-auto" src={aspirateur} alt="Logo" />
        </aside>
      </main>

      {/* About Us */}
      <main className="flex flex-wrap relative absolute top-20">
        <img
          className="md:w-full h-96 md:h-3/6 transform -translate-y-10 z-0 opacity-50 object-cover"
          src={thumbsUp}
          alt="Thumbs Up Woman"
        />

        <div className="absolute inset-0 md:inset-0 transform -translate-y-10 z-10 md:z-10 bg-bleu-900 opacity-50" />
        {/* Left Sidebar */}
        <aside className="w-full md:w-1/4 p-4">
          <img
            className="absolute top-0 md:top-10 h-32 md:h-96 z-20"
            src={logo}
            alt="Logo"
          />
        </aside>

        {/* Main Section */}
        <section className="w-full md:w-3/4 p-4">
          {/* Title */}
        <h1 className="absolute top-20 md:top-10 right-4 text-l md:text-7xl text-back font-bold">
          A propos
        </h1>

        {/* Description */}
        <h3 className="font-semibold text-back absolute top-32 md:top-32 md:right-6 right-4 text-end text-xs md:text-2xl">
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
        </section>
      </main>

      {/* Services */}
      <main className="">
        <div className="">
          {/* Section Title */}
          <h1 className="text-4xl font-bold z-10 p-4 text-black text-center">
            Nos Services
          </h1>

          {/* First Row of Services */}
          <div className="flex justify-center items-center md:space-x-20 md:mt-16">
            <div className="flex flex-col justify-center items-center m-4 w-48 hover:scale-105 transition-all duration-500">
              <Link to="/services">
                <div
                  className="rounded-full border w-16 h-16 md:w-40 md:h-40 flex justify-center items-center"
                  style={{ backgroundColor: '#b6d023' }}>
                  <img src={company} alt="Animated GIF" className="w-10 md:w-24" />
                </div>
                
                <h1 className="mt-2 md:text-center text-base md:text-lg text-xs font-semibold">
                  Entretien et Nettoyage de Bâtiment
                </h1>
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center m-4 w-48 hover:scale-105 transition-all duration-500">
              <Link to="/services">
                <div
                  className="rounded-full border w-16 h-16 md:w-40 md:h-40 flex justify-center items-center"
                  style={{ backgroundColor: '#b6d023' }}>
                  <img src={indstry} alt="Animated GIF" className="w-10 md:w-24" />
                </div>
                
                <h1 className="mt-2 md:text-center text-base md:text-lg text-xs font-semibold">
                  Entretien et nettoyage Industriel
                </h1>
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center m-4 w-48 hover:scale-105 transition-all duration-500">
              <Link to="/services">
                <div
                  className="rounded-full border w-16 h-16 md:w-40 md:h-40 flex justify-center items-center"
                  style={{ backgroundColor: '#b6d023' }}>
                  <img src={desherbage} alt="Animated GIF" className="w-10 md:w-24" />
                </div>
                
                <h1 className="mt-2 md:text-center text-base md:text-lg text-xs font-semibold">
                  Désherbage mécanique, chimique et Bio
                </h1>
              </Link>
            </div>
          </div>

          {/* Second Row of Services */}
          <div className="flex justify-center items-center md:space-x-20 md:mt-16">
            <div className="flex flex-col justify-center items-center m-4 w-48 hover:scale-105 transition-all duration-500">
              <Link to="/services">
                <div
                  className="rounded-full border w-16 h-16 md:w-40 md:h-40 flex justify-center items-center"
                  style={{ backgroundColor: '#b6d023' }}>
                  <img src={consultaion} alt="Animated GIF" className="w-10 md:w-24" />
                </div>
                
                <h1 className="mt-2 md:text-center text-base md:text-lg text-xs  font-semibold">
                  Consultation et Expertise en Hygiène
                </h1>
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center m-4 w-48 hover:scale-105 transition-all duration-500">
              <Link to="/services">
                <div
                  className="bg-white rounded-full  w-16 h-16 md:w-40 md:h-40 flex justify-center items-center">
                  {/* <img src={consultaion} alt="Animated GIF" className="w-10 md:w-24" /> */}
                </div>
                
                <h1 className="mt-2 md:text-center text-base md:text-lg text-xs text-white font-semibold">
                  Consultation et Expertise en Hygiène
                </h1>
              </Link>
            </div>

            <div className="flex flex-col justify-center items-center m-4 w-48">
              <Link to="/services">
                <div
                  className="rounded-full border w-16 h-16 md:w-40 md:h-40 flex justify-center items-center"
                  style={{ backgroundColor: '#b6d023' }}>
                  <img src={products} alt="Animated GIF" className="w-10 md:w-24" />
                </div>
                
                <h1 className="mt-2 md:text-center text-base md:text-lg text-xs font-semibold">
                  Ventes de matériels et produits de désinfection
                </h1>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Partners */}
      <main className="flex flex-wrap">
        <div className="relative absolute top-10 flex  justify-center items-center">
          {/* Image de fond */}
          <img 
            className="md:w-full transform -translate-y-10 z-0 opacity-70" style={{ height: '700px', width: '1200px' }} 
            src={rectangle} 
            alt="Thumbs Up Woman" 
          />
          <h1 className="absolute top-0 text-xl font-bold z-10 p-10 text-black">Nos Références</h1>
          {/* Texte superposé à l'image */}
          <img className="absolute top-20 z-10" style={{ height: '500px', width: '1000px' }} src={partners} alt="Logo" />
        </div>
      </main>

      {/* Why us */}
      <div>
        {/* First section */}
        <main className="flex flex-wrap mt-6">
          {/* Left Sidebar */}
          <aside className="w-full md:w-1/4">
            <img
              className="md:h-72 h-60"
              src={maskman}
              alt="Logo"
            />
          </aside>

          {/* Main Section */}
          <section className="w-full md:w-3/4 p-4">
            <div className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-1">
              <div className="flex items-center">
                <div
                  className="rounded-full border w-10 h-10 text-xs text-black text-center flex justify-center items-center"
                  style={{ backgroundColor: '#b6d023' }}>1
                </div>
                <h1 className="ml-2 font-semibold text-zinc-800 text-xs md:text-2xl">
                  Nous disposons d'un centre de formation en Hygiène 
                  et en Assistance Domestique.
                </h1>
              </div>

              <div className="flex items-center">
                <div
                  className="rounded-full border w-10 h-10 text-xs text-black text-center flex justify-center items-center"
                  style={{ backgroundColor: '#b6d023' }}
                >
                  2
                </div>
                <h1 className="ml-2 font-semibold text-zinc-800 text-xs md:text-2xl">
                  Nous mettons un accent particulier sur l'hygiène 
                  corporelle et vestimentaire de l'ensemble de notre personnel.
                </h1>
              </div>

              <div className="flex items-center">
                <div
                  className="rounded-full border w-10 h-10 text-xs text-black text-center flex justify-center items-center"
                  style={{ backgroundColor: '#b6d023' }}
                >
                  3
                </div>
                <h1 className="ml-2 font-semibold text-zinc-800 text-xs md:text-2xl">
                  Nous évaluons de façon rigoureuse et méticuleuse 
                  les besoins qualitatifs et quantitatifs de nos services.
                </h1>
              </div>
            </div>
          </section>
        </main>

        {/* secnd section */}
        <main className="flex flex-wrap mt-6">
          {/* Main Section */}
          <section className="w-full md:w-3/4 p-4">
            <div className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-1">
              <div className="flex items-center">
                <div
                  className="rounded-full border w-10 h-10 text-xs text-black text-center flex justify-center items-center"
                  style={{ backgroundColor: '#b6d023' }}>4
                </div>
                <h1 className="ml-2 font-semibold text-zinc-800 text-xs md:text-2xl">
                Nous disposons d'une ligne d'appel Service Clientèle 
                et Contentieux ouverte en permanence.
                </h1>
              </div>

              <div className="flex items-center">
                <div
                  className="rounded-full border w-10 h-10 text-xs text-black text-center flex justify-center items-center"
                  style={{ backgroundColor: '#b6d023' }}
                >
                  5
                </div>
                <h1 className="ml-2 font-semibold text-zinc-800 text-xs md:text-2xl">
                Nous disposons d'une documentation scientifique et 
                technique pour toutes nos interventions.
                </h1>
              </div>

              <div className="flex items-center">
                <div
                  className="rounded-full border w-10 h-10 text-xs text-black text-center flex justify-center items-center"
                  style={{ backgroundColor: '#b6d023' }}
                >
                  6
                </div>
                <h1 className="ml-2 font-semibold text-zinc-800 text-xs md:text-2xl">
                  Nous sommes joignables via les réseaux sociaux 
                  Whatsapp, Facebook, Twitter et Instagram.
                </h1>
              </div>
            </div>
          </section>

          {/* right Sidebar */}
          <aside className="w-full md:w-1/4">
            <img
              className="md:h-72 h-60"
              src={blackwoman}
              alt="Logo"
            />
          </aside>

        </main>
      </div>

      {/* Contact */}
      <main className="flex flex-wrap mt-6">
        <div className="bg-blue-200 w-full md:h-72 h-40 flex justify-center items-center">
          <button
            className="text-white w-5/6 md:w-60 h-16 rounded-full text-2xl font-bold hover:bg-lime-600 transition"
            type="submit"
            href="tel:+229 62 31 5172"
            style={{ backgroundColor: '#b6d023' }}
          >
            Contactez-nous
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer/>

    </div>
  );
}
