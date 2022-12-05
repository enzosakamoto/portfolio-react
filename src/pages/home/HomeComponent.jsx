import './Home.css'
import logo from './assets/programador.svg'
import Typewriter from 'typewriter-effect'
import React from "react";
import { gsap } from "gsap";

export default function HomeComponent() {
    document.addEventListener("mousemove", function(event) {
        var width = window.innerWidth,
        height = window.innerHeight;
        positionX = (event.clientX/width) - 0.55;
        // positionY = (event.clientY/height) - 0.55;
        gsap.to(".logo-home", {
            // rotationY: positionX * 50, 
            // rotationX: -positionY * 50,
            // ease: "none"
            rotate: 27,
            x: 100,
            duration: 1
        });
    })
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