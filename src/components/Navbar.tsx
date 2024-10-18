import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="py-10 px-20 border-b-2 h-20 items-center flex w-full justify-between">
      <Link to={'/'}>
        <img
          className="size-[7rem] object-contain object-left "
          src="/cuvetteLogo.svg"
          alt="logo"
        />
      </Link>
      <Link to="/contact" className="text-xl font-medium">
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
