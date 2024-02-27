import React, { useState } from "react";
import { Link } from "react-scroll";
import "./styles.css";
import About from '../../containers/About'
import Projects from '../../containers/Projects'
import Contact from '../../containers/Contact'
import Hero from "../../containers/Hero";

const links = ["home", "about", "projects", "contact"];

export const Menu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const isOpen = isMenuOpen ? "open" : "";    
    const burgerSwitch = event => {
        setIsBurgerOpen(!isBurgerOpen);
    }
    const handleClick = () => {
        toggleMenu();
        burgerSwitch();
    }

  return (
    <>
      <button className={isBurgerOpen ? `hamburger hamburger--arrowalt-r is-active` : `hamburger hamburger--arrowalt-r ${isOpen}`} onClick={function() { toggleMenu(); burgerSwitch(); }}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div className={`background ${isOpen}`}></div>
      <div className={`menu ${isOpen}`}>
        <nav>
          {links.map((link, index) => (
            <Link
              key={link}
              to={link}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className={isMenuOpen ? "appear" : ""}
              style={{ animationDelay: `0.${index + 1}s` }}
              onClick={handleClick}>
              {link}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Menu;
