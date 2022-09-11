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
        <span className="logo" role="img">
          Game Index
        </span>
      </h1>
      <NavLink to="/">Home Page</NavLink>
      <NavLink to="/games">Games</NavLink>
      <NavLink to="/cart">Shopping Cart</NavLink>
    </div>
  );
};

export default Navbar;
// style={linkStyle}
