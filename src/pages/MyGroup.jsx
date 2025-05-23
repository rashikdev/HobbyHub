import React, { useEffect, useState } from "react";
import { GrFormEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import nodata from "../assets/nodata.jpg";

const MyGroup = () => {
  const { user } = React.useContext(AuthContext);
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://hobby-hub-server-ashen.vercel.app/groups")
      .then((res) => res.json())
      .then((data) => {
        const myGroups = data.filter((group) =>
          group.email.includes(user.email)
        );
        setGroups(myGroups);
        setLoading(false);
      });
  }, [user.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hobby-hub-server-ashen.vercel.app/groups/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              toast.success("Group deleted successfully");
              const remaining = groups.filter((group) => group._id !== id);
              setGroups(remaining);
            } else {
              toast.error("Failed to delete group. Try again.");
            }
          })
          .catch(() => {
            toast.error("Something went wrong. Please check your connection.");
          });
      }
    });
  };

  return (
    <div className="w-full min-h-[calc(100vh-370px)] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="font-bold mb-10 text-fuchsia-500 font-[Playwrite_HU] md:hidden">
        My Groups
      </h2>
      {loading ? (
        <div className="min-h-[calc(100vh-457px)] flex items-center justify-center gap-2">
          <span className="md:text-xl text-blue-500">Loading Groups</span>
          <div className="w-7 h-7 border-4 border-blue-500 border-t-red-500 border-r-green-500 border-b-yellow-500 rounded-full animate-spin"></div>
        </div>
      ) : groups.length === 0 ? (
        <div className="text-center md:my-18">
          <img
            src={nodata}
            alt="No groups"
            className="mx-auto md:w-80 w-40 opacity-80 rounded-bl-4xl rounded-tr-4xl shadow-[0_0_30px_#F75A5A]"
          />
          <h2 className="text-xl md:text-2xl font-semibold mt-4">
            No groups created yet
          </h2>
          <p className="mt-2">Start by creating your first group!</p>
          <NavLink to="/createGroup">
            <button className="mt-4 text-white px-4 py-2 md:px-5 rounded-md bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 cursor-pointer hover:shadow-[0_0_20px_#F75A5A] hover:scale-95 transition-all du md:text-xl">
              Create Group
            </button>
          </NavLink>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow mt-8">
          <div className="hidden md:block">
            <table className="min-w-full bg-gradient-to-br from-orange-400 via-blue-200 to-red-200 text-sm sm:text-base text-left text-gray-700">
              <thead className="font-semibold">
                <tr className="">
                  <th className="px-6 py-3">Group Name</th>
                  <th className="px-6 py-3">Description</th>
                  <th className="px-6 py-3">Meeting Location</th>
                  <th className="px-6 py-3">Members</th>
                  <th className="px-6 py-3">Start Date</th>
                  <th className="pl-9 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {groups.map((group, index) => (
                  <tr key={index} className="border-t transition-colors">
                    <td className="px-6 py-4 font-medium">{group.groupName}</td>
                    <td className="px-6 py-4 text-blue-600 md:w-[300px]">
                      {group.description}
                    </td>
                    <td className="px-6 py-4">{group.location}</td>
                    <td className="px-6 py-4">{group.members}</td>
                    <td className="px-6 py-4">{group.startDate}</td>
                    <td className="">
                      <Link
                        to={`/updateGroup/${group._id}`}
                        className="px-6"
                      >
                        <button className="cursor-pointer hover:text-red-500 text-blue-600 hover:bg-blue-300 rounded-full transition-all duration-200 p-1">
                          <GrFormEdit size={25} />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(group._id)}
                        className="cursor-pointer hover:bg-red-400 text-red-600 hover:text-white rounded-full  transition-all duration-200 p-1"
                      >
                        <MdDeleteForever size={24} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden text-black flex flex-col gap-4">
            {groups.map((group, index) => (
              <div
                key={index}
                className="bg-white p-4 border rounded-lg shadow-sm flex flex-col gap-2 bg-gradient-to-br from-orange-400 via-blue-200 to-red-200"
              >
                <div className="flex justify-between">
                  <span className="font-semibold">Group Name:</span>
                  <span>{group.groupName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Description:</span>
                  <span className="text-blue-600 w-[200px] text-right">
                    {group.description}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Location:</span>
                  <span>{group.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Members:</span>
                  <span>{group.members}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Start Date:</span>
                  <span>{group.startDate}</span>
                </div>
                <div className="flex justify-end space-x-5 pt-2">
                  <Link to={`/updateGroup/${group._id}`}>
                    <GrFormEdit
                      className="cursor-pointer text-blue-600"
                      size={25}
                    />
                  </Link>
                  <MdDeleteForever
                    className="cursor-pointer"
                    onClick={() => handleDelete(group._id)}
                    size={24}
                    color="red"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyGroup;
