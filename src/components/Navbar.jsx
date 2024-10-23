import { Link} from "react-router-dom";
import logo from "../image/logo.png";

function NavBar() {
    return (
        <>
            <nav className="z-0 relative mb-12"
                x-data="{open:false,menu:false, lokasi:false}"
            >

                <div className="flex w-full h-24 text-black items-center justify-around
                 shadow-[rgba(0,0,0,0.35)_0px_5px_15px,rgba(163,230,53,0.5)_5px_10px_15px]" style={{ border: '4px solid #b6d023' }}>
                    <Link 
                        to="/">
                        <img className="h-32 mx-auto" src={logo} alt="Logo" />
                    </Link>
                    {/* Home Button */}
                    <Link to="/">
                        <button className="rounded-full bg-transparent flex items-center justify-end hover:-translate-y-1 transition-transform duration-300">
                            Accueil
                        </button>
                    </Link>

                    {/* Search Button */}
                    <Link to="/aboutus">
                        <button className="rounded-full bg-transparent flex items-center justify-end hover:-translate-y-1 transition-transform duration-300">
                            A propos
                        </button>
                    </Link>

                    {/* User Profile Button */}
                    <Link to="/services">
                        <button className="rounded-full bg-transparent flex items-center justify-end hover:-translate-y-1 transition-transform duration-300">
                            Nos Services
                        </button>
                    </Link>

                    {/* Partners Button */}
                    <Link to="/partners">
                        <button className="rounded-full bg-transparent flex items-center justify-end hover:-translate-y-1 transition-transform duration-300">
                            Nos Références
                        </button>
                    </Link>

                    {/* News Button */}
                    <Link to="/news">
                        <button className="rounded-full bg-transparent flex items-center justify-end hover:-translate-y-1 transition-transform duration-300">
                            Actualités
                        </button>
                    </Link>

                    {/* Contact Button */}
                    <Link to="/contactus">
                        <button className="rounded-full bg-transparent flex items-center justify-end hover:-translate-y-1 transition-transform duration-300">
                            Contactez-nous
                        </button>
                    </Link>
                </div>
            </nav>
        </>
    );
}

export default NavBar;