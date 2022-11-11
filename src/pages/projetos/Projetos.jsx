import ContainerComponent from '../../components/container_projeto/ContainerProjeto';
import './Projetos.css'
import lib from './assets/biblioteca.svg'
import bot from './assets/bot.svg'
import comida from './assets/comida.svg'


export default function ProjetosComponent() {

    const projetos = [
        {  
            link: "https://github.com/enzosakamoto/MauaLib", 
            img: lib, 
            titulo: "MauáLib", 
            desc: "Projeto que integra o sistema da biblioteca com o site do IMT",
            tecnologias: "Tecnologias: Dart, Flutter"
        },
        {
            link: "https://github.com/enzosakamoto/nutri-app", 
            img: comida, 
            titulo: "NutriApp", 
            desc: "Aplicativo que consta com dados nutricionais de diversos alimentos e faz conversão de valores em função da massa",
            tecnologias: "Tecnologias: Dart, Flutter"
        },
        {
            link: "https://github.com/enzosakamoto/bot-zap-2.0", 
            img: bot, 
            titulo: "Bot do WhatsApp", 
            desc: "Programa que envia mensagens de forma automatizada no WhatsApp Web",
            tecnologias: "Tecnologias: Python"
        }
    ];

    return (
        <div className="projetos">
            <h2>Projetos</h2>
            <div className="projetos-wrap">
                {
                    projetos.map(projeto => {
                        return(
                            <ContainerComponent 
                            link={projeto.link}
                            img={projeto.img}
                            titulo={projeto.titulo}
                            desc={projeto.desc}
                            tecnologias={projeto.tecnologias}
                            />
                        );
                    })
                }
            </div>
            <a href="https://github.com/enzosakamoto?tab=repositories" target="_blank" className="projetos-link">
                <h3>Outros projetos</h3>
            </a>
        </div>
    );
}