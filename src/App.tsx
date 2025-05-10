import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Rotas from "./pages/Rotas/Rotas";
import Amigos from "./pages/Amigos/Amigos";
import Mural from "./pages/Mural/Mural";
import Pedalar from "./pages/Pedalar/Pedalar";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Rotas" element={<Rotas />} />
        <Route path="/Amigos" element={<Amigos />} />
        <Route path="/Mural" element={<Mural />} />
        <Route path="/Pedalar" element={<Pedalar />} />

      </Routes>
    </Router>
  );
}