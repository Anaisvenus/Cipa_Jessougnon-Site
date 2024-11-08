import { Link } from "react-router-dom";
import logo from "../image/logo.png";

function Footer() {
    return (
        <>
             {/* Footer */}
             <footer className="grid grid-cols-1 md:grid-cols-4 bg-lime-200 w-full p-6 md:p-20 text-black gap-10">
                <div className="text-center md:text-left">
                <img className="h-24 mx-auto md:mx-0" src={logo} alt="Logo" />
                </div>
                <div className="text-center md:text-left">
                <h2 className="md:text-lg text-m font-bold">À propos de nous</h2>
                <p className="md:text-base text-xs">
                    Nous sommes une entreprise de nettoyage professionnelle dédiée à fournir des services
                    de haute qualité avec des pratiques respectueuses de l'environnement.
                </p>
                </div>
                <div className="text-center md:text-left">
                <h2 className="md:text-lg text-m font-bold">Navigation</h2>
                <ul>
                    <li><Link to="/home" className="hover:text-blue-500 md:text-base text-xs">Accueil</Link></li>
                    <li><Link to="/aboutus" className="hover:text-blue-500 md:text-base text-xs">À Propos</Link></li>
                    <li><Link to="/services" className="hover:text-blue-500 md:text-base text-xs">Nos Services</Link></li>
                    <li><Link to="/partners" className="hover:text-blue-500 md:text-base text-xs">Nos Références</Link></li>
                    <li><Link to="/contactus" className="hover:text-blue-500 md:text-base text-xs">Contactez-nous</Link></li>
                </ul>
                </div>
                <div className="text-center md:text-left">
                <h2 className="md:text-lg text-m font-bold">Réseaux sociaux</h2>
                <ul>
                    <li><a href="https://www.facebook.com/CJessougnon?mibextid=LQQJ4d" className="hover:text-blue-500 md:text-base text-xs">Facebook</a></li>
                    <li><a href="tel:+229 62 31 5172" className="hover:text-blue-500 md:text-base text-xs">WhatsApp</a></li>
                    <li><a href="https://www.linkedin.com/company/cipa-jessougnon-sa/" className="hover:text-blue-500 md:text-base text-xs">LinkedIn</a></li>
                    <li><a href="https://www.instagram.com/cjessougnon?igsh=MTVvdDkyYXdyYXl2NQ==" className="hover:text-blue-500 md:text-base text-xs">Instagram</a></li>
                </ul>
                </div>
            </footer>
        </>
    );
}

export default Footer;
