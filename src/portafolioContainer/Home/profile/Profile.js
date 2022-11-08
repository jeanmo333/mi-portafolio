import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import {useHistory} from "react-router-dom";


export default function Profile(props) {

  let history = useHistory();

  const contratame = () =>{
    history.push('/contact');
  }

  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
                <div className="colz-icon">
                    <a href="https://www.facebook.com/profile.php?id=100049311472102"
                     target="_blank"
                    >
                        <i className="fa fa-facebook-square"></i>
                    </a>


                    <a href="https://www.instagram.com/moril_jean_francois/?hl=es-la"
                     target="_blank"
                    >
                        <i className="fa fa-instagram"></i>
                    </a>

                    <a href="https://www.youtube.com/channel/UC0Mzt5rTeDr9HYqAwg6rxXg" 
                     target="_blank"
                    >
                        <i className="fa fa-youtube-square"></i>
                    </a>

                    <a to="#">
                        <i className="fa fa-twitter"></i>
                    </a>
                </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hola, Soy{" "}
              <span className="highlighted-text">Moril Jean-francois</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}

                <Typical
                  loop={Infinity}
                  steps={[
                    "Estudiante 📚",
                    2000,
                    "Autodidacta 💻",
                    2000,
                    "Web Developer 🌐",
                    1000,
                  ]}
                />
              </h1>

              <span className="profile-role-tagline">
                Habilidad para crear aplicaciones con operaciones front-end y
                back-end.
              </span>
            </span>
          </div>

          <div className="profile-options">
            <button className="btn primary-btn" onClick={contratame} >
              {""}
              Contratame {""}
            </button>

            <a
              href="Cv-Moril-jean.pdf"
              download="Cv-Moril-jean.pdf"
            >
              <button className="btn highlighted-btn">Descargar CV</button>
            </a>
          </div>
        </div>

        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
