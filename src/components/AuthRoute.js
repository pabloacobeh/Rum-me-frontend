import { Children, Component } from "react";
import { Navigate, Route } from "react-router-dom";
import { isAuthenticated } from "../services/authServices";
import LoginView from "../views/LoginView";

const AuthRoute = () => {
  const user = isAuthenticated();
  return user ? <Outlet /> : <LoginView />;
};

export default AuthRoute;
