import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";

//import { InputWithDropdown } from "./InputDropdown";
import { Input, Typography } from "@material-tailwind/react";
//import Password from "./password";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineDownloading } from "react-icons/md";
import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();

  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);

      const res = await fetch("/server/auth/signup", {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }

      toast.success("Welcome to the club!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });

      // console.log(data);
    } catch (error) {
      setLoading(false);
      setError(true);
      toast.error("something went wrong", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  };

  return (
    <div className="relative w-full h-screen bg-zinc-300">
      <div className="flex justify-center items-center h-full">
        <form
          onSubmit={handleSubmit}
          className="shadow-md max-w-[500px] w-full mx-auto bg-white p-8"
        >
          <h2 className="text-4xl font-bold text-center">Sign Up</h2>
          <Typography
            color="gray"
            className="mt-1 font-normal text-center mb-5"
          >
            Nice to meet you! Enter your details to register.
          </Typography>
          <div className="flex flex-row justify-between mb-4">
            <div className=" relative flex flex-col">
              <label>First name</label>
              <input
                placeholder="John"
                className="border-2 outline-black shadow-sm relative bg-white-100 p-2 rounded "
                type="text"
                id="firstname"
                onChange={handleChanges}
              />
            </div>
            <div className="relative flex flex-col">
              <label>Last name</label>
              <input
                placeholder="Doe"
                className="border-2 outline-black shadow-sm  relative bg-white-100 p-2 rounded"
                type="text"
                id="lastname"
                onChange={handleChanges}
              />
            </div>
          </div>
          <div className="flex flex-col mb-4 gap-1">
            <label>Contact</label>
            <input
              placeholder="999-999-9999"
              className="border-2 outline-black shadow-sm  relative bg-white-100 p-2 rounded"
              type="text"
              id="contact"
              onChange={handleChanges}
            />
          </div>
          <div className="flex flex-col mb-4 gap-1">
            <label>Email</label>
            <input
              placeholder="name@email.com"
              className="border-2 outline-black shadow-sm  relative bg-white-100 p-2 rounded"
              type="email"
              id="email"
              onChange={handleChanges}
            />
          </div>
          <div className="flex flex-col mb-4 gap-1">
            <label>Password</label>
            <Input
              size="lg"
              className=" shadow-sm border-2 outline-black relative bg-white-100 p-2 rounded"
              placeholder="********"
              type="password"
              id="password"
              onChange={handleChanges}
            />
            <Typography
              variant="small"
              color="gray"
              className="mt-2 flex items-center gap-1 font-normal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-px h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>
              Use at least 8 characters, one uppercase, one lowercase and one
              number.
            </Typography>
          </div>
          <button
            disabled={loading}
            className="w-full py-3 mt-5 bg-sky-500 hover:bg-sky-600 relative text-white rounded"
          >
            {loading ? (
              <div className="flex justify-center">
                <MdOutlineDownloading className="size-7" />{" "}
              </div>
            ) : (
              "Sign Up"
            )}
          </button>

          <p className="flex items-center mt-2">
            <input className="mr-2" type="checkbox" />
            Remember Me
          </p>
          <p className="text-center my-5">
            Already have an account?
            <Link to="/sign-in" className="font-medium text-gray-900">
              Sign In
            </Link>
          </p>
          <div className="flex items-center justify-between mb-1 mt-2">
            <hr className="border-t border-gray-300 w-2/5" />
            <div className="mx-2">
              <p>OR</p>
            </div>
            <hr className="border-t border-gray-300 w-2/5" />
          </div>
          <div className="flex justify-between py-3">
            <p className=" cursor-pointer border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center">
              <FcGoogle className="mr-2" />
              Google
            </p>
            <p className=" cursor-pointer border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center">
              <FaFacebook className="mr-2" />
              Facebook
            </p>
            <p className=" cursor-pointer border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center">
              <FaGithub className="mr-2" />
              Github
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
