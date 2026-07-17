import { Link } from "react-router-dom";
import ProductsPage from "../../Pages/ProductsPage";

function Header() {
  return (
    <header className="w-full bg-gray-950 text-gray-100 py-4 px-6 shadow-lg flex justify-between items-center">
      {/* Esquerda: Botão Menu (Mobile) */}
      <div className="md:hidden">
        <button id="menu-toggle" className="cursor-pointer">
          <i className="bi bi-list text-3xl"></i>
        </button>
      </div>

      {/* Centro: Título */}
      <h1 className="text-2xl font-bold text-center flex-1">
        Header
      </h1>

      {/* Espaço para balancear o alinhamento */}
      <div className="w-8 md:hidden"></div>
    </header>
  );
}

export default Header;