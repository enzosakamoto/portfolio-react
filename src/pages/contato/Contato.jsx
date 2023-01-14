import email from './assets/email.svg'
import linkedin from './assets/linkedin.svg'
import telefone from './assets/telefone.svg'

import './Contato.css'

export default function ContatoComponent() {
    return(
        <div id="contact" className="contato">
            <h2>Contato</h2>
            <p className="texto-contato">
                Entre em contato comigo!
            </p>
            <div className="informacoes">
                <div className="email-contato">
                        <img src={email} alt="Logo Email"/>
                        <p className="texto-contato">
                            enzo.sak@hotmail.com
                        </p>
                </div>
                <div className="email-contato">
                        <img src={telefone} className="logo-telefone" alt="Logo telefone"/>
                        <p className="texto-contato">
                            (11) 95320-2088
                        </p>
                </div>
                <a href="https://www.linkedin.com/in/enzosakamoto/" className='linkedin-contato' target="_blank">
                    <img src={linkedin} alt="Logo LinkedIn"/>
                    <p className="texto-contato">
                        Meu LinkedIn
                    </p>
                </a>
            </div>
        </div>
    );
}