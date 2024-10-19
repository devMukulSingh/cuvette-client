import Sidebar from "../components/Sidebar";
import HomeNavbar from "../components/HomeNavbar";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { isAuth } from "../lib/utils";

const HomeLayout = () => {



  return (
    <>
      <HomeNavbar />
      <div
        className="
    flex 
    h-[calc(100vh-5rem)]
    w-full 
    items-center
    "
      >
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default HomeLayout;
