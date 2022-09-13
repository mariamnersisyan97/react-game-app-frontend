import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // const linkStyle = ({ isActive }) => ({
  //   color: isActive ? "white" : "red",
  //   background: isActive ? "bisque" : "black",
  //   display: "inline-flex",
  //   width: "60px",
  //   padding: "14px",
  //   margin: "8px, 8px, 8px",
  //   textDecoration: "none",
  // });
  return (
    <div className="navbar">
      <h1>
        {/* <span className="logo" role="img">
          Game Index
        </span> */}
      </h1>
      <NavLink to="/">🏠</NavLink>
      <NavLink to="/library">🎮</NavLink>
      <NavLink to="/form">📝</NavLink>
      <NavLink to="/cart">🛒</NavLink>
      <NavLink to="/login">👤</NavLink>
    </div>
  );
};

export default Navbar;
// style={linkStyle}
