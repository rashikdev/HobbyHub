import React from "react";
import Slider from "../components/Slider";
import { useLoaderData } from "react-router";
import FeaturedGroup from "../components/FeaturedGroup";
import NewestGroup from "../components/NewestGroup";
import TestimonialsSection from "../components/TestimonialsSection";

const Home = () => {
  const allGroups = useLoaderData();

  const featuredGroups = allGroups.filter(
    (group) => group.hobbyCategory === "featuredGroup"
  );

  const newestGroups = allGroups.filter(
    (group) => group.hobbyCategory === "newestGroup"
  );

  return (
    <div className="w-11/12 mx-auto space-y-4">
      <Slider />
      <FeaturedGroup groups={featuredGroups} />
      <NewestGroup groups={newestGroups} />
      <TestimonialsSection></TestimonialsSection>
    </div>
  );
};

export default Home;
