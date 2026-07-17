import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./Components/HomePage"
import "./index.css";
function App() {
  return (
    <div className="home">
      <h1>Home</h1>
    </div>
  );
}

export default App;
    <>
      <Header />
      <div className="p-5 bg-cyan-950 text-gray-200 flex justify-center ">
        <h1 className="text-2xl font-bold">Projeto BASE</h1>
      </div>
      <Footer />
      <HomePage />
    </>
  )
}
