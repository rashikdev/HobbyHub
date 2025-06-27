import { useContext } from "react";
import { FaEnvelope, FaUserAlt, FaUserTag } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router";
import { motion } from "framer-motion";

const UserInfoCard = () => {
  const { user, logoutUser } = useAuth();
  const hanleLogout = () => {
    logoutUser()
      .then(() => {
        toast.success("Logout Successfully");
      })
      .catch((error) => console.log(error));
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="rounded-xl p-2 flex items-center md:gap-6 gap-3 relative"
    >
      {/* Avatar */}
      <div>
        <img
          src={
            user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar-placeholder.png"
          }
          alt="User Avatar"
          className="md:w-20 md:h-20 w-12 h-12 rounded-full border-4 border-indigo-300 shadow-md"
        />
      </div>

      {/* Info */}
      <div className="flex-1 md:space-y-1">
        <h3 className="text-xl font-bold text-indigo-700 flex items-center gap-2">
          <FaUserAlt className="text-indigo-500" />{" "}
          {user?.displayName || "User"}
        </h3>
        <p className="text-gray-400 flex items-center gap-2">
          <FaEnvelope className="text-blue-400" />{" "}
          {user?.email || "No email found"}
        </p>
        <p className="text-gray-400 flex items-center gap-2">
          <FaUserTag className="text-green-500" /> {user?.role || "Member"}
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-end gap-3 md:gap-6 absolute md:right-5 right-2">
        <Link to="/dashboard/profile">
          <button className="md:px-5 md:py-2 py-1 px-2 bg-indigo-100 hover:bg-indigo-200 text-sm rounded text-indigo-700 font-bold cursor-pointer">
            Update
          </button>
        </Link>
        <button
          onClick={hanleLogout}
          className="md:px-5 md:py-2 py-1 px-2 bg-red-500 hover:bg-red-700 text-sm rounded text-white font-bold cursor-pointer"
        >
          Logout
        </button>
      </div>
    </motion.div>
  );
};

export default UserInfoCard;
