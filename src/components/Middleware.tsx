import Cookies from "js-cookie";
import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

const Middleware = ({ children }: { children: ReactNode }) => {
  const token = Cookies.get("token");

  if (!token || token==='') {
    return <Navigate to="/sign-up" />;
  } else {
    return children;
  }
};

export default Middleware;
