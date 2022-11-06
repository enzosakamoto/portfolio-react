import './Botao.css'

export default function Botao(props) {
    return(
        <a href={props.link} target="_blank">
            <button className="glow-on-hover">
                <div className="conteudo">
                    <img src={props.logo} alt="Logo" className="imagem-botao" />
                    <p className="texto-botao">{props.texto}</p>
                </div>
            </button>
        </a>
    );
}