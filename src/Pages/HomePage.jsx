import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="p-6 font-sans text-white flex flex-col items-center w-full">

      {/* Mensagem principal */}
      <div className="p-5 bg-cyan-950 text-white text-center rounded-md border border-cyan-800 w-full max-w-lg mb-6">
        Compre agora seus produtos favoritos e aproveite as melhores ofertas!
      </div>

      <h2 className="text-xl font-bold mb-6 text-white text-center">Nossos Produtos</h2>

      {/* Trocamos space-y-4 por space-y-8 para afastar os cards! */}
      <div className="w-full max-w-md space-y-8">

        {/* Produto 1 */}
        <div className="border border-slate-700 bg-slate-800 p-5 rounded-md text-center shadow-md">
          <h3 className="font-bold text-lg text-white">Fone Bluetooth</h3>
          <p className="text-cyan-400 font-bold my-2">R$ 149,90</p>
          <button className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-500 cursor-pointer">
            Comprar
          </button>
        </div>

        {/* Produto 2 */}
        <div className="border border-slate-700 bg-slate-800 p-5 rounded-md text-center shadow-md">
          <h3 className="font-bold text-lg text-white">Smartwatch</h3>
          <p className="text-cyan-400 font-bold my-2">R$ 299,00</p>
          <button className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-500 cursor-pointer">
            Comprar
          </button>
        </div>

        {/* Produto 3 */}
        <div className="border border-slate-700 bg-slate-800 p-5 rounded-md text-center shadow-md">
          <h3 className="font-bold text-lg text-white">Mochila</h3>
          <p className="text-cyan-400 font-bold my-2">R$ 189,90</p>
          <button className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-500 cursor-pointer">
            Comprar
          </button>
        </div>

      </div>

      {/* Botão para redirecionar */}
      <div className="mt-10">
        <Link to="/produtos">
          <button className="bg-red-600 text-white px-5 py-2.5 rounded-md hover:bg-red-700 cursor-pointer font-medium transition-colors">
            Veja mais clicando aqui!
          </button>
        </Link>
      </div>

    </div>
  );
}