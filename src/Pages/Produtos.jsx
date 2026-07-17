import { useEffect, useState } from "react";

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function carregarProdutos() {
      try {
        const response = await fetch("/produtos.json");
        if (!response.ok) {
          throw new Error(`Erro ao carregar produtos: ${response.status}`);
        }
        const data = await response.json();
        setProdutos(data.slice(0, 2));
      } catch (error) {
        setErro(error.message);
      } finally {
        setCarregando(false);
      }
    }

    carregarProdutos();
  }, []);

  if (carregando) {
    return <p className="p-6 text-center">Carregando produtos...</p>;
  }

  if (erro) {
    return <p className="p-6 text-center text-red-500">{erro}</p>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        {produtos.map((produto) => (
          <article
            key={produto.id}
            className="rounded-xl border border-slate-600 bg-slate-800 p-4 shadow-sm hover:shadow-lg transition-shadow"
          >
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="w-full rounded-lg object-cover h-44"
            />
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-white">{produto.nome}</h2>
              <p className="text-sm text-slate-300 mt-2">{produto.descricao}</p>
              <p className="mt-4 text-lg font-bold text-cyan-300">
                R$ {produto.preco.toFixed(2).replace('.', ',')}
              </p>
              <span className="inline-block mt-2 rounded-full bg-cyan-100 px-3 py-1 text-sm text-cyan-800">
                {produto.categoria}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Produtos;