import React, { useState } from 'react';import "./style.css"
import { Link } from "react-router-dom";
import ProjectHeader from "../../components/ProjectHeader";
import bikeSenseLogo from "../../img/bike_sense.png";
import BikeRouteCard from '../../components/BikeRouteCard/BikeRouteCard';
import { bikeRoutes } from '../../components/BikeRouteData/BikeRouteData';


const Rotas: React.FC = () => {
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [routeType, setRouteType] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ start, end, difficulty, routeType });
  };

  return (
    <div className="routes-container-header">
      <ProjectHeader />

      <div className="routes-container-route">
        <div className="routes-leftside">
          <img src={bikeSenseLogo} alt="Bike Sense Logo" className="bike-sense-logo" />
          <div className="routes-left-card">
            <form className="route-form" onSubmit={handleSubmit}>
              <h2>Encontre sua rota ideal</h2>

              <input
                type="text"
                placeholder="De onde você sai?"
                value={start}
                onChange={(e) => setStart(e.target.value)}
              />

              <input
                type="text"
                placeholder="Para onde quer ir?"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
              />

              <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option value="">Dificuldade da rota</option>
                <option value="facil">Fácil</option>
                <option value="media">Média</option>
                <option value="dificil">Difícil</option>
              </select>

              <select value={routeType} onChange={(e) => setRouteType(e.target.value)}>
                <option value="">Tipo de trajeto</option>
                <option value="urbano">Urbano</option>
                <option value="trilha">Trilha</option>
                <option value="misto">Misto</option>
              </select>

              <button type="submit">Buscar rotas</button>
            </form>
          </div>
          
        </div>
        <div className="routes-rightside">
            {bikeRoutes.map((route, index) => (
              <BikeRouteCard key={index} route={route} />
            ))}
        </div>

      </div>

    </div>
  );
};

export default Rotas;