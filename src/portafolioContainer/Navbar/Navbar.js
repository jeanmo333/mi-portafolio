
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);

  
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
 
  return (
    <nav className="navbar-items fixed-top">
    <a
    
     className="navbar-logo"  target="_blank" rel="noreferrer" href='https://github.com/jeanmo333'>
      <motion.i
        initial={{
        x: -500,
        opacity:0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity:1,
        scale: 1
      }}
      transition={{
        duration: 1.5
      }}
       className="fa fa-github"></motion.i>
      </a>

    

      <div className="menu-icon" onClick={handleClick}>
        <motion.i
            initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
          }}
          animate={{
            x: 0,
            opacity:1,
            scale: 1
          }}
          transition={{
            duration: 1.5
          }}
         className={click ? "fas fa-times" : "fas fa-bars"}></motion.i>
      </div>

      <ul
       className={click ? "nav-menu active" : "nav-menu"}>
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
            to="/hability"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Habilidades
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
  
}

export default Navbar;
