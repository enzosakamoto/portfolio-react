import avatar from './assets/me.svg'
import nuvem from './assets/nuvem.svg'
import linkedin from './assets/linkedin.svg'
import github from './assets/github.svg'

import './Sobre.css'
import Botao from '../../components/botao/Botao'

export default function SobreComponent() {

    const botoes = [
        {
            link: "https://www.linkedin.com/in/enzosakamoto/",
            logo: linkedin,
            texto: "LinkedIn"
        },
        {
            link: "https://github.com/enzosakamoto",
            logo: github,
            texto: "Github"
        },
        {
            link: "./assets/EnzoSakamoto_CV.pdf",
            logo: nuvem,
            texto: "Currículo"
        },
    ];

    return(
        <div id="about" className="perfil">
            <img src={avatar} alt="Uma foto minha" className="foto-avatar"/>
            <div className="conteudo-escrito">
                <h2 className="titulo">Sobre mim</h2>
                <p className="paragrafo">
                    Me chamo Enzo Yuji Sakamoto, tenho 20 anos e sou de São Paulo, SP.
                </p>
                <p className="paragrafo">
                    Sou entusiasta e amante da programação e informática. Desde pequeno sempre soube que seguiria minha carreira profissional trabalhando com tecnologias, procurando sempre me manter antenado sobre.
                </p>
                <p className="paragrafo">
                    Estudante de Engenharia de Computação no Instituto Mauá de Tecnologia. Estou focado em aprender mais precisamente Python, JavaScript (ReactJS), CSS, HTML, além de outras tecnologias de desenvolvimento.
                </p>
                <p className="paragrafo">
                    Me considero competente, ágil e extremamente bem humorado!
                </p>
                <p className="paragrafo">
                    Atualmente, estou a procura de uma vaga de estágio como Desenvolvedor Júnior.
                </p>
                <div className="botoes">
                    {
                        botoes.map(botao => {
                            return(
                                <Botao 
                                    link = {botao.link}
                                    logo = {botao.logo}
                                    texto = {botao.texto}
                                />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}