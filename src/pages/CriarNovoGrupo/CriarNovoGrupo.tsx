import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import ProjectHeader from "../../components/ProjectHeader";
import bikeSenseLogo from "../../img/logo_bike_sense.png";

const CriarNovoGrupo: React.FC = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    origem: "",
    destino: "",
    nivel: "",
    tipo: "",
    data: "",
    horario: "",
    nomeGrupo: "",
    comentarios: "",
  });

  const [erros, setErros] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErros({ ...erros, [e.target.name]: "" });
  };

  const validarFormulario = () => {
    const novosErros: { [key: string]: string } = {};
    if (!form.origem) novosErros.origem = "Informe a origem.";
    if (!form.destino) novosErros.destino = "Informe o destino.";
    if (!form.nivel) novosErros.nivel = "Escolha o nível de dificuldade.";
    if (!form.tipo) novosErros.tipo = "Escolha o tipo de trajeto.";
    if (!form.data) novosErros.data = "Selecione a data.";
    if (!form.horario) novosErros.horario = "Informe o horário.";
    if (!form.nomeGrupo) novosErros.nomeGrupo = "Informe o nome do grupo.";

    setErros(novosErros);

    if (Object.keys(novosErros).length > 0) {
      setTimeout(() => {
        const spans = document.querySelectorAll(".erro-msg");
        spans.forEach(span => span.classList.add("oculta"));
      }, 3500);

      setTimeout(() => {
        setErros({});
      }, 4000);
    }

    return Object.keys(novosErros).length === 0;
  };

  const handleSubmit = () => {
    if (validarFormulario()) {
      navigate("/CriarGrupo", { state: form });
    }
  };

  return (
    <>
      <ProjectHeader />
      <div className="novo-grupo-container">
        <img
          src={bikeSenseLogo}
          alt="Bike Sense Logo"
          className="novo-grupo-logo"
        />

        <Link to="/CriarGrupo" className="novo-grupo-voltar">
          {"< voltar"}
        </Link>

        <p className="novo-grupo-subtitulo">Insira os dados para criar seu grupo:</p>

        <form className="novo-grupo-formulario">
          <input type="text" placeholder="Origem" name="origem" value={form.origem} onChange={handleChange} />
          {erros.origem && <span className="erro-msg">{erros.origem}</span>}

          <input type="text" placeholder="Destino" name="destino" value={form.destino} onChange={handleChange} />
          {erros.destino && <span className="erro-msg">{erros.destino}</span>}

          <select name="nivel" value={form.nivel} onChange={handleChange} required>
            <option value="" disabled>Nível de dificuldade</option>
            <option value="Leve">Leve</option>
            <option value="Moderado">Moderado</option>
            <option value="Intenso">Intenso</option>
            <option value="Avançado">Avançado</option>
          </select>
          {erros.nivel && <span className="erro-msg">{erros.nivel}</span>}

          <select name="tipo" value={form.tipo} onChange={handleChange} required>
            <option value="" disabled>Tipo de trajeto</option>
            <option value="Urbano">Urbano</option>
            <option value="Trilha">Trilha</option>
            <option value="Misto">Misto</option>
            <option value="Ciclovia">Ciclovia</option>
          </select>
          {erros.tipo && <span className="erro-msg">{erros.tipo}</span>}

          <input type="date" lang="pt-BR" name="data" value={form.data} onChange={handleChange} />
          {erros.data && <span className="erro-msg">{erros.data}</span>}

          <input type="time" lang="pt-BR" step="60" name="horario" value={form.horario} onChange={handleChange} />
          {erros.horario && <span className="erro-msg">{erros.horario}</span>}

          <input type="text" placeholder="Nome do Grupo" name="nomeGrupo" value={form.nomeGrupo} onChange={handleChange} />
          {erros.nomeGrupo && <span className="erro-msg">{erros.nomeGrupo}</span>}

          <textarea placeholder="Comentários" name="comentarios" value={form.comentarios} onChange={handleChange} />
        </form>

        <button className="botao-criar-grupo" onClick={handleSubmit}>CRIAR GRUPO</button>
      </div>
    </>
  );
};

export default CriarNovoGrupo;