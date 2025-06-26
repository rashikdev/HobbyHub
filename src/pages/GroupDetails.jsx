import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useParams } from "react-router";

const GroupDetails = () => {
  const [groups, setGroups] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const localGroups = useLoaderData();
  const { id } = useParams();

  useEffect(() => {
    fetch("https://hobby-hub-server-ashen.vercel.app/groups")
      .then((res) => res.json())
      .then((data) => setGroups(data));
  }, []);

  const group = groups.find((g) => g._id === id);
  const lGroup = localGroups.find((g) => g._id === id);
  const mergedGroup = { ...group, ...lGroup };

  const isPastDate = (dateStr) => new Date(dateStr) < new Date();

  const handleJoin = () => {
    if (!mergedGroup.startDate) {
      toast.error("Start date not available.");
      return;
    }
    if (isPastDate(mergedGroup.startDate)) {
      toast.error("This group is no longer active.");
      return;
    }
    toast.success(`You have joined the group: ${mergedGroup.groupName}`);
    setIsJoined(true);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 my-10  rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">
        📄 Group Details
      </h2>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Image section */}
        <div className="relative overflow-hidden rounded-lg shadow-sm">
          {!loaded && (
            <div className="absolute inset-0 bg-white/50 flex items-center justify-center z-10">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={mergedGroup.image}
            onLoad={() => setLoaded(true)}
            alt="Group"
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>

        {/* Text details */}
        <div className="space-y-2">
          <DetailRow label="Group Name" value={mergedGroup.groupName} />
          <DetailRow label="Description" value={mergedGroup.description} />
          <DetailRow label="Category" value={mergedGroup.hobbyCategory} />
          <DetailRow label="Meeting Location" value={mergedGroup.location} />
          <DetailRow label="Max Members" value={mergedGroup.members} />
          <DetailRow label="Start Date" value={mergedGroup.startDate} />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-4 justify-center md:justify-start">
        {!mergedGroup.startDate || isPastDate(mergedGroup.startDate) ? (
          <p className="text-red-600 font-semibold text-lg">
            ⚠️ This group is no longer active
          </p>
        ) : (
          <>
            <button
              disabled={isJoined}
              onClick={handleJoin}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                isJoined
                  ? "bg-teal-400 text-white cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              }`}
            >
              {isJoined ? "Joined" : "Join Group"}
            </button>

            {isJoined && (
              <button
                onClick={() => {
                  setIsJoined(false);
                  toast.success("You have left the group.");
                }}
                className="px-6 py-2 rounded-md font-semibold bg-red-500 hover:bg-red-600 text-white"
              >
                Leave Group
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

// Reusable detail row component
const DetailRow = ({ label, value }) => (
  <div className="flex flex-col">
    <span className="font-semibold ">{label}</span>
    <span className="text-base font-medium text-gray-400 leading-5">
      {value || "N/A"}
    </span>
  </div>
);

export default GroupDetails;
