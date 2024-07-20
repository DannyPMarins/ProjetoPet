import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/animal",
});

export const listarTodos = async () => {
  try {
    const response = await api.get();
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const trocarStatus = async (id, status) => {
  try {
    const response = await api.put(`/status?id=${id}&status=${status}`);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
export const salvar = async (animal) => {
  try {
    const response = await api.post(``, animal);
    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
