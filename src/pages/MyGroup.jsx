import React, { useEffect, useState } from "react";
import { GrFormEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

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
      <h2 className="text-2xl sm:text-3xl font-bold mb-10">Groups</h2>
      {loading ? (
        <div className="min-h-[calc(100vh-457px)] flex items-center justify-center gap-2">
          <span className="text-xl text-blue-500">Loading Groups</span>
          <div className="w-7 h-7 border-4 border-blue-500 border-t-red-500 border-r-green-500 border-b-yellow-500 rounded-full animate-spin"></div>
        </div>
      ) : groups.length === 0 ? (
        <div className="text-center mt-10">
          <img
            src="/no-data.svg"
            alt="No groups"
            className="mx-auto w-40 opacity-80"
          />
          <h2 className="text-xl font-semibold text-gray-600 mt-4">
            No groups created yet
          </h2>
          <p className="text-gray-500 mt-2">
            Start by creating your first group!
          </p>
          <NavLink to="/createGroup">
            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Create Group
            </button>
          </NavLink>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow">
          <div className="hidden md:block">
            <table className="min-w-full bg-white text-sm sm:text-base text-left text-gray-700">
              <thead className="bg-gray-100 text-gray-800 font-semibold">
                <tr>
                  <th className="px-6 py-3">Group Name</th>
                  <th className="px-6 py-3">Description</th>
                  <th className="px-6 py-3">Meeting Location</th>
                  <th className="px-6 py-3">Members</th>
                  <th className="px-6 py-3">Start Date</th>
                  <th className="px-6 py-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {groups.map((group, index) => (
                  <tr
                    key={index}
                    className="border-t hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium">{group.groupName}</td>
                    <td className="px-6 py-4 text-blue-600 md:w-[300px]">
                      {group.description}
                    </td>
                    <td className="px-6 py-4">{group.location}</td>
                    <td className="px-6 py-4">{group.members}</td>
                    <td className="px-6 py-4">{group.startDate}</td>
                    <td>
                      <Link
                        to={`/updateGroup/${group._id}`}
                        className="px-6 py-4 space-x-3"
                      >
                        <button className="cursor-pointer text-blue-600">
                          <GrFormEdit size={25} />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(group._id)}
                        className="cursor-pointer"
                      >
                        <MdDeleteForever size={24} color="red" />
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
                className="bg-white p-4 border rounded-lg shadow-sm flex flex-col gap-2"
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
