export default function HomePage() {
    return (
        <div className="p-6 text-center font-sans">


            <div className="p-5 bg-cyan-950 text-white text-center rounded-md">
                Compre agora seus produtos favoritos e aproveite as melhores ofertas!
            </div>

            <h2 className="text-xl font-bold my-6">Nossos Produtos</h2>


            <div className="max-w-md mx-auto space-y-4">

                {/* Produto 1 */}
                <div className="border border-gray-300 p-4 rounded-md shadow-xs">
                    <h3 className="font-bold text-lg">Fone Bluetooth</h3>
                    <p className="text-gray-600 my-2">R$ 149,90</p>
                    <button className="bg-cyan-950 text-white px-4 py-2 rounded-md hover:bg-cyan-900 cursor-pointer">
                        Comprar
                    </button>
                </div>

                {/* Produto 2 */}
                <div className="border border-gray-300 p-4 rounded-md shadow-xs">
                    <h3 className="font-bold text-lg">Smartwatch</h3>
                    <p className="text-gray-600 my-2">R$ 299,00</p>
                    <button className="bg-cyan-950 text-white px-4 py-2 rounded-md hover:bg-cyan-900 cursor-pointer">
                        Comprar
                    </button>
                </div>

                {/* Produto 3 */}
                <div className="border border-gray-300 p-4 rounded-md shadow-xs">
                    <h3 className="font-bold text-lg">Mochila</h3>
                    <p className="text-gray-600 my-2">R$ 189,90</p>
                    <button className="bg-cyan-950 text-white px-4 py-2 rounded-md hover:bg-cyan-900 cursor-pointer">
                        Comprar
                    </button>
                </div>

            </div>
            <div>
                <button className="mt-5 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-cyan-900 cursor-pointer">
                    Veja mais clicando aqui!
                </button>
            </div>
        </div>
    );
}