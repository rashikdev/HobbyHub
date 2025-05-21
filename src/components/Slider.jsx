import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import photography from "../assets/photography.jpg";
import painting from "../assets/painting.jpg";
import gaming from "../assets/gaming.jpg";
import TypewriterDemo from "./Typewriter";

const Slider = () => {
  const sliderData = [
    { id: 1, image: photography },
    { id: 2, image: painting },
    { id: 3, image: gaming },
  ];

  return (
    <div className="w-full relative my-10 rounded-xl overflow-hidden shadow-xl">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={4000}
        showArrows={false}
      >
        {sliderData.map((data) => (
          <div key={data.id} className="relative">
            <img
              src={data.image}
              alt="Slider visual"
              className="w-full rounded-2xl md:h-[600px] object-cover"
            />
          </div>
        ))}
      </Carousel>

      {/* Overlay for background tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/30 to-black/50 backdrop-blur-[3px] z-10 rounded-2xl" />

      {/* Centered Typewriter */}
      <div className="absolute top-1/2 left-1/2 z-20 transform -translate-x-1/2 -translate-y-1/2 text-center px-4">
        <h1 className="text-white text-2xl md:text-4xl font-extrabold drop-shadow-md">
          <span className="text-orange-400 underline underline-offset-4">
            <TypewriterDemo />
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Slider;
