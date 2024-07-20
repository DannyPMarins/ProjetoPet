import React, { useState } from "react";
import "./Header.css";
import dog from "../../assets/dog.png";
import { salvar } from "../../service/apiService";

export const Header = () => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [urlimagem, setUrlImagem] = useState("");
  const [categoria, setCategoria] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [status, setStatus] = useState(false);

  const clickSalvar = async () => {
    const fetchData = async () => {
      try {
        await salvar({
          nome,
          descricao,
          urlimagem,
          categoria,
          dataNascimento,
          status,
        });
        window.location.reload();
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  };
  return (
    <div className="header">
      <img src={dog} alt="Logo" id="dog" />
      <h1>Procura-se um Pet</h1>
      <input
        type="text"
        placeholder="nome"
        onChange={(e) => setNome(e.target.value)}
        className="list-input"
      />
      <input
        type="text"
        placeholder="descricao"
        onChange={(e) => setDescricao(e.target.value)}
        className="list-input"
      />
      <input
        type="text"
        placeholder="url da imagem"
        onChange={(e) => setUrlImagem(e.target.value)}
        className="list-input"
      />
      <input
        type="text"
        placeholder="categoria"
        onChange={(e) => setCategoria(e.target.value)}
        className="list-input"
      />
      <input
        type="text"
        placeholder="data de nascimento"
        onChange={(e) => setDataNascimento(e.target.value)}
        className="list-input"
      />
      <input
        type="checkbox"
        placeholder="status"
        onChange={(e) => setStatus(e.target.checked)}
        className="input-box"
      />
      <span>esta disponivel</span>
      <a href="#">
        <input
          type="button"
          value="Cadastrar pet"
          id="register-btn"
          onClick={clickSalvar}
        />
      </a>
    </div>
  );
};
