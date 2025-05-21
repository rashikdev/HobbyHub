import React from "react";
import errorPage from "../assets/errorpage.jpg";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <img
        className="w-11/12 mx-auto h-[calc(100vh-80px)]"
        src={errorPage}
        alt=""
      />
    </div>
  );
};

export default ErrorPage;
