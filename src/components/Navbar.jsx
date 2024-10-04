import { Link} from "react-router-dom";
import logo from "../image/logo.png";

function NavBar() {
    return (
        <>
            <nav className="z-0 relative mb-12"
                x-data="{open:false,menu:false, lokasi:false}"
            >
                <div className="flex justify-center items-center space-x-10">
        
                    {/* Logo positioned within the grid */}
                    <Link 
                        to="/">
                        <img className="h-32 mx-auto" src={logo} alt="Logo" />
                    </Link>

                    {/* Grid items with centered text */}
                    <Link 
                    to="/home" className="text-center font-medium hover:font-bold transition-all min-w-0">
                    Accueil
                    </Link>

                    <Link 
                    to="/aboutus" className="text-center font-medium hover:font-bold transition-all min-w-0">
                    A propos
                    </Link>

                    <Link 
                    to="/services" className="text-center font-medium hover:font-bold transition-all min-w-0">
                    Nos Services
                    </Link>

                    <Link 
                    to="/partners" className="text-center font-medium hover:font-bold transition-all min-w-0">
                    Nos Références
                    </Link>

                    <Link 
                    to="/contactus" className="text-center font-medium hover:font-bold transition-all min-w-0">
                    Contactez-nous
                    </Link>

                </div>
            </nav>
        </>
    );
}

export default NavBar;