import React from "react";
import "./RouteDetail.css";
import { BikeRoute } from "../RouteDetailData/RouteDetail";
import bikeImage from '../../img/bicicleta-background.png';

interface RouteDetailProps {
  route: BikeRoute;
}

const RouteDetail: React.FC<RouteDetailProps> = ({ route }) => {
  return (
    <div className="route-detail">
      <img src={bikeImage} alt="imagem de fundo"className="route-image" />
    <div className="route-title"> 
        <h2>{route.title}</h2>
    </div>
      <div className="route-content">
        
        <div className="route-left">
          <p><strong>Distância:</strong> {route.distance}</p>
          <p><strong>Nível:</strong> {route.level}</p>
          <p><strong>Tipo:</strong> {route.type}</p>
          <p><strong>Qualidade do ar:</strong> {route.airQuality}</p>
          <p><strong>Previsão:</strong> {route.forecast}</p>
          <p><strong>Temperatura:</strong> {route.temperature}</p>
        </div>

        <div className="route-right">
          <p>{route.description}</p>
        </div>
        
        </div>
        <div className="route-button">
            <button className="start-button">INICIAR</button>
        </div>
    </div>
  );
};

export default RouteDetail;


