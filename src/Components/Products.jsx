function Products({ title }) {
    return <div>
        <div className="bg-slate-600 flex flex-col justify-center items-center w-2xl rounded-2xl">
            <h2 className="text-3xl font-bold text-white my-4">{title}</h2>
            <p className="p-4 text-white text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus dolor ipsa nesciunt beatae inventore vero minima, magnam non perspiciatis vitae asperiores quas incidunt voluptas sint enim dicta adipisci illum quam odio laborum sapiente nobis, dolore voluptates. Nisi, est architecto! Non!</p>
        </div>
    </div>
}

export default Products