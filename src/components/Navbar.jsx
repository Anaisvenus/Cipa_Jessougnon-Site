import { Link} from "react-router-dom";
import logo from "../image/logo.png";

function NavBar() {
    return (
        <>
            <nav className="z-0 relative mb-12"
                x-data="{open:false,menu:false, lokasi:false}"
            >

                <div className="flex w-full h-24 items-center justify-around shadow-[rgba(0,0,0,0.35)_0px_5px_15px,rgba(163,230,53,0.5)_5px_10px_15px]" style={{ backgroundColor: '#b6d023' }}>
                    <Link 
                        to="/">
                        <img className="h-32 mx-auto" src={logo} alt="Logo" />
                    </Link>
                    {/* Home Button */}
                    <Link to="/">
                        <button className="rounded-full bg-transparent flex items-center justify-end text-white hover:-translate-y-1 transition-transform duration-300">
                            Accueil
                        </button>
                    </Link>

                    {/* Search Button */}
                    <Link to="/aboutus">
                        <button className="rounded-full bg-transparent flex items-center justify-end text-white hover:-translate-y-1 transition-transform duration-300">
                            A propos
                        </button>
                    </Link>

                    {/* User Profile Button */}
                    <Link to="/services">
                        <button className="rounded-full bg-transparent flex items-center justify-end text-white hover:-translate-y-1 transition-transform duration-300">
                            Nos Services
                        </button>
                    </Link>

                    {/* Shopping Cart Button */}
                    <Link to="/partners">
                        <button className="rounded-full bg-transparent flex items-center justify-end text-white hover:-translate-y-1 transition-transform duration-300">
                            Nos Références
                        </button>
                    </Link>

                    {/* Contact Button */}
                    <Link to="/contactus">
                        <button className="rounded-full bg-transparent flex items-center justify-end text-white hover:-translate-y-1 transition-transform duration-300">
                            Contactez-nous
                        </button>
                    </Link>
                </div>

                {/* <div className="flex justify-center items-center space-x-10">
        
                    <Link 
                        to="/">
                        <img className="h-32 mx-auto" src={logo} alt="Logo" />
                    </Link>

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

                </div> */}
            </nav>
        </>
    );
}

export default NavBar;