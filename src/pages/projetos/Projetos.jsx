import ContainerComponent from '../../components/container_projeto/ContainerProjeto';
import './Projetos.css'
import lib from './assets/biblioteca.svg'
import bot from './assets/bot.svg'
import comida from './assets/comida.svg'


export default function ProjetosComponent() {
    const projetos = [
        
    ];
    return (
        <div className="projetos">
            <h2>Projetos</h2>
            <ContainerComponent 
            link="https://github.com/enzosakamoto/MauaLib"
            img={lib}
            titulo="MauaLib"
            desc="Aplicativo que consta com dados nutricionais de diversos alimentos e faz conversão de valores em função da massa"
            tecnologias="Tecnologias: Dart, Flutter"
            />
            <a href="https://github.com/enzosakamoto?tab=repositories" target="_blank" className="projetos-link">
                <h3>Outros projetos</h3>
            </a>
        </div>
    );
}