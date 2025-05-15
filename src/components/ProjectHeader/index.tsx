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
                        <Link className="blv-projeto-nav" to={"/home"}>Home</Link>
                        <Link className="blv-projeto-nav" to={"/Rotas"}>Rotas</Link>
                        <Link className="blv-projeto-nav" to={"/Amigos"}>Amigos</Link>
                        <Link className="blv-projeto-nav" to={"/Mural"}>Mural</Link>
                        <Link className="blv-projeto-nav" to={"/NovoPost"}>NovoPost</Link>
                        <Link className="blv-projeto-nav" to={"/Participar"}>Participar</Link>


                    </nav>
                </div>
            </div>
        </header>
    );
}
