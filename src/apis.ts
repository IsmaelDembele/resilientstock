import axios from "axios";

export const getIndices = async (page: number) => {
  const response = await axios.get(`http://localhost:5000/?page=${page}`);
  return response.data;
};

export const getNbIndice = async () => {
  const response = await axios.get("http://localhost:5000/nbindice");
  return response.data;
};

export const postIndice = async (indice: string) => {
  const response = await axios.post("http://localhost:5000/addindice", { indice: indice });
  return response.data;
};
