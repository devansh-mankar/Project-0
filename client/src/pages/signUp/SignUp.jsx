import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { InputWithDropdown } from "./InputDropdown";
import { Typography } from "@material-tailwind/react";
import Password from "./password";

function SignUp() {
  return (
    <div className="relative w-full h-screen bg-zinc-300">
      <div className="flex justify-center items-center h-full">
        <form className="max-w-[500px] w-full mx-auto bg-white p-8">
          <h2 className="text-4xl font-bold text-center">Sign Up</h2>
          <Typography color="gray" className="mt-1 font-normal text-center">
            Nice to meet you! Enter your details to register.
          </Typography>
          <div className="flex justify-between py-8">
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
          <div className="flex flex-row justify-between mb-4">
            <div className=" relative flex flex-col">
              <label>First name</label>
              <input
                placeholder="John"
                className="border-2 outline-black shadow-sm relative bg-white-100 p-2 rounded "
                type="text"
              />
            </div>
            <div className="relative flex flex-col">
              <label>Last name</label>
              <input
                placeholder="Doe"
                className="border-2 outline-black shadow-sm  relative bg-white-100 p-2 rounded"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-col mb-4 gap-1">
            <label>Contact</label>
            <input
              placeholder="999-999-9999"
              className="border-2 outline-black shadow-sm  relative bg-white-100 p-2 rounded"
              type="text"
            />
          </div>
          <div className="flex flex-col mb-4 gap-1">
            <label>Email</label>
            <input
              placeholder="name@email.com"
              className="border-2 outline-black shadow-sm  relative bg-white-100 p-2 rounded"
              type="email"
            />
          </div>
          <div className="flex flex-col mb-4 gap-1">
            <label>Password</label>
            <Password />
          </div>
          <button className="w-full py-3 mt-5 bg-sky-500 hover:bg-sky-600 relative text-white rounded">
            SignUp
          </button>
          <p className="flex items-center mt-2">
            <input className="mr-2" type="checkbox" />
            Remember Me
          </p>
          <p className="text-center mt-8">
            Already have an account?{" "}
            <a href="/sign-in" className="font-medium text-gray-900">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
