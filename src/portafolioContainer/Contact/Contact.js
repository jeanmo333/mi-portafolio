
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import Spinner from "../spinner/Spinner";
import "./Contact.css";

export default function Contact() {
  //state del formulario
  const [Datos, guardarDatos] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });



  //state de error
  const [error, guardarError] = useState(false);
  //state de Spinner
  const [spinner, guardarSpinner] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //validar formulario
    if (
      Datos.nombre === "" ||
      Datos.email === "" ||
      Datos.mensaje === "" ||
      Datos.asunto === ""
    ) {
      //imprimir el error
      guardarError(true);
      return;
    }
  

    //eliminar el errror
    guardarError(false);

    emailjs
      .sendForm(
        "service_rein75b",
        "template_gv0bguc",
        form.current,
        "user_yNmKy2gEiUbOjV15BmYpi"
      )
      .then(
        (result) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "enviado con exito",
            showConfirmButton: false,
            timer: 2000,
          });
       
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },

        Datos.nombre = "" ,
        Datos.email = "" ,
        Datos.mensaje = "" ,
        Datos.asunto = ""
      );

   

    //imprimir el spinner
    guardarSpinner(true);

    //desabilitar el spinner despues de 1 segundo y medio
    setTimeout(() => {
      guardarSpinner(false);
    }, 1000);

    e.target.reset();
  
  };

  //captando lo que se esta escribiendo en el input
  const handleInputChange = (e) => {
      
    guardarDatos({
      ...Datos,
      [e.target.name]: e.target.value,
    });
  };





  return (
    <div className="contenido-principal contenedor ">
      <motion.form 
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
      className="formulario" ref={form} onSubmit={sendEmail}>
        <fieldset>
          {error ? (
            <p className="error">Todos los campos son obligatorios</p>
          ) : null}

          <legend>Tus Datos</legend>

          <div className="campo">
            <label htmlFor="nombre">Nombre: </label>
            <input
              id="nombre"
              type="text"
              placeholder="Tu Nombre"
              name="nombre"
             onChange={handleInputChange}
           
            />
          </div>

          <div className="campo">
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              placeholder="Tu Email"
              name="email"
             onChange={handleInputChange}

            />
          </div>

          <div className="campo">
            <label htmlFor="asunto">Asunto:</label>
            <input
              id="asunto"
              type="asunto"
              placeholder="Tu Asunto"
              name="asunto"
             onChange={handleInputChange}
           
            />
          </div>

          <div className="campo">
            <label htmlFor="tel">Mensaje:</label>
            <textarea
              rows="3"
              cols="10"
              name="mensaje"
              onChange={handleInputChange}
          
            ></textarea>
          </div>
          {spinner ? <Spinner /> : null}

          <button  className="btn btn-info" type="submit" value="Enviar">Enviar</button>
        </fieldset>
      </motion.form>
    </div>

  );
}
