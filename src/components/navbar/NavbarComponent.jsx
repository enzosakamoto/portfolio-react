import './Navbar.css';

export default function NavbarComponent() {
    return (
        <header>
            <nav className="logo">
                <a href="#home" className="texto-logo">ES</a>
            </nav>
            <nav className="items">
                <a href="#perfil" className="texto-items">Sobre</a>
                <a href="#experiencias" className="texto-items">Experiências</a>
                <a href="#projetos" className="texto-items">Projetos</a>
                <a href="#contato" className="texto-items">Contatos</a>
            </nav>
        </header>
    );
}