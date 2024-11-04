import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Componentes/Header";
import AcercaDe from "./Componentes/AcercaDe";
import Blog from "./Componentes/Blog";
import Inicio from "./Componentes/Inicio";
import Styled, { styled } from "styled-components";
import Post from "./Componentes/Post";

function App() {
  return (
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/acerca-de" element={<AcercaDe />} />
          </Routes>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
}

const ContenedorPrincipal = styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;
const Main = styled.main`
  background: #fff;
  color: black;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;
export default App;
