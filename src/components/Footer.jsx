import { Link } from "react-router-dom";
import logo from "../image/logo.png";

function Footer() {
    return (
        <footer className="bg-zinc-500 w-full h-auto p-10">
            <div className="grid grid-cols-3 gap-10">
                {/* Company Info */}
                <div className="text-white">
                    <h1 className="font-bold mb-4">À propos de nous</h1>
                    <p>
                        Nous sommes une entreprise de nettoyage
                        professionnelle dédiée à fournir des services
                        de nettoyage de haute qualité. Avec une
                        équipe qualifiée, des pratiques
                        respectueuses de l'environnement et un
                        engagement envers la satisfaction de nos
                        clients, nous assurons des espaces
                        impeccables et hygiéniques. Votre partenaire
                        de confiance pour un environnement plus
                        propre et plus sain.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="text-white">
                    <h1 className="font-bold mb-4">Navigation</h1>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/home" className="hover:underline">Accueil</Link>
                        </li>
                        <li>
                            <Link to="/aboutus" className="hover:underline">A Propos</Link>
                        </li>
                        <li>
                            <Link to="/services" className="hover:underline">Nos Services</Link>
                        </li>
                        <li>
                            <Link to="/partners" className="hover:underline">Nos Références</Link>
                        </li>
                        <li>
                            <Link to="/contactus" className="hover:underline">Contactez-nous</Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div className="text-white">
                    <h1 className="font-bold mb-4">Réseaux sociaux</h1>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/facebook" className="hover:underline">Facebook</Link>
                        </li>
                        <li>
                            <Link to="/whatsapp" className="hover:underline">Whatsapp</Link>
                        </li>
                        <li>
                            <Link to="/linkedin" className="hover:underline">LinkedIn</Link>
                        </li>
                        <li>
                            <Link to="/instagram" className="hover:underline">Instagram</Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Optional Logo Section */}
            <div className="mt-10 flex justify-center">
                <img src={logo} alt="Company Logo" className="h-16" />
            </div>
        </footer>
    );
}

export default Footer;
