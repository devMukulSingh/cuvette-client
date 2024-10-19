import { useAppDispatch, useAppSelector } from ".././redux/hooks";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "./Avatar";
import { LogOut, SquareChevronDown } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "../components/ui/popover.tsx";
import { Button } from "../components/ui/button.tsx";
import { removeUserData } from "../redux/reducer.ts";
import Cookies from "js-cookie";

const HomeNavbar = () => {
  const { userData } = useAppSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    dispatch(removeUserData());
    Cookies.remove("token");
    navigate("/sign-up");
  };
  return (
    <div className="py-10 px-20 border-b-2 h-20 items-center flex w-full justify-between">
      <Link to={"/"}>
        <img
          className="size-[7rem] object-contain object-left "
          src="/cuvetteLogo.svg"
          alt="logo"
        />
      </Link>
      <div className="flex gap-5 items-center">
        <Link to="/contact" className="text-xl font-medium">
          Contact
        </Link>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <div className="flex gap-4 px-3 py-2 rounded-md border-2 shadow-sm cursor-pointer items-center">
            <Avatar letter={userData?.name[0]} />
            <p className="text-sm">{userData?.name}</p>
            <SquareChevronDown size={20} className="text-neutral-500" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-full">
          <Button onClick={handleLogout} variant={"ghost"} className="px-2">
            <p>Logout</p> <LogOut />
          </Button>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default HomeNavbar;
