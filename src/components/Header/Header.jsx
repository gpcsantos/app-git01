
import { Link } from "react-router-dom";
function Header() {
    return (
        <header className="w-full bg-gray-950 text-gray-100 fixed top-0 shadow-lg">
            <div className="w-full xl:w-7xl py-4 mx-auto flex items-center justify-around">
                {/* <!-- icone --> */}

                <div className="md:hidden">
                    <button id="menu-toggle">
                        <i className="bi bi-list text-3xl"></i>
                    </button>
                </div>

                <div className="text-2xl font-bold">Header</div>


            </div>
        </header>

    );
}
export default Header;