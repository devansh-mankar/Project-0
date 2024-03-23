import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-sky-300">
      <div className="flex justify-between items-center max-w-8xl mx-auto p-3 ">
        <Link to="/">
          <h1 className="font-bold cursor-pointer hover:text-white">
            Auth App
          </h1>
        </Link>
        <ul className="flex gap-5">
          <Link to="/Home">
            <li className="hover:text-white">Home</li>
          </Link>
          <Link to="/about">
            <li className="hover:text-white">About</li>
          </Link>
          <Link to="/SignIn">
            <li className="hover:text-white">Sign In</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
