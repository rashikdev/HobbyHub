import React, { useState } from "react";
import { useLoaderData, useParams } from "react-router";

const GroupDetails = () => {
  const [loaded, setLoaded] = useState(false);
  const groups = useLoaderData();
  const { id } = useParams();
  const group = groups.find((group) => group.id === parseInt(id));
  const {
    name,
    image,
    description,
    category,
    location,
    members,
    nextEvent,
    startDate,
  } = group;
  console.log(group);
  return (
    <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-6 my-10 text-black">
      <h2 className="text-3xl font-bold mb-6 text-indigo-600">Group Details</h2>

      <div className="md:flex md:gap-5">
        <div className="w-full relative bg-gray-100 overflow-hidden flex items-center justify-center">
          {!loaded && (
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <img
            src={image}
            alt="Group"
            onLoad={() => setLoaded(true)}
            className="w-full md:h-80 object-cover rounded-lg mb-6"
          />
        </div>

        <div className="space-y-4 p-4">
          <h3 className="font-bold text-[17px]">
            Description:{" "}
            <span className="text-[15px] text-gray-500 font-medium">
              {description}
            </span>
          </h3>
          <h3 className="font-bold text-[17px]">
            Group Name:{" "}
            <span className="text-[15px] text-gray-500 font-medium">
              {name}
            </span>
          </h3>
          <h3 className="font-bold text-[17px]">
            Hobby Category:{" "}
            <span className="text-[15px] text-gray-500 font-medium">
              {category}
            </span>
          </h3>
          <h3 className="font-bold text-[17px]">
            Meeting Location:{" "}
            <span className="text-[15px] text-gray-500 font-medium">
              {location}
            </span>
          </h3>

          <h3 className="font-bold text-[17px]">
            Max Members:{" "}
            <span className="text-[15px] text-gray-500 font-medium">
              {members}
            </span>
          </h3>

          <h3 className="font-bold text-[17px]">
            Start Date:{" "}
            <span className="text-[15px] text-gray-500 font-medium">
              {startDate}
            </span>
          </h3>
        </div>
      </div>

      <div className="mt-8 text-center">
        <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition">
          Join Group
        </button>
      </div>
    </div>
  );
};

export default GroupDetails;
