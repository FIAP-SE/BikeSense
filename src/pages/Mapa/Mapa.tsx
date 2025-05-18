import React from 'react';
import './style.css';
import mapa from '../../img/mapa.png';
import { useNavigate } from 'react-router-dom';

const Mapa: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <span className="botao-voltar" onClick={() => navigate(-1)}>
        &lt; voltar
      </span>
      <div className='mapa-container'>
        <img src={mapa} alt='Mapa' className='mapa-image' />
      </div>
    </>
  );
};

export default Mapa;
