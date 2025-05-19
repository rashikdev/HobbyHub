import React from "react";
import { Link } from "react-router"; // Optional if using React Router
import GoogleBtn from "../components/GoogleBtn";

const Register = () => {

  return (
    <div className="min-h-[calc(100vh-100px)] bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-400 to-indigo-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

        <div className="relative bg-white py-10 px-6 sm:px-10 sm:py-12 shadow-lg rounded-2xl">
          <h2 className="mb-6 text-center text-3xl font-extrabold text-gray-900">
            Register
          </h2>

          <form className="space-y-6">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Full Name"
                className="peer placeholder-transparent w-full h-12 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-gray-900"
              />
              <label
                htmlFor="name"
                className="absolute left-3 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm"
              >
                Full Name
              </label>
            </div>

            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Email"
                className="peer placeholder-transparent w-full h-12 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-gray-900"
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
                id="photo"
                name="photo"
                type="url"
                required
                placeholder="Photo URL"
                className="peer placeholder-transparent w-full h-12 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-gray-900"
              />
              <label
                htmlFor="photo"
                className="absolute left-3 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm"
              >
                Photo URL
              </label>
            </div>

            <div className="relative">
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Password"
                className="peer placeholder-transparent w-full h-12 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-gray-900"
              />
              <label
                htmlFor="password"
                className="absolute left-3 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm"
              >
                Password
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
            >
              Register
            </button>
          </form>
          <GoogleBtn title="Register with Google" />
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-indigo-500 hover:text-indigo-700 font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
