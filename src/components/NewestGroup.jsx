import React from "react";
import GroupCard from "./GroupCard";

const NewestGroup = ({ groups }) => {
  return (
    <div className="space-y-3">
      <h2 className="md:text-2xl text-xl font-semibold text-[#dc145d] text-shadow-[0px_0px_20px_red] font-[Playwrite_HU]">
        Newest Group
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
        {groups.map((group) => (
          <GroupCard key={group._id} group={group}></GroupCard>
        ))}
      </div>
    </div>
  );
};

export default NewestGroup;
