import React from "react";
import { bikeRoutes } from "../../components/RouteDetailData/RouteDetail";
import RouteDetail from "../../components/RouteDetail/RouteDetail";
import { Link } from "react-router-dom";
import ProjectHeader from "../../components/ProjectHeader";
import bikeSenseLogo from "../../img/bike_sense.png";
import "./style.css";


;

export default function RotaSelecionada() {
    const route = bikeRoutes[0]

    return(
        <div className="routes-container-header">
            <ProjectHeader />
            <div className="routes-container">
                <div className="logo">
                    <img src={bikeSenseLogo} alt="Bike Sense Logo" className="bike-sense-logo" />
                </div>
                <div className="route-card">
                    <RouteDetail route={route} />;
                </div>

            </div>
        </div>
    )

}