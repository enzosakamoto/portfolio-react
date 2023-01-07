import './Home.css'
import logo from './assets/programador.svg'
import Typewriter from 'typewriter-effect'
import React from "react";
import { gsap } from "gsap";

export default function HomeComponent() {
    return (
        <div id="home" className="home">
            <div className="titulos">
                <h2>Bem-vindo! Eu sou</h2>
                <h1>
                    <Typewriter
                        options={{
                            loop: true
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString("ENZO SAKAMOTO")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("DESENVOLVEDOR JÚNIOR")
                            .pauseFor(2000)
                            .deleteAll()
                            .typeString("DESENVOLVEDOR FRONT-END")
                            .pauseFor(2000)
                            .start();
                        }}
                    />
                </h1>
            </div>
            <img src={logo} alt="Programador" className="logo-home"/>
        </div>
    );
}