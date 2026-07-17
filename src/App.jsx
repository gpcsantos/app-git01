import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage"; // Import da página de produtos
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between">
        {/* Header Fixo no Topo */}
        <Header />

        {/* Conteúdo Central */}
        <main className="flex-1 pt-20 pb-20 flex flex-col items-center w-full">
          {/* Banner 'Projeto BASE' */}
          <div className="p-5 bg-cyan-950 text-gray-200 flex justify-center w-full shadow-md">
            <h1 className="text-2xl font-bold">Projeto BASE</h1>
          </div>

          {/* Gerenciamento das Rotas do Projeto */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/produtos" element={<ProductsPage />} />
          </Routes>
        </main>

        {/* Footer no Fundo */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;