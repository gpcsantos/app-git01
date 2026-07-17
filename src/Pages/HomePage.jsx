import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    // Removi o p-6 do topo para não duplicar o espaçamento do main
    <div className="px-6 py-4 font-sans text-white flex flex-col items-center w-full">

      {/* Bloco principal de ofertas */}
      <div className="p-5 bg-cyan-950 text-white text-center rounded-md border border-cyan-800 w-full max-w-lg shadow-md">
        Compre agora seus produtos favoritos e aproveite as melhores ofertas!
      </div>

      <h2 className="text-xl font-bold my-6 text-white text-center">Nossos Produtos</h2>

      {/* Lista de produtos centralizada */}
      <div className="w-full max-w-md space-y-4">

        {/* Produto 1 */}
        <div className="border border-slate-700 bg-slate-800 p-4 rounded-md shadow-xs text-center">
          <h3 className="font-bold text-lg text-white">Fone Bluetooth</h3>
          <p className="text-cyan-400 font-bold my-2">R$ 149,90</p>
          <button className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-500 cursor-pointer transition-colors text-sm font-medium">
            Comprar
          </button>
        </div>

        {/* Produto 2 */}
        <div className="border border-slate-700 bg-slate-800 p-4 rounded-md shadow-xs text-center">
          <h3 className="font-bold text-lg text-white">Smartwatch</h3>
          <p className="text-cyan-400 font-bold my-2">R$ 299,00</p>
          <button className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-500 cursor-pointer transition-colors text-sm font-medium">
            Comprar
          </button>
        </div>

        {/* Produto 3 */}
        <div className="border border-slate-700 bg-slate-800 p-4 rounded-md shadow-xs text-center">
          <h3 className="font-bold text-lg text-white">Mochila</h3>
          <p className="text-cyan-400 font-bold my-2">R$ 189,90</p>
          <button className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-500 cursor-pointer transition-colors text-sm font-medium">
            Comprar
          </button>
        </div>

      </div>

      {/* Botão adicional com Link */}
      <div className="mt-8 mb-4">
        <Link to="/produtos">
          <button className="bg-red-600 text-white px-5 py-2.5 rounded-md hover:bg-red-700 cursor-pointer font-medium transition-colors shadow-sm">
            Veja mais clicando aqui!
          </button>
        </Link>
      </div>

    </div>
  );
}