import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <h1>Mi blog personal</h1>
      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/acerca-de">Acerca de</NavLink>
      </nav>
    </div>
  );
};

export default Header;
