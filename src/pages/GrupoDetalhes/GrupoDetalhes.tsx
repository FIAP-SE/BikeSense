import React from "react";
import "./style.css";
import { useLocation, useNavigate } from "react-router-dom";
import ProjectHeader from "../../components/ProjectHeader";
import bikeSenseLogo from "../../img/logo_bike_sense.png";
import banner from "../../img/fundo_banner.png";

const GrupoDetalhes: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const grupo = location.state;

  if (!grupo) {
    navigate("/CriarGrupo");
    return null;
  }

  const novoParticipante = grupo.novoParticipante;

  const formatarDataCompleta = (dataISO: string) => {
    const diasSemana = [
      "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
      "Quinta-feira", "Sexta-feira", "Sábado"
    ];

    const [ano, mes, dia] = dataISO.split("-");
    const data = new Date(`${ano}-${mes}-${dia}`);
    const diaSemana = diasSemana[data.getDay()];
    const dataFormatada = `${dia}/${mes}/${ano}`;

    return `${diaSemana} (${dataFormatada})`;
  };

  const participantesFixos = [
    { nome: "Carla Mendes" },
    { nome: "João Ferreira" },
    { nome: "Bruno Alves" },
    { nome: "Juliana Rocha" }
  ];

  const todosParticipantes = novoParticipante
    ? [...participantesFixos, novoParticipante]
    : participantesFixos;

  return (
    <div className="grupo-detalhes-container">
      <ProjectHeader />
      <img src={bikeSenseLogo} alt="Bike Sense Logo" className="logo-detalhes" />

      <span className="voltar-link" onClick={() => navigate(-1)}>
        &lt; voltar
      </span>

      <div className="grupo-card-detalhes">
        <div className="grupo-banner-wrapper">
          <img src={banner} alt="Grupo" className="grupo-banner" />
        </div>

        <div className="grupo-conteudo">
          <div className="grupo-info-detalhes">
            <strong>{grupo.nomeGrupo}</strong>
            <p><strong className="grupo-info">Dia:</strong> {formatarDataCompleta(grupo.data)}</p>
            <p><strong className="grupo-info">Horário:</strong> {grupo.horario}</p>
            <p><strong className="grupo-info">Origem:</strong> {grupo.origem}</p>
            <p><strong className="grupo-info">Destino:</strong> {grupo.destino}</p>
            <p><strong className="grupo-info">Nível:</strong> {grupo.nivel}</p>
            <p><strong className="grupo-info">Tipo:</strong> {grupo.tipo}</p>
            <p><strong className="grupo-info">Comentários:</strong> {grupo.comentarios || "Nenhum comentário."}</p>
          </div>

          <div className="grupo-participantes">
            <strong>Participantes</strong>
            <ul>
              {todosParticipantes.map((p, index) => (
                <li key={index}>
                  <span className="dot green"></span> {p.nome}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          className="botao-participar"
          onClick={() => navigate("/Participar", { state: grupo })}
        >
          PARTICIPAR
        </button>
      </div>
    </div>
  );
};

export default GrupoDetalhes;
