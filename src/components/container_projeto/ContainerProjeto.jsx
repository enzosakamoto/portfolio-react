import './ContainerProjeto.css'

export default function ContainerComponent({props}) {
    return(
        <a href={props.link} target="_blank">
            <div className="container-wrap">
                <img src={props.img} alt="Imagem do projeto"/>
                <div className="textos-wrap">
                    <h3 className="titulo-projeto">
                        {props.titulo}
                    </h3>
                    <p className="paragrafo-wrap">
                        {props.desc}
                    </p>
                    <p className="paragrafo-wrap">
                        {props.tecnologias}
                    </p>
                </div>
            </div>
        </a>
    );
}