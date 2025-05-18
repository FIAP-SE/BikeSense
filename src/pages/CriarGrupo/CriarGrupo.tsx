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
    const dias = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado"
    ];
    const date = new Date(data);
    return dias[date.getDay()] || "Data inválida";
  };

  const grupos = [
    {
      nome: "Pedal da Madrugada",
      origem: "Praça Central",
      destino: "Mirante do Vale",
      dia: "Sábado",
      horario: "05:30",
      nivel: "Intenso",
      tipo: "Urbano",
      comentario: "Pedal voltado para quem curte desafios logo cedo!"
    },
    {
      nome: "Trilha Leve",
      origem: "Parque das Árvores",
      destino: "Cachoeira Azul",
      dia: "Domingo",
      horario: "09:00",
      nivel: "Leve",
      tipo: "Trilha",
      comentario: "Ideal para iniciantes e famílias."
    },
    {
      nome: "Pedal Noturno",
      origem: "Estação Norte",
      destino: "Centro Histórico",
      dia: "Quarta-feira",
      horario: "20:00",
      nivel: "Moderado",
      tipo: "Urbano",
      comentario: "Passeio tranquilo com paradas culturais."
    },
    {
      nome: "Exploradores de Rotas",
      origem: "Praia do Sol",
      destino: "Fazenda Rio Verde",
      dia: "Sexta-feira",
      horario: "07:00",
      nivel: "Avançado",
      tipo: "Misto",
      comentario: "Percurso longo e misto com belas paisagens."
    }
  ];

  const listaGrupos = novoGrupo
    ? [
        {
          nome: novoGrupo.nomeGrupo,
          origem: novoGrupo.origem,
          destino: novoGrupo.destino,
          dia: obterDiaSemana(novoGrupo.data),
          horario: novoGrupo.horario,
          nivel: novoGrupo.nivel,
          tipo: novoGrupo.tipo,
          comentario: novoGrupo.comentarios || "Sem comentários adicionais."
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
              <strong>{grupo.nome}</strong>
              <p><strong>Origem:</strong> {grupo.origem}</p>
              <p><strong>Destino:</strong> {grupo.destino}</p>
              <p><strong>Dia:</strong> {grupo.dia}</p>
              <p><strong>Horário:</strong> {grupo.horario}</p>
              <p><strong>Nível:</strong> {grupo.nivel}</p>
              <p><strong>Tipo:</strong> {grupo.tipo}</p>
            </div>
            <div className="grupo-extra">
              <p className="comentario">Comentário: {grupo.comentario}</p>
              <button className="ver-mais" onClick={() => handleVerMais(grupo)}>Ver mais</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CriarGrupo;
