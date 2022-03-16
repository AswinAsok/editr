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
          <button className="nbtn">Source Code <i class="fi fi-brands-github"></i></button>
          <button className="nbtn">
            Follow Me <i class="fi fi-brands-twitter"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
