import React from 'react';
import {Link} from 'react-scroll'
import ES from './assets/ES.svg'

import './Navbar.css';

export default function NavbarComponent() {
    return (
        <header>
            <div>
                <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>
                    <img className="texto-logo" src={ES} alt="Logo ES"/>
                </Link>
            </div>
            <div className="items">
                <Link activeClass="active" to="about" spy={true} smooth={true} offset={0} duration={500} className="texto-items">
                    Sobre
                </Link>
                <Link activeClass="active" to="exp" spy={true} smooth={true} offset={-200} duration={500} className="texto-items">
                    Experiências
                </Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-73} duration={500} className="texto-items">
                    Projetos
                </Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500} className="texto-items">
                    Contato
                </Link>
            </div>
        </header>
    );
}