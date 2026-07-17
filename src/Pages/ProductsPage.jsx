import Produtos from "./Produtos"

function ProductsPage() {
    return <div className="bg-slate-950 flex flex-col items-center justify-start min-h-screen w-full">
        <h1 className="text-4xl text-white font-bold  my-6">Página de Produtos</h1>
        <Produtos />
    </div>
}

export default ProductsPage