import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import { useLoaderData } from "react-router";
import GroupCard from "../components/GroupCard";

const AllGroup = () => {
  const [groups, setGroups] = useState([]);
  const localGroups = useLoaderData();
  useEffect(() => {
    fetch("http://localhost:5000/groups")
      .then((res) => res.json())
      .then((data) => {
        setGroups(data);
      });
  }, []);
  const allGroups = [...groups,...localGroups];
  return (
    <div className="my-12">
      <div className="w-11/12 mx-auto">
        <Slider></Slider>
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {allGroups.map((group, index) => (
          <GroupCard key={index} group={group}></GroupCard>
        ))}
      </div>
    </div>
  );
};

export default AllGroup;
