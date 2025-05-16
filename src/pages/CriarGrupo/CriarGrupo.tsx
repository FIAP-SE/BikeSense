import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import ProjectHeader from "../../components/ProjectHeader";
import bikeSenseLogo from "../../img/bike_sense.png";

const grupos = [
  { nome: "Grupo 1", nivel: "Nivel1", tipo: "Tipo1", comentario: "lorem ipsum" },
  { nome: "Grupo 2", nivel: "Nivel2", tipo: "Tipo2", comentario: "lorem ipsum" },
  { nome: "Grupo 3", nivel: "Nivel3", tipo: "Tipo3", comentario: "lorem ipsum" },
  { nome: "Grupo 4", nivel: "Nivel4", tipo: "Tipo4", comentario: "lorem ipsum" },
];

const CriarGrupo: React.FC = () => {
  return (
    <div className="criar-grupo-container">
      <ProjectHeader />
      <div className="content-wrapper">
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

        <Link to="/CriarNovoGrupo">
          <button className="botao-criar">CRIAR GRUPO</button>
        </Link>

        <p className="lista-title">Lista de grupos:</p>

        {grupos.map((grupo, index) => (
          <div className="grupo-card" key={index}>
            <div className="grupo-info">
              <strong>{grupo.nome}</strong>
              <p><strong>Origem:</strong></p>
              <p><strong>Destino:</strong></p>
              <p><strong>Dia:</strong></p>
              <p><strong>Horário:</strong></p>
              <p><strong>Nível:</strong> {grupo.nivel}</p>
              <p><strong>Tipo:</strong> {grupo.tipo}</p>
            </div>
            <div className="grupo-extra">
              <p className="comentario">Comentário: {grupo.comentario}</p>
              <button className="ver-mais">Ver mais</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CriarGrupo;