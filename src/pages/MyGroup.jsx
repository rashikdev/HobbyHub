import React, { use, useEffect, useState } from "react";
import { GrFormEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { useLoaderData } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";

const MyGroup = () => {
  const { user } = use(AuthContext);
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/groups")
      .then((res) => res.json())
      .then((data) => {
        const myGroups = data.filter((group) =>
          group.email.includes(user.email)
        );
        setGroups(myGroups);
      });
  }, []);
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/groups/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Group deleted successfully");
          const remaining = groups.filter((group) => group._id !== id);
          setGroups(remaining);
        }
      });
  };
  return (
    <div className="w-full min-h-[calc(100vh-370px)] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-10">Groups</h2>

      <div className="overflow-x-auto rounded-lg shadow">
        <div className="hidden md:block">
          {/* Normal Table for md+ */}
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
                  <td className="px-6 py-4 space-x-3">
                    <button className="cursor-pointer">
                      <GrFormEdit size={25} />
                    </button>
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
          {/* Flex Layout for small devices */}
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
                <GrFormEdit className="cursor-pointer" size={25} />
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
    </div>
  );
};

export default MyGroup;
