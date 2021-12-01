import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const addToFavorites = async () => {
  const response = await axios.get(`${apiUrl}/auth/favorites`);
  return response;
};
