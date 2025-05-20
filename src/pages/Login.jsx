import React, { use, useState } from "react";
import GoogleBtn from "../components/GoogleBtn";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import { TbEye, TbEyeClosed } from "react-icons/tb";
import toast from "react-hot-toast";

const Login = () => {
  const [show, setShow] = useState(false);
  const { loginWithEmail } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginWithEmail(email, password)
      .then((result) => {
        toast.success("Login Successfully");
        navigate(location.state || "/");
      })
      .catch((error) => {
        toast.error("Invalid email or password");
      });
  };

  return (
    <div className="min-h-[calc(100vh-100px)] bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

        <div className="relative bg-white py-10 px-6 sm:px-10 sm:py-12 shadow-lg rounded-2xl">
          <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email address"
                className="peer placeholder-transparent w-full h-12 px-3 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-cyan-500"
              />
              <label
                htmlFor="email"
                className="absolute left-3 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm"
              >
                Email Address
              </label>
            </div>

            <div className="relative">
              <input
                id="password"
                name="password"
                type={show ? "text" : "password"}
                required
                placeholder="Password"
                className="peer placeholder-transparent w-full h-12 px-3 border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-cyan-500"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              >
                {show ? <TbEyeClosed size={23} /> : <TbEye size={23} />}
              </button>
              <label
                htmlFor="password"
                className="absolute left-3 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm"
              >
                Password
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center bg-cyan-500 text-white py-2 px-4 rounded-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
              >
                Submit
              </button>
            </div>
          </form>

          <GoogleBtn title="Login with Google" />
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-500 hover:text-indigo-700 font-medium"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
