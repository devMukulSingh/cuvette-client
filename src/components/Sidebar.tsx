import { HomeIcon, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      className="
    min-w-20 
    flex
    flex-col
    gap-10
    items-center 
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
