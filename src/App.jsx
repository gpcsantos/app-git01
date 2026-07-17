import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage"; // Importação da sua página de produtos
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between">
      {/* 1. Header */}
      <Header />

      {/* 2. Conteúdo Principal */}
      <main className="flex-1 pt-20 pb-20 flex flex-col items-center w-full">
        {/* Banner 'Projeto BASE' */}
        <div className="p-5 bg-cyan-950 text-gray-200 flex justify-center w-full shadow-md">
          <h1 className="text-2xl font-bold">Projeto BASE</h1>
        </div>

        {/* Gerenciamento de Rotas (Sem o BrowserRouter aqui) */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos" element={<ProductsPage />} />
        </Routes>
      </main>

      {/* 3. Footer */}
      <Footer />
    </div>
  );
}

export default App;