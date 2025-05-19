import React from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import { CgMenuRightAlt } from "react-icons/cg";
import user from "../assets/user.png";
const Navbar = () => {
  return (
    <div className="bg-base-300/60 backdrop-blur-md py-4 z-50 px-5 flex justify-between items-center shadow-md font-bold sticky top-0">
      {/* nav items  */}
      <div className="flex items-center gap-1">
        <div className="dropdown md:hidden block">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <CgMenuRightAlt size={20} />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 py-4 shadow space-y-3 font-medium"
          >
            <NavLink>Home</NavLink>
            <NavLink>All Groups</NavLink>
            <NavLink>Create Group</NavLink>
            <NavLink>My Groups</NavLink>
          </ul>
        </div>
        <NavLink className="flex items-center" to="/">
          <img className="md:w-10 w-8 rounded-full" src={logo} alt="" />
          <h2 className="font-bold text-2xl ml-2 ">HobbyHub</h2>
        </NavLink>
      </div>
      <div className="flex items-center gap-7 text-[16px]">
        <NavLink
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) =>
            `${
              isActive
                ? "bg-[#1a80e5fb] py-2 px-3 rounded-xl font-semibold text-white"
                : ""
            } hidden md:block`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/all-groups"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) =>
            `${
              isActive
                ? " bg-[#1A80E5] py-2 px-3 rounded-xl font-semibold text-white"
                : ""
            } hidden md:block`
          }
        >
          All Groups
        </NavLink>
        <NavLink
          to="/create-group"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) =>
            `${
              isActive
                ? " bg-[#1A80E5] py-2 px-3 rounded-xl font-semibold text-white"
                : ""
            } hidden md:block`
          }
        >
          Create Group
        </NavLink>
        <NavLink
          to="/my-groups"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={({ isActive }) =>
            `${
              isActive
                ? " bg-[#1A80E5] py-2 px-3 rounded-xl font-semibold text-white"
                : ""
            } hidden md:block mr-5`
          }
        >
          My Groups
        </NavLink>
        <div className="flex items-center gap-4">
          <NavLink to="/login">
            <button>login</button>
          </NavLink>
          <img
            title={user?.displayName}
            className="md:w-10 md:h-10 w-8 h-8 cursor-pointer rounded-full"
            src={user}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
