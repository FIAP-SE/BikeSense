import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Rotas from "./pages/Rotas/Rotas";
import Amigos from "./pages/Amigos/Amigos";
import Mural from "./pages/Mural/Mural";
import CriarGrupo from "./pages/Criar Grupo/CriarGrupo";
import GrupoDetalhes from "./pages/Grupo Detalhes/GrupoDetalhes";
import NovoPost from './pages/NovoPost';
import Participar from './pages/Participar';
import RotaSelecionada from './pages/RotaSelecionada/RotaSelecionada';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Rotas" element={<Rotas />} />
        <Route path="/Amigos" element={<Amigos />} />
        <Route path="/Mural" element={<Mural />} />
        <Route path="/CriarGrupo" element={<CriarGrupo />} />
        <Route path="/GrupoDetalhes" element={<GrupoDetalhes />} />
        <Route path="/NovoPost" element={<NovoPost/>} />
        <Route path="/Participar" element={<Participar/>} />
        <Route path="/RotaSelecionada" element={<RotaSelecionada />} />
      </Routes>
    </Router>
  );
}