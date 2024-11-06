import logo from "../image/logo.png";
import "./NavBar.css";
import React from "react";

function NavBar() {
    return (
        <>
            <nav className="z-50 fixed top-0 left-0 right-0 w-full h-24 mb-12 shadow-md
                 shadow-[rgba(0,0,0,0.35)_0px_5px_15px,rgba(163,230,53,0.5)_5px_10px_15px]"
                 style={{ border: '4px solid #b6d023', backgroundColor: '#fff' }}>
                <div className="flex items-center justify-center h-full px-10">
                    <a href="/">
                        <img className="h-32 mx-auto" src={logo} alt="Logo" />
                    </a>
                    <div className="flex items-center justify-center space-x-8">
                        {/* Home Button */}
                        <a href="/" className="rounded-full bg-transparent flex items-center justify-end hover:text-blue-400 active:text-blue-400 hover:-translate-y-1 transition-transform duration-300">
                        Accueil
                        </a>

                        {/* About Us Button */}
                        <a href="/aboutus" className="rounded-full bg-transparent flex items-center justify-end hover:text-blue-400 active:text-blue-400 hover:-translate-y-1 transition-transform duration-300">
                        A propos
                        </a>

                        {/* Services Button */}
                        <a href="/services" className="rounded-full bg-transparent flex items-center justify-end hover:text-blue-400 active:text-blue-400 hover:-translate-y-1 transition-transform duration-300">
                        Nos Services
                        </a>

                        {/* Partners Button */}
                        <a href="/partners" className="rounded-full bg-transparent flex items-center justify-end hover:text-blue-400 active:text-blue-400 hover:-translate-y-1 transition-transform duration-300">
                        Nos Références
                        </a>

                        {/* Contact Button */}
                        <a href="/contactus" className="rounded-full bg-transparent flex items-center justify-end hover:text-blue-400 active:text-blue-400 hover:-translate-y-1 transition-transform duration-300">
                        Contactez-nous
                        </a>

                        {/* News Button */}
                        <a href="/news" className="rounded-full bg-transparent flex items-center justify-end hover:text-blue-400 active:text-blue-400 hover:-translate-y-1 transition-transform duration-300">
                        Actualités
                        </a>

                        <a
                            className="w-full h-10 lg:w-60 text-black flex items-center justify-center rounded-full"
                            type="submit"
                             href="tel:+229 62 31 5172"
                            style={{ backgroundColor: '#b6d023' }}>
                            +229 62 31 5172
                        </a>
                    </div>
                </div>
            </nav>
            <div className="mt-24">
                {/* Ce div ajoute de l'espacement pour le contenu sous la barre de navigation */}
            </div>
        </>
    );
}

export default NavBar;
