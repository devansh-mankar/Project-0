import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
//import { InputWithDropdown } from "./InputDropdown";
import { Typography } from "@material-tailwind/react";
import Password from "./password";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineDownloading } from "react-icons/md";
import { Bounce, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(null);
  const navigate = useNavigate();

  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  //console.log(formData);
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
      toast.success("Success Notification !", {
        position: "top-center",
      });

      console.log(data);
    } catch (error) {
      setLoading(false);
      setError(true);
      toast.error("🦄 Wow so easy!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
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
            <Password id="password" onChange={handleChanges} />
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
          <div className="flex justify-center">
            <p className="text-center text-red-700 mt-5">
              {error && "something went wrong"}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
