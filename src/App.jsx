import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Componentes/Header";
import AcercaDe from "./Componentes/AcercaDe";
import Blog from "./Componentes/Blog";
import Inicio from "./Componentes/Inicio";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/acerca-de" element={<AcercaDe />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
