import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";

const GroupCard = ({ group }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <div className="w-full relative bg-gray-100 overflow-hidden flex items-center justify-center">
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
      <p className="text-sm text-gray-600">{group.members}</p>
      <p className="text-sm text-blue-500">Next event: {group.nextEvent}</p>
      <Link to={`/group-details/${group.id}`}>
        <button className="mt-4 w-full bg-blue-500 text-white md:py-2 py-1 rounded-full hover:bg-blue-600 cursor-pointer">
          Group Details
        </button>
      </Link>
    </div>
  );
};

export default GroupCard;
