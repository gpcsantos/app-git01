import Products from "../Components/Products"

function ProductsPage() {
    return <div className="bg-slate-950 flex flex-col items-center justify-start min-h-screen">
        <h1 className="text-4xl text-white font-bold  my-6">Página de Produtos</h1>
        <div className="flex gap-4 mb-4">
            <Products
                title={"Produto 01"}
            />
            <Products
                title={"Produto 02"} />
        </div>
    </div>
}

export default ProductsPage