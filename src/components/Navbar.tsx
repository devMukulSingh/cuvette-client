import { Link } from "react-router-dom";

const Navbar = () => {
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
    </div>
  );
};

export default Navbar;
