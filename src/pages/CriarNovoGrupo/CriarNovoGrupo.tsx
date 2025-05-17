import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import ProjectHeader from "../../components/ProjectHeader";
import bikeSenseLogo from "../../img/logo_bike_sense.png";

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

          <select defaultValue="" required>
            <option value="" disabled>
              Nível de dificuldade
            </option>
            <option value="Leve">Leve</option>
            <option value="Moderado">Moderado</option>
            <option value="Intenso">Intenso</option>
            <option value="Avançado">Avançado</option>
          </select>

          <select defaultValue="" required>
            <option value="" disabled>
              Tipo de trajeto
            </option>
            <option value="Urbano">Urbano</option>
            <option value="Trilha">Trilha</option>
            <option value="Misto">Misto</option>
            <option value="Ciclovia">Ciclovia</option>
          </select>

          <input type="date" lang="pt-BR" placeholder="dd/mm/aaaa"/>
          <input type="time" lang="pt-BR" step="60"/>
          <input type="text" placeholder="Nome do Grupo" />
          <textarea placeholder="Comentários"></textarea>
        </form>

        <button className="botao-criar-grupo">CRIAR GRUPO</button>
      </div>
    </>
  );
};

export default CriarNovoGrupo;
