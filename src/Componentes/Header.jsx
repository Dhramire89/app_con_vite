import React from "react";
import { NavLink } from "react-router-dom";
import Styled, { styled } from "styled-components";
const Header = () => {
  return (
    <ContenedorHeader>
      <Titulo>Mi blog personal</Titulo>
      <Menu>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/acerca-de">Acerca de</NavLink>
      </Menu>
    </ContenedorHeader>
  );
};

const ContenedorHeader = styled.header`
  text-aling: center;
  margin-bottom: 40px;
`;

const Titulo = styled.h2`
  margin-bottom: 10px;
  font-size: 26px;
  text-transform: uppercase;
`;

const Menu = styled.nav`
  a {
    text-decoration: none;
    color: #165168;
    margin: 0 10px;
    font-size: 22px;
  }

  a:hover {
    color: #191689;
  }
  a.active {
    border-bottom: 2px solid #165168;
    padding-bottom: 3px;
  }
`;

export default Header;
