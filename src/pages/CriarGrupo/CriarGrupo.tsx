import React from "react";
import "./style.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ProjectHeader from "../../components/ProjectHeader";
import bikeSenseLogo from "../../img/logo_bike_sense.png";

const CriarGrupo: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const novoGrupo = location.state;

  const obterDiaSemana = (data: string) => {
    const dias = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    const date = new Date(data);
    return dias[date.getDay()];
  };

  const formatarData = (data: string) => {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  };

  const grupos = [
    {
      nomeGrupo: "Pedal da Madrugada",
      origem: "Praça Central",
      destino: "Mirante do Vale",
      data: "2025-06-21",
      horario: "05:30",
      nivel: "Difícil",
      tipo: "Urbano",
      comentarios: "Pedal voltado para quem curte desafios logo cedo!"
    },
    {
      nomeGrupo: "Trilha Leve",
      origem: "Parque das Árvores",
      destino: "Cachoeira Azul",
      data: "2025-06-22",
      horario: "09:00",
      nivel: "Fácil",
      tipo: "Trilha",
      comentarios: "Ideal para iniciantes e famílias."
    },
    {
      nomeGrupo: "Pedal Noturno",
      origem: "Estação Norte",
      destino: "Centro Histórico",
      data: "2025-06-25",
      horario: "20:00",
      nivel: "Média",
      tipo: "Urbano",
      comentarios: "Passeio tranquilo com paradas culturais."
    },
    {
      nomeGrupo: "Exploradores de Rotas",
      origem: "Praia do Sol",
      destino: "Fazenda Rio Verde",
      data: "2025-06-28",
      horario: "07:00",
      nivel: "Difícil",
      tipo: "Misto",
      comentarios: "Percurso longo e misto com belas paisagens."
    }
  ];

  const listaGrupos = novoGrupo
    ? [
        {
          ...novoGrupo
        },
        ...grupos
      ]
    : grupos;

  const handleVerMais = (grupo: typeof listaGrupos[number]) => {
    navigate("/GrupoDetalhes", { state: grupo });
  };

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

        {listaGrupos.map((grupo, index) => (
          <div className="grupo-card" key={index}>
            <div className="grupo-info">
              <strong>{grupo.nomeGrupo}</strong>
              <p><strong>Origem:</strong> {grupo.origem}</p>
              <p><strong>Destino:</strong> {grupo.destino}</p>
              <p><strong>Dia:</strong> {obterDiaSemana(grupo.data)} ({formatarData(grupo.data)})</p>
              <p><strong>Horário:</strong> {grupo.horario}</p>
              <p><strong>Nível:</strong> {grupo.nivel}</p>
              <p><strong>Tipo:</strong> {grupo.tipo}</p>
            </div>
            <div className="grupo-extra">
              <p className="comentario">Comentário: {grupo.comentarios}</p>
              <button className="ver-mais" onClick={() => handleVerMais(grupo)}>Ver mais</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CriarGrupo;