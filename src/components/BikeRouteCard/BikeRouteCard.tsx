import React from 'react';
import { BikeRoute } from '../BikeRouteData/BikeRouteData';
import './BikeRouteCard.css';

interface Props {
  route: BikeRoute;
}

const BikeRouteCard: React.FC<Props> = ({ route }) => {
  return (
    <div className="card">
      <h2 className="card-title">{route.title}</h2>
      <div className="card-content">
        <div className="card-info">
          <p><strong>Distância:</strong> {route.distance}</p>
          <p><strong>Nível:</strong> {route.level}</p>
          <p><strong>Tipo:</strong> {route.type}</p>
          <p><strong>Qualidade do ar:</strong> {route.airQuality}</p>
          <p><strong>Previsão:</strong> {route.forecast}</p>
          <p><strong>Clima:</strong> {route.temperature}</p>
        </div>
        <div className="card-description-area">
          <p className="card-description">{route.description}</p>
          <button className="card-button">Ver mais</button>
        </div>
      </div>
    </div>
  );
};

export default BikeRouteCard;