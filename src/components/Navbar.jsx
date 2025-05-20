import React, { use } from "react";
import { NavLink } from "react-router";
import logo from "../assets/logo.png";
import { CgMenuRightAlt } from "react-icons/cg";
import userLogo from "../assets/user.png";
import { AuthContext } from "../context/AuthProvider";
import { IoMdLogOut } from "react-icons/io";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, logoutUser } = use(AuthContext);
  console.log(user);
  const handleLogout = () => {
    toast.error("Logout Successfully");
    logoutUser();
  };
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
                ? "bg-[#1A80E5] py-2 px-3 rounded-xl font-semibold text-white"
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
            {user ? (
              <button
                onClick={handleLogout}
                title="Logout"
                className="flex text-red-500 cursor-pointer items-center gap-2"
              >
                <IoMdLogOut size={20} />
              </button>
            ) : (
              <button>Login</button>
            )}
          </NavLink>
          <img
            title={user?.displayName}
            className="md:w-10 md:h-10 w-8 h-8 cursor-pointer rounded-full"
            src={user?.photoURL || userLogo}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
