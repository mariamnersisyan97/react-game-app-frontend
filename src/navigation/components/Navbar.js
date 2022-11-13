import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <h1></h1>
      <NavLink to="/">🏠</NavLink>
      <NavLink to="/library">🎮</NavLink>
      <NavLink to="/login">👤</NavLink>
      <NavLink to="/genre">G</NavLink>
    </div>
  );
};

export default Navbar;
