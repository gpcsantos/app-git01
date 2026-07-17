
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="w-full bg-gray-950 text-gray-100 fixed top-0 shadow-lg">
            {/* Usamos grid com 3 colunas e alinhamento central */}
            <div className="w-full xl:w-7xl py-4 mx-auto grid grid-cols-3 items-center px-4">
                
                {/* Coluna 1: Botão do menu (esquerda) */}
                <div className="md:hidden justify-self-start">
                    <button id="menu-toggle">
                        <i className="bi bi-list text-3xl"></i>
                    </button>
                </div>

                {/* Coluna 2: Título centralizado (ocupando a coluna do meio) */}
                <div className="text-2xl font-bold col-start-2 justify-self-center text-center">
                    Header
                </div>

                {/* Coluna 3: Espaço reservado para manter o equilíbrio visual */}
                <div className="col-start-3"></div>

            </div>
        </header>
    );
}

export default Header;