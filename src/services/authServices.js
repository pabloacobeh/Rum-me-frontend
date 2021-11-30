import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;
const tokenString = "jwtrum-me";

export const loginUserToApi = async (user) => {
  const response = await axios.post(`${apiUrl}/auth/login`, user);
  try {
    if (response.data) {
      const { _id, role } = response.data;
      localStorage.setItem(tokenString, JSON.stringify({ id: _id, role }));
    }
  } catch (error) {
    console.log(error);
  }
  return response;
};

export const signUpUser = async (user) => {
  const response = await axios.post(`${apiUrl}/auth/signup`, user);
  return response;
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem(tokenString)) {
    return JSON.parse(localStorage.getItem(tokenString));
  }
  return false;
};

export const logOut = () => {
  localStorage.removeItem(tokenString);
  window.location.reload();
};
