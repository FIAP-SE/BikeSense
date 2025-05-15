import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import ProjectHeader from "../../components/ProjectHeader";
import bikeSenseLogo from "../../img/bike_sense.png";

const CriarNovoGrupo: React.FC = () => {
  return (
    <>
      <ProjectHeader />
      <div className="novo-grupo-container">
        <img
          src={bikeSenseLogo}
          alt="Bike Sense Logo"
          className="novo-grupo-logo"
        />

        <Link to="/CriarGrupo" className="novo-grupo-voltar">
          {"< voltar"}
        </Link>

        <p className="novo-grupo-subtitulo">Insira os dados para criar seu grupo:</p>

        <form className="novo-grupo-formulario">
          <input type="text" placeholder="Origem" />
          <input type="text" placeholder="Destino" />
          <input type="text" placeholder="Nível de dificuldade" />
          <input type="text" placeholder="Tipo de trajeto" />
          <input type="text" placeholder="Dia" />
          <input type="text" placeholder="Horário" />
          <input type="text" placeholder="Nome do Grupo" />
          <textarea placeholder="Comentários"></textarea>
          <button type="submit">CRIAR GRUPO</button>
        </form>
      </div>
    </>
  );
};

export default CriarNovoGrupo;