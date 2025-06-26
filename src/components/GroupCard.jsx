import React, { useState } from "react";
import { Link } from "react-router"; // fixed from 'react-router'
import { FaUsers } from "react-icons/fa";
import { MdEvent } from "react-icons/md";

const GroupCard = ({ group }) => {
  const [loaded, setLoaded] = useState(false);

  const { _id, groupName, image, members, startDate } = group;

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition duration-300">
      <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center">
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img
          onLoad={() => setLoaded(true)}
          src={image}
          alt={groupName}
          className={`w-full h-48 object-cover transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-xl font-bold text-indigo-600">{groupName}</h3>

        <div className="text-sm text-gray-600 flex items-center gap-1">
          <FaUsers className="text-blue-500" />
          Max: {members} members
        </div>

        <div className="text-sm text-gray-600 flex items-center gap-1">
          <MdEvent className="text-orange-500" />
          Next Event:{" "}
          <span className="text-blue-600 font-medium">{startDate}</span>
        </div>

        <Link to={`/group/${_id}`}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-all group"
          >
            See More{" "}
            <span className="inline-block ml-1 group-hover:translate-x-1 transition-all duration-200">
              →
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GroupCard;
