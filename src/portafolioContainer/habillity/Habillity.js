import React, { Component } from "react";
import { motion } from "framer-motion";
import "./Habillidad.css";

export default class Habillity extends Component {
  render() {
    return (
      <div className="contenedor">
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
        id="sobremi" className="acerca-de mt-4">
          <div className="info">
            <h2 className="titulo mt-4">
              Habilidades
            </h2>

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
        </motion.div>
      </div>
    );
  }
}
