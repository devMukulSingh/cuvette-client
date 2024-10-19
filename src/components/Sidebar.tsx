import { HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="
    w-20 
    flex 
    justify-center 
    border-r 
    h-full
    py-10
    "
    >
      <Link to={"/"}>
        <HomeIcon className="text-neutral-500" size={25} />
      </Link>
    </div>
  );
};

export default Sidebar;
