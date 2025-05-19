import React, { useState } from 'react';
import './style.css';
import fundoBanner from '../../img/fundo_banner.png';
import logo from '../../img/bike_sense.png';
import ProjectHeader from '../../components/ProjectHeader';
import { useNavigate, useLocation } from 'react-router-dom';

const Participar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const grupo = location.state;

  const [nome, setNome] = useState('');
  const [contato, setContato] = useState('');

  const handleSubmit = () => {
    if (!nome || !contato) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    navigate('/GrupoDetalhes', {
      state: {
        ...grupo,
        novoParticipante: {
          nome,
          contato
        }
      }
    });
  };

  return (
    <div className="routes-container-header">
      <ProjectHeader />
      <div className="join-container">
        <img src={logo} alt="BikeSense Logo" className="logo-image" />
        <div className="form-card">
          <img src={fundoBanner} alt="Banner" className="banner-image" />
          <div className="form-content">
            <label>Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <label>Contato</label>
            <input
              type="text"
              placeholder="Digite seu contato"
              value={contato}
              onChange={(e) => setContato(e.target.value)}
            />
            <button className="btn" onClick={handleSubmit}>
              PARTICIPAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Participar;