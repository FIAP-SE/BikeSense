import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Rotas from "./pages/Rotas/Rotas";
import Amigos from "./pages/Amigos/Amigos";
import Mural from "./pages/Mural/Mural";
import CriarGrupo from "./pages/CriarGrupo/CriarGrupo";
import CriarNovoGrupo from "./pages/CriarNovoGrupo/CriarNovoGrupo";
import GrupoDetalhes from "./pages/GrupoDetalhes/GrupoDetalhes";
import NovoPost from './pages/NovoPost';
import Participar from './pages/Participar';
import RotaSelecionada from './pages/RotaSelecionada/RotaSelecionada';
import Mapa from './pages/Mapa/Mapa';

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
        <Route path="/CriarNovoGrupo" element={<CriarNovoGrupo />} />
        <Route path="/NovoPost" element={<NovoPost/>} />
        <Route path="/Participar" element={<Participar/>} />
        <Route path="/RotaSelecionada" element={<RotaSelecionada />} />
        <Route path="/Mapa" element={<Mapa />} />
      </Routes>
    </Router>
  );
}