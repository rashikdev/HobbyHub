import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import photography from "../assets/photography.jpg";
import painting from "../assets/painting.jpg";
import gaming from "../assets/gaming.jpg";

const Slider = () => {
  const sliderData = [
    {
      id: 1,
      image: photography,
      category: "Photography",
    },
    {
      id: 2,
      image: painting,
      category: "Art",
    },
    {
      id: 3,
      image: gaming,
      category: "Gaming",
    },
  ];
  return (
    <div className="w-full md:w-10/12 mx-auto my-10">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        interval={4000}
      >
        {sliderData.map((data) => (
          <div
            key={data.id}
            className="relative bg-gray-100 rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={data.image}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-6 mb-3 text-white">
              <p className="text-sm md:text-lg">{data.description}</p>
              <span className="text-xs mt-1 italic">
                {data.category}
              </span>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
