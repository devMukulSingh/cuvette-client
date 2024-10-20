import Sidebar from "../components/Sidebar";
import HomeNavbar from "../components/HomeNavbar";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { isAuth } from "../lib/utils";

const HomeLayout = () => {
  return (
    <div
      className="     h-screen
    w-full "
    >
      <HomeNavbar />
      <div
        className="
        h-full
    flex 
  
    "
      >
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
