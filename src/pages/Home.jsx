import React, { useState } from "react";
import { useLoaderData } from "react-router";
import FeaturedGroup from "../components/FeaturedGroup";
import NewestGroup from "../components/NewestGroup";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import Banner from "../components/Banner";
// import { Twirl as Hamburger } from "hamburger-react";
const Home = () => {
  const allGroups = useLoaderData();

  const featuredGroups = allGroups.filter(
    (group) => group.groupType === "featuredGroup"
  );

  const newestGroups = allGroups.filter(
    (group) => group.groupType === "newestGroup"
  );

  return (
    <div>
      <Banner />
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
