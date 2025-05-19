import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayoute = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <h2>Footer</h2>
    </div>
  );
};

export default MainLayoute;
