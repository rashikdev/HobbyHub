import React, { useState } from "react";
import Slider from "../components/Banner";
import { useLoaderData } from "react-router";
import FeaturedGroup from "../components/FeaturedGroup";
import NewestGroup from "../components/NewestGroup";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
// import { Twirl as Hamburger } from "hamburger-react";
const Home = () => {
  const allGroups = useLoaderData();

  const featuredGroups = allGroups.filter(
    (group) => group.hobbyCategory === "featuredGroup"
  );

  const newestGroups = allGroups.filter(
    (group) => group.hobbyCategory === "newestGroup"
  );

  return (
    <div>
      <Slider />
      <div className="w-11/12 mx-auto space-y-14">
        <FeaturedGroup groups={featuredGroups} />
        <NewestGroup groups={newestGroups} />
        <TestimonialsSection></TestimonialsSection>
        <FaqSection></FaqSection>
      </div>
    </div>
  );
};

export default Home;
