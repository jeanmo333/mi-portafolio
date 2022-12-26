import React, { Component } from "react";
import { motion } from "framer-motion";
import "./AboutMe.css";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="contenedor">
        <div id="sobremi" className="acerca-de mt-4">
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="perfil mb-3">
            <div className="foto"> </div>
          </motion.div>

          <motion.div
            initial={{
              x: -500,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="info">
            <h2 className="titulo">Sobre mi</h2>
            <p className="resumen">
              Soy Moril Jean-francois, Estudiante en el último de ingeniería
              informática. Instituto Profesional de chile (IPCHILE). Me encanta
              la informática y todo que tiene que ver con el mundo tecnológico.
              pero mi especialidad es Desarrollo de aplicaciones web y móviles.
            </p>

            <p className="resumen">
              Soy una persona Proactiva y Autodidacta. Siempre con ganas de
              Aprender cosas nuevas y enfrentar problemas complejas hasta
              encontrar una solución. Soy muy curioso, me gusta preguntar e
              investigar sobre las tecnologías que quiero aprender. Puedo adaptar
              cualquier cambio de tecnología y me gusta trabajar en equipo.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }
}
