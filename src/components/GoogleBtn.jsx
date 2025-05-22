import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";

const GoogleBtn = ({ title }) => {
  const { signInWithGoogle } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        toast.success("SignIn Successfully");
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <div className="flex items-center py-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        <p className="px-3 text-xl">or</p>
        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="flex items-center justify-center w-full p-2 gap-4 bg-gray-300 rounded-md  cursor-pointer mb-5 hover:bg-white transition-all duration-300 text-black"
        >
          <FcGoogle
            className="cursor-pointer transition-all duration-200"
            size={23}
          ></FcGoogle>
          <p>{title}</p>
        </button>
      </div>
    </div>
  );
};

export default GoogleBtn;
