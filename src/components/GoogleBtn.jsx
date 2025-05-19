import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleBtn = ({ title }) => {
  return (
    <div>
      <div className="flex items-center py-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
        <p className="px-3 text-xl">or</p>
        <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 gap-4 border rounded-md border-gray-600 cursor-pointer mb-5 hover:bg-gray-600 transition-all duration-300"
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
