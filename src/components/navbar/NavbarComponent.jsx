import React from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';

import './Navbar.css';

export default function NavbarComponent() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    const hideNavbar = () => {
        navRef.current.classList.remove("responsive_nav");
    }

    return (
        <header>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>
                <p className="texto-logo">ES</p>
            </Link>
            <nav ref={navRef} className="items">
                <Link onClick={hideNavbar} activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} className="texto-items">
                    Sobre
                </Link>
                <Link onClick={hideNavbar} activeClass="active" to="exp" spy={true} smooth={true} offset={-150} duration={500} className="texto-items">
                    Experiências
                </Link>
                <Link onClick={hideNavbar} activeClass="active" to="projects" spy={true} smooth={true} offset={-73} duration={500} className="texto-items">
                    Projetos
                </Link>
                <Link onClick={hideNavbar} activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} className="texto-items">
                    Contato
                </Link>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}