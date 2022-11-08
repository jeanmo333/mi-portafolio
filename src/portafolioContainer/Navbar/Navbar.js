
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);

  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
 
  return (
    <nav className="navbar-items fixed-top">
      <a className="navbar-logo"  target="_blank" href='https://github.com/jeanmo333'>
      <i className="fa fa-github"></i>
      </a>

      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/" className="nav-links" onClick={closeMobileMenu}>
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/about-mi"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Sobre mi
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Contacto
          </Link>
        </li>

        <li>
          <Link
            to="/projects"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Proyectos
          </Link>
        </li>
      </ul>
    </nav>
  );
  //}
}

export default Navbar;
