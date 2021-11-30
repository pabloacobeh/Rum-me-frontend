import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getAllRums = async () => {
  const response = await axios.get(`${apiUrl}/rums`);
  return response;
};

export const getSingleRumFromApi = async (id) => {
  const response = await axios.get(`${apiUrl}/rums/rum/${id}`);
  return response;
};

export const createRumInApi = async (rum) => {
  const { image, ...newRum } = rum;
  const response = await axios.post(`${apiUrl}/rums/rum`, newRum);
  await imageUploadToApi(response.data._id, image);
  alert("Rum created");
};

export const imageUploadToApi = async (id, img) => {
  const formData = new FormData();
  formData.append("image", img);
  const response = axios.post(`${apiUrl}/rums/rum/imageUpload/${id}`, formData);
  return response;
};

export const updateRumInApi = async (obj) => {
  const { image, ...rum } = obj;
  const response = await axios.put(`${apiUrl}/rums/rum/${obj._id}`, rum);
  alert("Rum updated");
  return response;
};

export const deleteRumInApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/rums/rum/${id}`);
  return response;
};
