import { Link} from "react-router-dom";
// import logo from "../image/yinEtYang.png";

function NavBar() {
    return (
        <>
            <nav className="z-0 relative mb-12"
                x-data="{open:false,menu:false, lokasi:false}"
            >
                {/* <div className="flex bg-white mb-4 text-end">
                        <div>
                            <img
                                className="h-20"
                                src={logo}
                                alt="Logo"
                            />
                            <h1 className="text-base">𝓛𝓮 𝓳𝓪𝓻𝓭𝓲𝓷 𝓭𝓮𝓼 𝓶𝓸𝓽𝓼</h1>
                        </div>
                        <ul className="flex flex-nowrap">
                        <Link
                                to="/"
                                className="ml-10 mt-6">
                                <span className="">𝓐𝓬𝓬𝓾𝓮𝓲𝓵</span>
                            </Link>
                            <Link
                                to="/user"
                                className="ml-10 mt-6">
                                <span className="">𝓤𝓽𝓲𝓵𝓲𝓼𝓪𝓽𝓮𝓾𝓻</span>
                            </Link>
                            <Link
                                to="/menu"
                                className="ml-10 mt-6">
                                <span className="">𝓜𝓮𝓷𝓾</span>
                            </Link>
                            <Link
                                to="/apropos"
                                className="ml-10 mt-6">
                                <span className="">𝓐 𝓹𝓻𝓸𝓹𝓸𝓼</span>
                            </Link>
                        </ul>
                        <ul className="flex">
                            <Link
                                to="/login"
                                className="absolute top-0 right-0 h-48 w-48 mt-6">
                                <span className="">𝓢𝓮 𝓬𝓸𝓷𝓷𝓮𝓬𝓽𝓮𝓻</span>
                            </Link>
                        </ul>
                </div> */}
            </nav>
        </>
    );
}

export default NavBar;