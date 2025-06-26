import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import GroupCard from "../components/GroupCard";
import Banner from "../components/Banner";

const AllGroup = () => {
  const [groups, setGroups] = useState([]);
  const localGroups = useLoaderData();
  useEffect(() => {
    fetch("https://hobby-hub-server-ashen.vercel.app/groups")
      .then((res) => res.json())
      .then((data) => {
        setGroups(data);
      });
  }, []);
  const allGroups = [...groups, ...localGroups];
  return (
    <div className="">
      <div className="w-11/12 mx-auto grid my-20 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {allGroups.map((group, index) => (
          <GroupCard key={index} group={group}></GroupCard>
        ))}
      </div>
    </div>
  );
};

export default AllGroup;
