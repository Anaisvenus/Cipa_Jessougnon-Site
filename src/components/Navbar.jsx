// import { a} from "react-router-dom";
import logo from "../image/logo.png";
import "./NavBar.css";

import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";


function NavBar() {
    const [options, setOptions] = useState(false);
    const optionsRef = useRef(null);

    const handleClickOutside = (event) => {
        // Vérifiez si le clic se produit à l'extérieur de l'élément référencé
        if (optionsRef.current && !optionsRef.current.contains(event.target)) {
            console.log('Click detected outside, closing options'); // Ajout d'un message pour le débogage
            setOptions(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <>
        {/* Header */}
        <header className="md:h-20 bg-[#b6d023] text-white flex flex-wrap items-center justify-between px-4 md:px-8" style={{ border: '4px solid #b6d023' }}>
            {/* Logo Section */}
            <a href="/" className="flex items-center">
                <img className="h-12 md:h-16" src={logo} alt="Logo" />
            </a>

            {/* Navigation Links */}
            <nav className="flex flex-wrap items-center space-x-2 md:space-x-6 text-xs md:text-base mt-0 md:mt-0">
                <a href="/" className="hover:text-gray-300">Accueil</a>
                <a href="/aboutus" className="hover:text-gray-300">À propos</a>
                <a href="/services" className="hover:text-gray-300">Nos Services & Produits</a>
                <a href="/partners" className="hover:text-gray-300">Nos Références</a>
                <a href="/contactus" className="hover:text-gray-300">Contactez-nous</a>
                <a href="/news" className="hover:text-gray-300">Actualités</a>
            </nav>
        </header>

        </>
    );
}

export default NavBar;