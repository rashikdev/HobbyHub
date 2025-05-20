import React from "react";
import Slider from "../components/Slider";
import { useLoaderData } from "react-router";
import FeaturedGroup from "../components/FeaturedGroup";
import NewestGroup from "../components/NewestGroup";

const Home = () => {
  const allGroups = useLoaderData();

  const featuredGroups = allGroups.filter(
    (group) => group.category === "featuredGroup"
  );

  const newestGroups = allGroups.filter(
    (group) => group.category === "newestGroup"
  );

  return (
    <div className="w-11/12 mx-auto space-y-4">
      <Slider />
      <FeaturedGroup groups={featuredGroups} />
      <NewestGroup groups={newestGroups} />
    </div>
  );
};

export default Home;
