import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar-container">
        <div className="proj-branding">
          <p className="projname">Editr.</p>
          <p className="tagline">The Minimal Text Editr</p>
        </div>
        <div className="nav-btns">
          <a target="_blank" href="https://github.com/AswinAsok/editr">
            <button className="nbtn">
              Source Code <i class="fi fi-brands-github"></i>
            </button>
          </a>
          <a href="https://twitter.com/_aswin_asok_" target="_blank">
            <button className="nbtn">
              Follow Me <i class="fi fi-brands-twitter"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
