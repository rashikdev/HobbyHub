import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import { FaGithub, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
const Profile = () => {
  const { user, updateUser, changePassword } = useAuth();
  const [name, setName] = useState(user?.displayName || "");
  const [edit, setEdit] = useState(false);
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await updateUser({ displayName: name, photoURL });
      toast.success("Profile updated successfully!");
      setLoading(false);
      setEdit(false);
    } catch (err) {
      toast.error("Failed to update profile.");
    }
  };

  const handlePasswordChange = async () => {
    changePassword(user?.email)
      .then(() => {
        toast.success("We have sent you an email to reset your password.");
        setTimeout(() => {
          setShow(true);
        }, 2000);
      })
      .catch((error) => {
        toast.error("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="mt-10 p-6 shadow-md rounded-md border-indigo-500 space-y-10 relative">
      <h2 className="text-2xl font-bold text-indigo-600 mb-6">👤 My Profile</h2>
      <div className="flex flex-col gap-7 md:flex-row">
        <div className="border-2 rounded-md border-indigo-500 flex-1 flex justify-center py-6">
          <img
            src={
              user?.photoURL || "https://i.ibb.co/2t8g3hJ/default-avatar.png"
            }
            alt="Profile"
            className="w-[70%] border-indigo-500-4 border rounded-md border-indigo-500-indigo-300 object-cover"
          />
        </div>
        <div className="border-l-2 border-r-2 rounded-md border-indigo-500 flex-2 p-6 flex justify-between">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold mb-2">
              Name: {user?.displayName}
            </h2>
            <p className="text-gray-600">Email: {user?.email}</p>
            <p>Phone: 01234567890</p>
            <p>Date of Birth: 01/01/2000</p>
            <p>Address: Dhaka, Bangladesh</p>
          </div>
          <div
            onClick={() => setEdit(!edit)}
            className="bg-indigo-100 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <CiEdit size={24} color="#3b82f6" />
          </div>
        </div>
      </div>
      <div className="border rounded-md border-indigo-500 p-6 space-y-3">
        <h3 className="text-2xl font-semibold mb-2">Social Media</h3>
        <ul className="flex gap-7 mt-8">
          <li>
            <a
              href="https://github.com/rashikdev"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-500 transition"
            >
              <FaGithub size={40} /> Github
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/rahsikkhan513"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaTwitter size={40} /> Twitter
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook size={40} /> Facebook
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin size={40} /> LinkedIn
            </a>
          </li>
        </ul>
      </div>
      <div className="border rounded-md border-indigo-500 md:p-6 p-4">
        <h3 className="text-2xl font-semibold mb-3">Security</h3>
        <div className="flex flex-col md:flex-row md:items-center justify-between mr-30 w-full gap-5">
          <button
            onClick={handlePasswordChange}
            className="text-red-500 btn btn-outline w-fit"
          >
            Change Password
          </button>
          {show && (
            <div className="flex items-center gap-4 shadow-lg rounded-md p-2">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-info h-6 w-6 shrink-0"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <div className="text-sm md:text-[16px] inline-block text-yellow-600">
                  Please check your email spam folder also
                </div>
              </div>
              <button onClick={() => setShow(false)} className="btn btn-sm">
                Ok
              </button>
            </div>
          )}
        </div>
      </div>
      {edit && (
        <div className="absolute top-0 left-0 bg-black/20 backdrop-blur-sm w-full h-screen flex justify-center items-center">
          <div className="w-[60%] h-[46vh] rounded-md bg-white p-12">
            <form onSubmit={handleUpdate} className="space-y-8">
              <div>
                <label className="block font-medium mb-1">Name</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded-md"
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block font-medium mb-1">Photo URL</label>
                <input
                  type="text"
                  className="w-full border px-3 py-2 rounded-md"
                  defaultValue={photoURL}
                  onChange={(e) => setPhotoURL(e.target.value)}
                />
              </div>

              <div className="flex gap-3 justify-end pt-5">
                <button
                  onClick={() => setEdit(false)}
                  type="submit"
                  className="px-4 bg-indigo-400 text-white py-2 rounded-md hover:bg-indigo-700 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition cursor-pointer"
                >
                  {loading ? "Updating..." : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
