import { useEffect, useState } from "react";
import { listarTodos, trocarStatus } from "../../service/apiService";
import "./ListTxt.css";

export function ListTxt() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listaRecebido = await listarTodos();
        setLista(listaRecebido);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  const adotar = async (id) => {
    const fetchData = async () => {
      try {
        await trocarStatus(id, false);
        window.location.reload();
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  };
  return (
    <div className="ListTxt">
      {lista.map((item, index) => (
        <div className="list">
          <ul>
            <li>{item.id}</li>
            <li>{item.nome}</li>
            <li>{item.descricao}</li>
            <li>{item.urlImagem}</li>
            <li>{item.categoria}</li>
            <li>{item.dataNascimento}</li>
            <li>{item.status.toString()}</li>
            <li>
              {item.status && (
                <button
                  onClick={() => {
                    adotar(item.id);
                  }}
                >
                  Adotar
                </button>
              )}
            </li>
          </ul>
          <hr />
        </div>
      ))}
    </div>
  );
}
