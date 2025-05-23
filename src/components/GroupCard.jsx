import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";

const GroupCard = ({ group }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className=" bg-gradient-to-br from-indigo-300 via-blue-200 to-red-300 p-4 rounded-xl shadow-md">
      <div className="w-full relative overflow-hidden flex items-center justify-center">
        {!loaded && (
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img
          onLoad={() => setLoaded(true)}
          src={group.image}
          alt={group.groupName}
          className="rounded-lg mb-3 md:min-h-[140px] h-[90px]"
        />
      </div>
      <h3 className="font-semibold text-[15px] text-black">
        {group.groupName}
      </h3>
      <p className="text-sm text-gray-600 font-semibold">Max: {group.members} members</p>
      <p className="text-sm text-orange-500 font-semibold">
        Next event: <span className="text-blue-500">{group.startDate}</span>
      </p>
      <Link to={`/group/${group._id}`}>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="mt-4 w-full bg-blue-500 text-white py-1 rounded-full hover:bg-blue-600 cursor-pointer group"
        >
          See More{" "}
          <span className="inline-block md:ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-200">
            →
          </span>
        </button>
      </Link>
    </div>
  );
};

export default GroupCard;
