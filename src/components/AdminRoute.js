import { Outlet } from "react-router";
import { isAuthenticated } from "../services/authServices";
import LoginView from "../views/LoginView";

const AdminRoute = () => {
  const user = isAuthenticated();

  return user.role === "ADMIN" ? <Outlet /> : <LoginView />;
};

export default AdminRoute;
