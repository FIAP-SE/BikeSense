import './style.css';
import fundoBanner from '../../img/fundo_banner.png';
import logo from '../../img/bike_sense.png';
import ProjectHeader from '../../components/ProjectHeader';

const Participar:React.FC = () => {
  return (
    <div className="routes-container-header">
        <ProjectHeader />
    <div className="join-container">
      <img src={logo} alt="BikeSense Logo" className="logo-image" />
      <div className="form-card">
        <img src={fundoBanner} alt="Banner" className="banner-image" />
        <div className="form-content">
          <label>Nome</label>
          <input type="text" placeholder="Digite seu nome" />
          <label>Contato</label>
          <input type="text" placeholder="Digite seu contato" />
          <button className="btn">PARTICIPAR</button>
        </div>
      </div>
    </div>
    
    </div>
  );
};

export default Participar;
