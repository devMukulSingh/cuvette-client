import Cookies from "js-cookie";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const AuthMiddleware = ({ children }: { children: ReactNode }) => {
  const token = Cookies.get("token");

  if (token && token !== "") {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default AuthMiddleware;
