import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-zinc-300">
      <div className="max-w-8xl mx-auto p-3 flex justify-between items-center">
        <Link to="/" className="font-bold cursor-pointer hover:text-white">
          Auth App
        </Link>
        <nav>
          <ul className="flex gap-5">
            <NavItem to="/Home">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/SignIn">Sign In</NavItem>
          </ul>
        </nav>
      </div>
    </header>
  );
};

const NavItem = ({ to, children }) => {
  return (
    <li>
      <Link to={to} className="hover:text-white">
        {children}
      </Link>
    </li>
  );
};

export default Header;
