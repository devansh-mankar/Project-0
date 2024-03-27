import { Link } from "react-router-dom";
import Dropdown from "./dropdown";

const Header = () => {
  return (
    <header className="bg-zinc-400">
      <div className="max-w-8xl mx-auto p-3 flex justify-between items-center">
        <Link to="/" className="font-bold cursor-pointer hover:text-white">
          Auth App
        </Link>
        <Dropdown />
      </div>
    </header>
  );
};

export default Header;
