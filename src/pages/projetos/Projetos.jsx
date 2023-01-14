import ContainerComponent from '../../components/container_projeto/ContainerProjeto';
import './Projetos.css'
import projetos from './lista_projetos';

export default function ProjetosComponent() {

    return (
        <div id="projects" className="projetos">
            <h2>Projetos</h2>
            <div className="projetos-wrap">
                {
                    projetos.map(projeto => {
                        return(
                            <ContainerComponent 
                            props={projeto}
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