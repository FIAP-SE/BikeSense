import React from 'react';
import './style.css';
import logo from '../../img/bike_sense.png';
import trailPhoto from '../../img/fundo_banner.png';
import avatar from '../../img/bike_sense.png';
import ProjectHeader from '../../components/ProjectHeader';
import bikeSenseLogo from "../../img/bike_sense.png";


const Mural: React.FC = () => {
  return (
    <div className="routes-container-header">
      <ProjectHeader />
      <div className="mural-container">
      <div className="mural-header">
        <div className='mural-header-up'>
        <img src={logo} alt="Logo" className="logo-image" />
        </div>
        <h2>MURAL</h2>
        <p>Compartilhe aqui seus momentos com bike sense</p>
        <button className="create-post-btn">Criar publicação</button>
      </div>
      <div className="post">
        <div className="post-header">
          <img src={avatar} alt="Avatar" className="avatar" />
          <div className="user-info">
            <strong>lucasmtb</strong>
            <span>4h • Itapeva, Minas Gerais</span>
          </div>
        </div>
        <img src={trailPhoto} alt="Trilha" className="post-image" />
        <p className="quote">“Visual incrível hoje, céu limpo e estrada firme!”</p>
        <div className="observacao">
          <strong>Observação</strong>
          <ul>
            <li> Condição da trilha: fácil</li>
            <li> Temperatura: -18ºC um pouco úmida na saída, mas seca no topo</li>
          </ul>
        </div>
        <div className="post-actions">
          <button>👍 Curtir</button>
          <button>💬 Comentar</button>
        </div>
      </div>
    </div>
    </div>
      
  );
};

export default Mural;