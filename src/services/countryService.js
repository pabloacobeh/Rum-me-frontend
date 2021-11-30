import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

export const getAllCountries = async () => {
  const response = await axios.get(`${apiUrl}/countries`);
  return response;
};

export const createCountry = async (country) => {
  const response = await axios.post(`${apiUrl}/countries/country`, country);
  alert("Country created");
  return response;
};

export const deleteCountryInApi = async (id) => {
  const response = await axios.delete(`${apiUrl}/countries/country/${id}`);
  return response;
};
