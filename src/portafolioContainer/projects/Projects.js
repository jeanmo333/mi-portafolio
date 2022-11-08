import React, {Fragment}  from "react";
import "./Projects.css";


export default function Projects() {
  return (
    <Fragment>
      <h1 className="h1">Mis Proyectos</h1>

      <div className="contenador-card">

        <div
          className="card bg-dark text-white"
        >
          <img
            className="card-img-top"
            src="img/Ad-citas.png"
            alt="Card image cap"
          />
             <div className="card-body">
            <h5 className="card-title">Administrador de citas</h5>
            <p className="card-text">
              Proyecto hecho con html5, css3, bootstrap y javascript
            </p>
            <div className="card-footer d-flex">
              <a
                href="https://github.com/jeanmo333/Administrador-citas/tree/master"
                className="btn btn-primary boton mr-2"
                target="_blank"
              >
                Codigo
              </a>

              <a
                href="https://xenodochial-agnesi-9d9bd2.netlify.app"
                className="btn btn-primary boton"
                target="_blank"
              >
                Demo
              </a>
            </div>
            </div>
        </div>

        <div
          className="card bg-dark text-white"
        >
          <img
            className="card-img-top"
            src="img/tienda-mueble.png"
            alt="Card image cap"
          />
       <div className="card-body">
            <h5 className="card-title">Tienda Mueble</h5>
            <p className="card-text">
              Proyecto hecho con html5 y technologia de css3 como grid y flexbox
            </p>
            <div className="d-flex ">
              <a
                href="https://github.com/jeanmo333/tienda-mueble/tree/master"
                className="btn btn-primary boton mr-2"
                target="_blank"
              >
                Codigo
              </a>

              <a
                href="https://admiring-goldstine-38801c.netlify.app"
                className="btn btn-primary boton "
                target="_blank"
              >
                Demo
              </a>
            </div>
            </div>
        </div>

        <div
          className="card bg-dark text-white"
        >
          <img
            className="card-img-top"
            src="img/mis-tweets.png"
            alt="Card image cap"
          />
           <div className="card-body"> 
            <h5 className="card-title">Mis tweets</h5>
            <p className="card-text">
              Proyecto hecho con html5, css y javascript. Guardando datos en local storage
            </p>
            <div className="d-flex ">
              <a
                href="https://github.com/jeanmo333/Mis-tweets/tree/master"
                className="btn btn-primary boton mr-2"
                target="_blank"
              >
                Codigo
              </a>

              <a
                href="https://boring-shannon-ae8803.netlify.app/"
                className="btn btn-primary boton "
                target="_blank"
               
              >
                Demo
              </a>
            </div>
         </div>
        </div>

        <div
          className="card bg-dark text-white"
        >
          <img
            className="card-img-top"
            src="img/carito-compra.png"
            alt="Card image cap"
          />

            <div className="card-body">
            <h5 className="card-title">Carrito de compra</h5>
            <p className="card-text">
              Proyecto hecho con html5 , css3, javascript y localStorage
            </p>
            <div className="d-flex ">
              <a
                href="https://github.com/jeanmo333/PROYECTO-Carrito-LS/tree/master"
                className="btn btn-primary boton mr-2"
                target="_blank"
              >
                Codigo
              </a>

              <a
                href="https://wizardly-hoover-87785c.netlify.app/"
                className="btn btn-primary boton"
                target="_blank"
              >
                Demo
              </a>
            </div>
    </div>
        </div>

        <div
          className="card bg-dark text-white"
        >
          <img
            className="card-img-top"
            src="img/gasto-semanal.png"
            alt="Card image cap"
          />
       <div className="card-body"> 
            <h5 className="card-title">Gestor gasto semanal</h5>
            <p className="card-text">
              Proyecto hecho con html5, css3, bootstrap y javascript
            </p>
            <div className="d-flex ">
              <a
                href="https://github.com/jeanmo333/gasto-semanal/tree/master"
                className="btn btn-primary boton mr-2"
                target="_blank"
              >
                Codigo
              </a>

              <a
                href="https://nostalgic-euclid-ef6997.netlify.app"
                className="btn btn-primary boton"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </div>
        </div>

        <div
          className="card bg-dark text-white"
        >
          <img
            className="card-img-top"
            src="img/cotizador-seguro.png"
            alt="Card image cap"
          />
        
        <div className="card-body">
            <h5 className="card-title">Cotizador seguro</h5>
            <p className="card-text">
              Proyecto hecho con html5, css3, bootstrap y javascript
            </p>
            <div className="d-flex ">
              <a
                href="https://github.com/jeanmo333/Cotizador-seguro/tree/master"
                className="btn btn-primary boton mr-2"
                target="_blank"
              >
                Codigo
              </a>

              <a
                href="https://hopeful-snyder-2c6226.netlify.app/"
                className="btn btn-primary boton"
                target="_blank"
              >
                Demo
              </a>
            </div>
         </div>
        </div>
      </div>
      </Fragment>
  );
}
