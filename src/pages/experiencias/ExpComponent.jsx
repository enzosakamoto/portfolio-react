import { useState } from 'react';
import dev from './assets/dev.svg'
import maua from './assets/logo_maua.svg'

import './Exp.css'

function ClickBotao() {

}

export default function ExpComponent() {
    const [container, SetContainer] = useState(1);
    return(
        <div id="exp" className="experiencias">
            <h2>Experiências</h2>
            <div className='experiencias-container'>
                <div className='experiencias-botoes'>
                    <button 
                        className="container-botao"
                        onClick={() => SetContainer(1)}>
                            <p>Estagiário DIQ-CP IMT</p>
                    </button>
                    <button 
                        className="container-botao"
                        onClick={() => SetContainer(2)}>
                            <p>Monitor - GT</p>
                    </button>
                    <button 
                        className="container-botao"
                        onClick={() => SetContainer(3)}>
                        <p>Dev. Community Mauá</p>
                    </button>
                </div>

                {
                    container === 1 ?
                    <div className="container-textos">
                        <div className="textos">
                            <h3 className="data-experiencia">Março 2023 - Até o momento</h3>
                            <p className="textos-paragrafo">
                                Estagiário do DIQ-CP (Divisão de Inovação e Qualidade do Centro de Pesquisas) do Instituto Mauá de Tecnologia contribuindo para o projeto do Núcleo de Extensão Universitária.
                            </p>
                            <p className="textos-paragrafo">
                                Projeto em desenvolvimento por professores e coordenadores de cursos do IMT.
                            </p>
                            <p className="textos-paragrafo">
                                Estou atuando como auxiliar ao Núcleo de Extensão Universitária, tendo como função a organização de controle operacional de dados, criação de planilhas, formulários etc.
                            </p>
                        </div>
                        <a href="https://maua.br" target="_blank">
                            <img src={maua} alt="Logo do IMT"/>
                        </a>
                    </div>
                    :
                    container === 2 ?
                    <div className="container-textos">
                        <div className="textos">
                            <h3 className="data-experiencia">Setembro 2022 - Março 2023</h3>
                            <p className="textos-paragrafo">
                                Monitor para o Instituto Mauá de Tecnologia, contribuindo para o projeto de Curricularização da Extensão e auxiliando o grupo de trabalho de professores.
                            </p>
                            <p className="textos-paragrafo">
                                Projeto em desenvolvimento por professores e coordenadores de cursos do IMT.
                            </p>
                            <p className="textos-paragrafo">
                                Atuei como auxiliar ao Núcleo de Extensão Universitária, tendo como função a organização de dados, criação de planilhas, criação de novos sistemas de banco e controle de dados e etc.
                            </p>
                        </div>
                        <a href="https://maua.br" target="_blank">
                            <img src={maua} alt="Logo do IMT"/>
                        </a>
                    </div>
                    :
                    <div className="container-textos">
                        <div className="textos">
                            <h3 className="data-experiencia">Março 2022 - Até o momento</h3>
                            <p className="textos-paragrafo">
                                A Dev. Community Mauá é uma entidade de desenvolvimento e criação de soluções computacionais do Instituto Mauá de Tecnologia.
                            </p>
                            <p className="textos-paragrafo">
                                Estou exercendo função de Desenvolvedor Front-End.
                            </p>
                            <p className="textos-paragrafo">
                                Atuei como Desenvolvedor Fullstack do projeto integrador do sistema da biblioteca com o site da instituição, chamado MauáLib, utilizando a linguagem de programação Dart com framework Flutter.
                            </p>
                        </div>
                        <a href="https://www.instagram.com/devcommunitymaua/?hl=pt-br" target="_blank">
                            <img src={dev} alt="Logo da Dev. Community Mauá"/>
                        </a>
                    </div>
                }
            </div>
        </div>
    );
}