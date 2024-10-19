import { useAppSelector } from ".././redux/hooks";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";
import {  SquareChevronDown } from "lucide-react";

const HomeNavbar = () => {
  const { userData } = useAppSelector((state) => state);
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
        <div className="flex gap-4 px-3 py-2 rounded-md border-2 shadow-sm cursor-pointer items-center">
          <Avatar letter={userData?.name[0]} />
          <p className="text-sm">{userData?.name}</p>
          <SquareChevronDown size={20} className="text-neutral-500" />
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
