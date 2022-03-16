import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="proj-branding">
          <p className="projname">Text.ly</p>
          <p className="tagline">The Minimal Text Editor</p>
        </div>
        <div className="nav-btns">
          <button className="nbtn">Source Code</button>
          <button className="nbtn">Follow Me</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
