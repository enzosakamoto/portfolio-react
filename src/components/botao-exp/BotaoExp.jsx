import './BotaoExp.css'

export default function BotaoExp(props) {
    return(
        <div className="container">
            <p className="texto">{props.texto}</p>
        </div>
    );
}