import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = ({ isActive }) => ({
    color: isActive ? "white" : "red",
    background: isActive ? "bisque" : "black",
    display: "inline-flex",
    width: "60px",
    padding: "14px",
    margin: "8px, 8px, 8px",
    textDecoration: "none",
  });
  return (
    <div className="navbar">
      <h1>
        <span className="logo" role="img">
          Playlist App
        </span>
      </h1>
      <NavLink to="/" style={linkStyle}>
        Home Page
      </NavLink>
      <NavLink to="/playlist" style={linkStyle}>
        Saved to Playlist
      </NavLink>
      <NavLink to="/library" style={linkStyle}>
        Song Library
      </NavLink>
    </div>
  );
};

export default Navbar;
