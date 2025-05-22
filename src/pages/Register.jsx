import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router"; // Optional if using React Router
import GoogleBtn from "../components/GoogleBtn";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { TbEye, TbEyeClosed } from "react-icons/tb";

const Register = () => {
  const { createUser, user, updateUser, setUser } = use(AuthContext);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  // console.log(user);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo_url = form.photo_url.value;
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password must contain at least one lowercase letter");
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateUser({
          displayName: name,
          photoURL: photo_url,
        })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo_url });
            toast.success("Register Successfully");
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-[calc(100vh-100px)] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-400 to-indigo-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>

        <div className="relative bg-[#39f7cee7] py-10 px-6 sm:px-10 sm:py-12 shadow-lg rounded-2xl">
          <h2 className="mb-6 text-center text-3xl font-extrabold">
            Register
          </h2>

          <form onSubmit={handleRegister} className="space-y-6">
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
                name="photo_url"
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
                type={show ? "text" : "password"}
                required
                placeholder="Password"
                className="peer placeholder-transparent w-full h-12 px-3 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-500 text-gray-900"
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

            <button
              type="submit"
              className="w-full flex justify-center bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 cursor-pointer"
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
