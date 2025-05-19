import { bikeRoutes } from "../../components/RouteDetailData/RouteDetail";
import RouteDetail from "../../components/RouteDetail/RouteDetail";
import ProjectHeader from "../../components/ProjectHeader";
import bikeSenseLogo from "../../img/logo_bike_sense.png";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function RotaSelecionada() {
  const navigate = useNavigate();
  const route = bikeRoutes[0];

  return (
    <div className="routes-container-header">
      <ProjectHeader />
      <div className="routes-container">
        <div className="logo">
          <img src={bikeSenseLogo} alt="Bike Sense Logo" className="bike-sense-logo" />
        </div>

        <span className="voltar-link" onClick={() => navigate(-1)}>
          &lt; voltar
        </span>

        <div className="route-card">
          <RouteDetail route={route} />
        </div>
      </div>
    </div>
  );
}