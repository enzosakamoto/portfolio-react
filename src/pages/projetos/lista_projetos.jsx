import lib from './assets/biblioteca.svg'
import bot from './assets/bot.svg'
import comida from './assets/comida.svg'
import hash from './assets/hash.svg'
import cep from './assets/cep.svg'
import soon from './assets/soon.svg'

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
        link: "https://github.com/enzosakamoto/jogo-da-velha", 
        img: hash, 
        titulo: "Jogo da velha", 
        desc: "O clássico jogo da velha feito em ReactJS",
        tecnologias: "Tecnologias: HTML, CSS e Javascript (ReactJS)"
    },
    {
        link: "https://github.com/enzosakamoto/bot-zap-2.0", 
        img: bot, 
        titulo: "Bot do WhatsApp", 
        desc: "Programa que envia mensagens de forma automatizada no WhatsApp Web",
        tecnologias: "Tecnologias: Python"
    },
    {
        link: "https://github.com/enzosakamoto/site-cep", 
        img: cep, 
        titulo: "Site CEP", 
        desc: "Site que utiliza da API do ViaCEP para fazer requisição de dados da localidade digitada.",
        tecnologias: "Tecnologias: HTML, CSS e Javascript (ReactJS)"
    },
    {
        link: "/", 
        img: soon, 
        titulo: "Em breve", 
        desc: "",
        tecnologias: ""
    }
];

export default projetos;