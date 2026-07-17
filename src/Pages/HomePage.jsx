import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="p-6 font-sans text-white flex flex-col items-center w-full">

      {/* Mensagem principal - texto maior e mais claro */}
      <div className="p-6 bg-cyan-950 text-lg font-medium text-white text-center rounded-md border border-cyan-800 w-full max-w-lg mb-8 shadow-sm">
        Compre agora seus produtos favoritos e aproveite as melhores ofertas!
      </div>

      <h2 className="text-2xl font-bold mb-8 text-white text-center">Nossos Produtos</h2>

      <div className="w-full max-w-md space-y-10">

        {/* Produto 1 */}
        <div className="border border-slate-600 bg-slate-800 p-6 rounded-lg text-center shadow-lg">
          <h3 className="font-bold text-2xl text-white">Fone Bluetooth</h3>
          <p className="text-cyan-300 text-xl font-bold my-3">R$ 149,90</p>
          <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-cyan-500 cursor-pointer w-full">
            Comprar
          </button>
        </div>

        {/* Produto 2 */}
        <div className="border border-slate-600 bg-slate-800 p-6 rounded-lg text-center shadow-lg">
          <h3 className="font-bold text-2xl text-white">Smartwatch</h3>
          <p className="text-cyan-300 text-xl font-bold my-3">R$ 299,00</p>
          <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-cyan-500 cursor-pointer w-full">
            Comprar
          </button>
        </div>

        {/* Produto 3 */}
        <div className="border border-slate-600 bg-slate-800 p-6 rounded-lg text-center shadow-lg">
          <h3 className="font-bold text-2xl text-white">Mochila</h3>
          <p className="text-cyan-300 text-xl font-bold my-3">R$ 189,90</p>
          <button className="bg-cyan-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-cyan-500 cursor-pointer w-full">
            Comprar
          </button>
        </div>

      </div>

      {/* Botão de ação com maior destaque */}
      <div className="mt-12">
        <Link to="/produtos">
          <button className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 cursor-pointer font-bold text-lg transition-colors">
            Veja mais clicando aqui!
          </button>
        </Link>
      </div>

    </div>
  );
}