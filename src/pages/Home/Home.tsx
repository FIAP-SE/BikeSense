import React from "react";
import ProjectHeader from "../../components/ProjectHeader";
import "./style.css";

export default function Home() {
  return (
    <div className="home">
      <ProjectHeader />
        <div className="home-container">
            <h1>Home</h1>
            <p>Welcome to the home page!</p>
        </div>
        </div>
    );
}