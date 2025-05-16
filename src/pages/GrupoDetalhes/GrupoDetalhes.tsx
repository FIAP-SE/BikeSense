import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import ProjectHeader from "../../components/ProjectHeader";
import bikeSenseLogo from "../../img/bike_sense.png";
import banner from "../../img/fundo_banner.png";

const GrupoDetalhes: React.FC = () => {
  return (
    <div className="grupo-detalhes-container">
      <ProjectHeader />
      <img src={bikeSenseLogo} alt="Bike Sense Logo" className="logo" />

      <div className="grupo-card-detalhes">
        <div className="grupo-banner-wrapper">
          <img src={banner} alt="Grupo" className="grupo-banner" />
        </div>

        <div className="grupo-conteudo">
          <div className="grupo-info-detalhes">
            <strong>Nome do Grupo</strong>
            <p><strong className="grupo-info">Dia:</strong></p>
            <p><strong className="grupo-info">Horário:</strong></p>
            <p><strong className="grupo-info">Origem:</strong></p>
            <p><strong className="grupo-info">Destino:</strong></p>
            <p><strong className="grupo-info">Nível:</strong> Iniciante</p>
            <p><strong className="grupo-info">Tipo:</strong> Urbano</p>
            <p><strong className="grupo-info">Comentários:</strong> xxxx</p>
          </div>

          <div className="grupo-participantes">
            <strong>Participantes</strong>
            <ul>
              <li><span className="dot green"></span> Pessoa</li>
              <li><span className="dot green"></span> Pessoa</li>
              <li><span className="dot green"></span> Pessoa</li>
            </ul>
          </div>
        </div>

        <button className="botao-participar">PARTICIPAR</button>
      </div>
    </div>
  );
};

export default GrupoDetalhes;
