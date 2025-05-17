import React from 'react';
import './style.css';
import logo from '../../img/bike_sense.png';
import ProjectHeader from '../../components/ProjectHeader';

const NovoPost:React.FC = () => {
  return (
    <div >
        <ProjectHeader />
        
    <div className="novo-post-container">
      <img src={logo} alt="Logo" className="logo11" />
      <div className="form-box">
        <h2>Novo Post</h2>
        <form>
          <label>Rota</label>
          <select><option>Selecione uma rota</option></select>

          <label>Grupo (opcional)</label>
          <select><option>Selecione um grupo</option></select>

          <div className="upload-box">
            <span>📷 Adicionar foto</span>
          </div>

          <label>Dificuldade Percorrida</label>
          <select><option>Selecione</option></select>

          <label>Qualidade do Ar Sentida</label>
          <select><option>Selecione</option></select>

          <label>Temperatura Estimada</label>
          <select><option>Selecione</option></select>

          <label>Observações</label>
          <div className="tags">
            {["Trilha molhada", "Condições ótimas", "Vento forte", "Terreno irregular"].map((texto, i) => (
              <span
                key={i}
                className="tag"
                onClick={(e) => e.currentTarget.classList.toggle("selected")}
              >
                {texto}
              </span>
            ))}
          </div>

          <textarea placeholder="Digite suas observações..."></textarea>
          <button type="submit" className="btn-publicar">Publicar</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default NovoPost;
