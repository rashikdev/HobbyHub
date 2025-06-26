import React, { use } from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import { CgMenuRightAlt } from "react-icons/cg";
import userLogo from "../assets/user.png";
import { AuthContext } from "../context/AuthProvider";
import { IoMdLogOut } from "react-icons/io";
import toast from "react-hot-toast";
import ThemeToggle from "./ThemeToggle";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, logoutUser, loading } = use(AuthContext);

  const handleLogout = () => {
    toast.error("Logout Successfully");
    logoutUser();
  };

  return (
    <div className="bg-base-300/60 backdrop-blur-md py-4 z-50 md:px-13 px-2 flex justify-between items-center shadow-md font-bold sticky top-0">
      {/* nav items */}
      <div className="flex items-center gap-1">
        <div className="dropdown lg:hidden block">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <CgMenuRightAlt size={20} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 py-4 shadow space-y-3 font-medium"
          >
            <NavLink
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/allGroups"
            >
              All Groups
            </NavLink>
            {user && (
              <NavLink
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            )}
            <NavLink
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/about"
            >
              About Us
            </NavLink>
            <NavLink
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>
        </div>
        <NavLink className="flex items-center" to="/">
          <img className="md:w-10 w-7 rounded-full" src={logo} alt="" />
          <h2 className="font-bold text-xl md:text-2xl md:ml-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-[Nova_Cut]">
            HobbyHub
          </h2>
        </NavLink>
      </div>

      <div className="flex items-center gap-7 text-[16px]">
        <NavLink
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) =>
            `${
              isActive
                ? "border-b-2 border-indigo-500 px-2 font-semibold rounded"
                : ""
            } hidden lg:block`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/allGroups"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) =>
            `${
              isActive
                ? "border-b-2 border-indigo-500 px-2 font-semibold rounded"
                : ""
            } hidden lg:block`
          }
        >
          All Groups
        </NavLink>
        {user && (
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${
                isActive
                  ? "border-b-2 border-indigo-500 px-2 font-semibold rounded"
                  : ""
              } hidden lg:block`
            }
          >
            Dashboard
          </NavLink>
        )}
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${
              isActive
                ? "border-b-2 border-indigo-500 px-2 font-semibold rounded"
                : ""
            } hidden lg:block`
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${
              isActive
                ? "border-b-2 border-indigo-500 px-2 font-semibold rounded"
                : ""
            } hidden lg:block`
          }
        >
          Contact
        </NavLink>
        {/* <NavLink
          to="/createGroup"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) =>
            `${
              isActive
                ? "border-b-2 border-indigo-500 px-2 font-semibold rounded"
                : ""
            } hidden lg:block`
          }
        >
          Create Group
        </NavLink>
        <NavLink
          to="/myGroup"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) =>
            `${
              isActive
                ? "border-b-2 border-indigo-500 px-2 font-semibold rounded"
                : ""
            } hidden lg:block mr-3`
          }
        >
          My Groups
        </NavLink> */}

        <div className="-mr-2 md:mr-0">
          <ThemeToggle
            data-tooltip-id="theme-tooltip"
            data-tooltip-content="Change Theme"
          />
        </div>

        {/* Spinner + pulse while loading */}
        {loading ? (
          <div className="flex items-center gap-2 md:gap-4">
            {/* Rounded avatar pulse */}
            <div className="relative flex justify-center items-center md:w-10 md:h-10 w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-300 animate-pulse">
              <div className="absolute w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            {/* Spinner */}
            <button className="flex text-red-500 cursor-pointer items-center gap-2 hover:bg-red-500 hover:text-white py-1 px-2 rounded-lg transition-all duration-300">
              <IoMdLogOut size={25} />
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 md:gap-4">
            {/* Profile Image */}
            <img
              data-tooltip-id="user-tooltip"
              data-tooltip-content={user?.displayName}
              className="md:w-10 md:h-10 w-8 h-8 cursor-pointer rounded-full"
              src={user?.photoURL ? user.photoURL : userLogo}
              alt="user"
            />
            <NavLink to="/login">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="flex text-red-500 cursor-pointer items-center gap-2 hover:bg-red-500 hover:text-white py-1 px-2 rounded-lg transition-all duration-300"
                  data-tooltip-id="logout-tooltip"
                  data-tooltip-content="Logout"
                >
                  <IoMdLogOut size={25} />
                </button>
              ) : (
                <button
                  className="flex items-center"
                  data-tooltip-id="login-tooltip"
                  data-tooltip-content="Login to your account"
                >
                  <p className="group relative inline-block overflow-hidden bg-[#1fbb10ea] rounded-lg px-4 py-1.5 outline-none">
                    <span className="absolute inset-y-0 left-0 w-0 bg-indigo-500 transition-all group-hover:w-full"></span>
                    <span className="flex relative text-sm font-medium md:p-1 text-white transition-colors group-hover:text-white">
                      Login
                    </span>
                  </p>
                </button>
              )}
            </NavLink>
          </div>
        )}
      </div>

      {/* ✅ Tooltips */}
      <Tooltip id="logout-tooltip" place="bottom" />
      <Tooltip id="login-tooltip" place="bottom" />
      <Tooltip id="theme-tooltip" place="bottom" />
      <Tooltip id="user-tooltip" place="bottom" />
    </div>
  );
};

export default Navbar;
