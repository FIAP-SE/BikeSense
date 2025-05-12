import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import ProjectHeader from "../../components/ProjectHeader";
import bikeSenseLogo from "../../img/bike_sense.png";

const CriarGrupo: React.FC = () => {
  return (
    <div className="criar-grupo-container">
      <ProjectHeader />
      <div className="content-wrapper">

        {/* Imagem do logo acima do texto */}
        <img 
          src={bikeSenseLogo} 
          alt="Bike Sense Logo" 
          className="bike-sense-logo" 
        />

        <h2 className="intro-text">
          Nada melhor que pedalar com amigos!
          <br />
          Busque abaixo grupos existentes ou
          <br />
          crie seu próprio grupo.
        </h2>

        <Link to="/criar-novo-grupo">
          <button className="botao-criar">CRIAR GRUPO</button>
        </Link>

        <p className="lista-title">Lista de grupos:</p>

        <div className="grupo-card">
          <div className="grupo-info">
            <strong>Nome do Grupo</strong>
            <p><strong>Origem:</strong></p>
            <p><strong>Destino:</strong></p>
            <p><strong>Dia:</strong></p>
            <p><strong>Horário:</strong></p>
            <p><strong>Nível:</strong> Intenso</p>
            <p><strong>Tipo:</strong> Urbano</p>
          </div>
          <div className="grupo-extra">
            <p className="comentario">Comentário: </p>
            <button className="ver-mais">Ver mais</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriarGrupo;
