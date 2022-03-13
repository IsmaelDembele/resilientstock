import axios from "axios";

export const getIndices = async () => {
  const response = await axios.get("http://localhost:5000");

  return response.data;
};

export const postIndice = async (indice: string) => {
  const response = await axios.post("http://localhost:5000/addindice", { indice: indice });

  console.log(response);
};
