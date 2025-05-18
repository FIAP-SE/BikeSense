import { NavLink } from "react-router-dom";
import "./style.css";
import { Link } from "react-router-dom";



export default function ProjectHeader() {
    return (
        <header className="blv-projeto-header">
            <div className="blv-projeto-header-container">
                <div className="blv-projeto-header-logo">
                    <NavLink to={"/"}>
                    </NavLink>
                </div>
                <div className="blv-projeto-header-nav">
                    <nav>
                        <Link className="blv-projeto-nav" to={"/home"}>HOME</Link>
                        <Link className="blv-projeto-nav" to={"/Rotas"}>ROTAS</Link>
                        <Link className="blv-projeto-nav" to={"/CriarGrupo"}>AMIGOS</Link>
                        <Link className="blv-projeto-nav" to={"/Mural"}>MURAL</Link>
                        <Link className="blv-projeto-nav" to={"/Mapa"}>PEDALAR</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
