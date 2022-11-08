import React, { Component } from "react";
import "./AboutMe.css";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="contenedor">
        <div id="sobremi" className="acerca-de mt-4">

          <div className="perfil mb-3">
            <div className="foto"> </div>
          </div>

          <div className="info">
            {/* 
                <img
                src="img/foto-sobremi.jpeg"
                className="rounded-circle img-fluid "
              />
              */}

            <h2 className="titulo">Sobre mi</h2>
            <p className="resumen">
             Soy Moril Jean-francois, Estudiante en el ultimo de Analista programador
             Computacional. Instituto Profesional de chile(IPCHILE). Me encanta la Informatica
             y todo que tiene que ver con el mundo tecnologico. pero mi especilidad es
             Desarrollador web.
            </p>

            <p className="resumen">
              Soy una persona Proactiva y Autodidacta. Siempre con ganas de Aprender
              cosas nuevas y enfrenta con problemas conplejas hasta encontrar una solucion.
              Soy una persona muy currioso, me gusta preguntar y investigar sobre las temas
              que despierta la curiosidad. y me gusta trabajar en equipo. 
            </p>

            <h2 className="titulo mt-4 mb-4">Habilidades</h2>

            <p className="label">HTML</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "80%" }}>
                80%
              </div>
            </div>

            <p className="label">CSS</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "65%" }}>
                65%
              </div>
            </div>

            <p className="label">Javascript</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "60%" }}>
                60%
              </div>
            </div>

            <p className="label">Nodejs</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "20%" }}>
                20%
              </div>
            </div>

            <p className="label">Reactjs</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "30%" }}>
                30%
              </div>
            </div>

            <p className="label">Java</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "55%" }}>
                55%
              </div>
            </div>

            <p className="label">Springboot</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "30%" }}>
                30%
              </div>
            </div>

            
            <p className="label">Git/Github</p>
            <div className="progress">
              <div className="progress-bar" style={{ width: "15%" }}>
                15%
              </div>
            </div>

            <p className="label">Php</p>
            <div className="progress mb-5">
              <div className="progress-bar" style={{ width: "15%" }}>
                15%
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
