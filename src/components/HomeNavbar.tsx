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
    <div className="py-10 md:px-20 px-5 border-b-2 h-20 items-center flex  justify-between   w-full ">
      <Link to={"/"}>
        <img
          className="flex-shrink-0 sm:size-[7rem] size-[5rem] object-contain object-left  "
          src="/cuvetteLogo.svg"
          alt="logo"
        />
      </Link>
      <div className="flex gap-5 sm:gap-8 items-center">
        <Link to="/contact" className="text-md sm:text-xl font-medium">
          Contact
        </Link>
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex gap-2 sm:gap-4 px-3 py-2 rounded-md border-2 shadow-sm cursor-pointer items-center">
              <Avatar letter={userData?.name[0]} />
              <p className="text-sm whitespace-nowrap hidden sm:block">
                {userData?.name}
              </p>
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
    </div>
  );
};

export default HomeNavbar;
