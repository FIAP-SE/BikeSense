import React from "react";
import ProjectHeader from "../../components/ProjectHeader";
import "./style.css";
import bikeSenseLogo from "../../img/bike_sense.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faChartBar} from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
        
        <div className="home-container">

          <ProjectHeader />
          <img src={bikeSenseLogo} alt="Bike Sense Logo" className="bike-sense-logo" />

          <div className="home-content">
            <p>Hoje é um ótimo dia para pedalar!<br/> Veja as condições de hoje:</p>
          </div>

          <div className="home-card">

            <div className="home-card-content">
              <FontAwesomeIcon icon={faLocationDot} className="icons-card location" />
              <span className="card-text">Tatuapé, SP </span>
              <FontAwesomeIcon icon={faSun} className="icons-card sun" />
              <span className="card-text">25ºC</span>
              <FontAwesomeIcon icon={faLeaf} className="icons-card leaf" />
              <span className="card-text">Boa</span>
            </div>

            <div className="home-card-options">
              <p>Escolha uma das opções abaixo</p>
              <button className="button route">
                  <FontAwesomeIcon icon={faMapLocationDot} className="icons" />
                BUSCAR UMA ROTA
                </button>
              <button className="button friends">
                <FontAwesomeIcon icon={faUsers} className="icons"  />
                PEDALAR COM AMIGOS
                </button>
              <button className="button mural">
                <FontAwesomeIcon icon={faChartBar} className="icons"  />
                VER MURAL
                </button>

            </div>

          </div>
        </div>
        
    );
}