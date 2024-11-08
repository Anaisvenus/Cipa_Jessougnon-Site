// import { a} from "react-router-dom";
import logo from "../image/logo.png";
import "./NavBar.css";

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faHouse,
    faUser, 
    faCircleCheck, 
    faHandshake, 
    faAddressBook, 
    faNewspaper } from '@fortawesome/free-solid-svg-icons';



function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  

    return (
        <>
        {/* Header */}
        <header className="md:h-20 text-white flex flex-wrap items-center justify-center px-4 md:px-8" style={{ border: '4px solid #b6d023' }}>
            {/* Logo Section */}
            <a href="/" className="pl-10 flex items-center">
                <img className="h-12 md:h-16" src={logo} alt="Logo" />
            </a>
            
            {/* Navigation Links */}
            <nav className="flex flex-wrap items-start space-x-6 md:space-x-16">
                <div className="relative group">
                    <a href="/" className="text-l md:text-2xl text-[#b6d023] hover:text-blue-400"><FontAwesomeIcon icon={faHouse} /></a>
                    <span className="absolute bottom-8 left-1/2 text-xs md:text-base mt-0 md:mt-0 transform -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Accueil
                    </span>
                </div>

                <div className="relative group">
                    <a href="/aboutus" className="text-lg md:text-2xl text-[#b6d023] hover:text-blue-400"><FontAwesomeIcon icon={faUser} /></a>
                    <span className="absolute bottom-8 left-1/2 text-xs md:text-base mt-0 md:mt-0 transform -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        À propos
                    </span>
                </div>

                <div className="relative group">
                    <a href="/services" className="text-l md:text-2xl text-[#b6d023] hover:text-blue-400"><FontAwesomeIcon icon={faCircleCheck} /></a>
                    <span className="absolute bottom-8 left-1/2 text-xs md:text-base mt-0 md:mt-0 transform -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Services&Produits
                    </span>
                </div>

                <div className="relative group">
                    <a href="/partners" className="text-l md:text-2xl text-[#b6d023] hover:text-blue-400"><FontAwesomeIcon icon={faHandshake} /></a>
                    <span className="absolute bottom-8 left-1/2 text-xs md:text-base mt-0 md:mt-0 transform -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Références
                    </span>
                </div>

                <div className="relative group">
                    <a href="/contactus" className="text-l md:text-2xl text-[#b6d023] hover:text-blue-400"><FontAwesomeIcon icon={faAddressBook} /></a>
                    <span className="absolute bottom-8 left-1/2 text-xs md:text-base mt-0 md:mt-0 transform -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Contact
                    </span>
                </div>

                <div className="relative group">
                    <a href="/news" className="text-l md:text-2xl text-[#b6d023] hover:text-blue-400"><FontAwesomeIcon icon={faNewspaper} /></a>
                    <span className="absolute bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Actualités
                    </span>
                </div>
            </nav>

        </header>

        </>
    );
}

export default NavBar;