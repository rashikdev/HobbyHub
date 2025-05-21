import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypewriterDemo = () => {
  return (
    <div className="text-center mt-10 md:text-6xl text-2xl font-bold text-white drop-shadow">
      <span className="">
        <Typewriter
          words={["Turning hobbies into art", "Living creatively every day", "Capturing life through passion"]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </div>
  );
};

export default TypewriterDemo;
