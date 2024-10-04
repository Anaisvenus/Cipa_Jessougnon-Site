import { Link} from "react-router-dom";

function Sidebar() {
    return (
        <>
            <aside className="flex-none w-36 m-5 " aria-label="Sidebar">
                <div className="bg-gray-300 rounded-lg block h-screen">

                    {/* LandingPage */}
                    <ul>
                        <Link
                            to="/"
                            className="flex items-center p-2 text-base font-semibold text-2xl flex pt-6 rounded-lg justify-center hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <span className="">User</span>
                        </Link>
                    </ul>

                    {/* MENU */}
                    <ul>
                        <Link
                            to="/menu"
                            className="flex items-center p-2 text-base font-semibold text-2xl flex pt-20 rounded-lg justify-center hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <span className="">Menu</span>
                        </Link>
                    </ul>

                    {/* A PROPOS */}
                    <ul>
                        <Link
                            to="/a-propos"
                            className="flex items-center p-2 text-base font-semibold text-2xl flex pt-20 rounded-lg justify-center hover:transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <span className="">A propos</span>
                        </Link>
                    </ul>

                </div>
            </aside>
        </>
    );
}

export default Sidebar;