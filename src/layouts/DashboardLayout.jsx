import React from "react";
import { FaHome, FaUserEdit, FaUserPlus } from "react-icons/fa";
import { NavLink, Outlet, useLoaderData } from "react-router";
import logo from "../assets/logo.png";
import { FaPeopleGroup } from "react-icons/fa6";
import ThemeToggle from "../components/ThemeToggle";
import { MdGroups, MdOutlineContactMail } from "react-icons/md";
import { RiInfoCardLine } from "react-icons/ri";
const DashboardLayout = () => {
  const data = useLoaderData();

  return (
    <div className="lg:flex">
      <div className="drawer lg:drawer-open w-fit">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="flex justify-center items-center">
          <div className="drawer-content flex flex-col lg:hidden">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 text-xl flex-1 font-semibold px-2">
            Dashboard
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-300 text-base-content min-h-full w-80 p-4 text-xl font-semibold space-y-5">
            {/* Sidebar content here */}
            <li>
              <NavLink className="flex items-center" to="/">
                <img className="md:w-10 w-7 rounded-full" src={logo} alt="" />
                <h2 className="font-bold text-xl md:text-2xl md:ml-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-[Nova_Cut]">
                  HobbyHub
                </h2>
              </NavLink>
            </li>
            <li className="mt-8">
              <NavLink
                to="/dashboard"
                end
                className={({ isActive }) =>
                  isActive ? "text-primary font-extrabold" : ""
                }
              >
                <FaHome /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/all-group"
                end
                className={({ isActive }) =>
                  isActive ? "text-primary font-extrabold" : ""
                }
              >
                <MdGroups /> All Groups
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/myGroup"
                className={({ isActive }) =>
                  isActive ? "text-primary font-extrabold" : ""
                }
              >
                <FaPeopleGroup />
                My Group
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/createGroup"
                className={({ isActive }) =>
                  isActive ? "text-primary font-extrabold" : ""
                }
              >
                <FaUserPlus /> Create Group
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-primary font-extrabold" : ""
                }
              >
                <RiInfoCardLine /> About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-primary font-extrabold" : ""
                }
              >
                <MdOutlineContactMail /> Contact
              </NavLink>
            </li>
          </ul>
          <div className="absolute bottom-5 left-5">
            <ThemeToggle></ThemeToggle>
          </div>
          <div className="absolute bottom-4 md:right-5 right-30">
            <li className="menu py-0 text-xl">
              <NavLink to="/dashboard/profile" className="outline outline-blue-600 px-8">
                <FaUserEdit /> My Profile
              </NavLink>
            </li>
          </div>
        </div>
      </div>
      <div className="w-full h-screen md:p-8 p-5 space-y-3">
        <Outlet context={data}></Outlet>
      </div>
    </div>
  );
};

export default DashboardLayout;
