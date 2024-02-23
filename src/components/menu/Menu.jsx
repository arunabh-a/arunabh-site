import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import "./styles.css";
import About from '../../containers/About'
import Projects from '../../containers/Projects'
import Contact from '../../containers/Contact'
import Hero from "../../containers/Hero";


const links = ["home","about", "projects", "contact"];

const Layout = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const isOpen = isMenuOpen ? "open" : "";
    const onClick = (href) => {
        toggleMenu();
        navigate(href);
        setIsBurgerOpen(!isBurgerOpen);
    };

    const burgerSwitch = event => {
        setIsBurgerOpen(!isBurgerOpen);
        // event.target.classList.toggle('is-active');
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
                    <a
                        key={link}
                        className={isMenuOpen ? "appear" : ""}
                        style={{ animationDelay: `0.${index + 1}s` }}
                        onClick={() => onClick(`/${link}`)}>{link}</a>
                ))}
            </nav>
        </div>
    </>
    );
};

export const Menu = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<Layout />}>
                    <Route path="home" element={<Hero />} />
                    <Route path="about" element={<About />} />
                    <Route path="projects" element={<Projects />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Menu;
