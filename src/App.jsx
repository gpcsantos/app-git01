import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./Pages/HomePage";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between">
      {/* 1. Header Fixo no Topo */}
      <Header />

      {/* 2. Conteúdo Central (com espaçamento pt-20 e pb-20 para não ficar debaixo do Header/Footer) */}
      <main className="flex-1 pt-20 pb-20 flex flex-col items-center w-full">
        
        {/* Banner 'Projeto BASE' */}
        <div className="p-5 bg-cyan-950 text-gray-200 flex justify-center w-full shadow-md">
          <h1 className="text-2xl font-bold">Projeto BASE</h1>
        </div>

        {/* Página Principal dos Produtos */}
        <HomePage />
      </main>

      {/* 3. Footer Fixo no Fundo */}
      <Footer />
    </div>
  );
}

export default App;