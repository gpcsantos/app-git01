import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-gray-950 text-gray-100 fixed top-0 left-0 shadow-lg z-50">
      <div className="w-full py-4 px-4 flex items-center justify-between relative">
        
        {/* Esquerda: Botão do menu mobile */}
        <div className="md:hidden z-10">
          <button id="menu-toggle" className="cursor-pointer">
            <i className="bi bi-list text-3xl"></i>
          </button>
        </div>

        {/* Centro: Título perfeitamente centralizado na barra */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h1 className="text-2xl font-bold pointer-events-auto">
            Header
          </h1>
        </div>

        {/* Direita: Elemento vazio para equilibrar a visualização */}
        <div className="w-8"></div>

      </div>
    </header>
  );
}

export default Header;