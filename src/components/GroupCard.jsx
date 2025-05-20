import React, { useState } from "react";
import toast from "react-hot-toast";

const GroupCard = ({ group }) => {
  const [joined, setJoined] = useState(false);

  const handleJoinGroup = () => {
    const today = new Date();
    const groupStart = new Date(group.startDate);

    if (groupStart < today) {
      toast.error("This group is no longer active!");
      return;
    }

    toast.success(`You've joined ${group.name}!`);
    setJoined(true);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <img src={group.image} alt={group.name} className="rounded-lg mb-3 md:min-h-[140px] h-[90px]" />
      <h3 className="font-semibold text-[15px]">{group.name}</h3>
      <p className="text-sm text-gray-600">{group.members}</p>
      <p className="text-sm text-blue-500">Next event: {group.nextEvent}</p>
      {!joined ? (
        <button
          onClick={handleJoinGroup}
          className="mt-4 w-full bg-blue-500 text-white md:py-2 py-1 rounded-full hover:bg-blue-600 cursor-pointer"
        >
          Join Group
        </button>
      ) : (
        <button
          disabled
          className="mt-4 w-full bg-gradient-to-br from-[#e6df1d93] to-[#ff0000c3] text-white md:py-2 py-1 rounded-full cursor-not-allowed"
        >
          Joined
        </button>
      )}
    </div>
  );
};

export default GroupCard;
