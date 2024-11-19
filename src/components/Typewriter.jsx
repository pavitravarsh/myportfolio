import React from "react";
import { Typewriter } from "react-simple-typewriter"; // Ensure this package is installed

const TypewriterComponent = () => {
  return (
    <span style={{ color: "#aaaf4c", fontWeight: "bold" }}>
      <Typewriter
        words={[
          "Front-End Developer !",
          "Web Developer !",
          "UI/UX Enthusiast !",
        ]}
        loop={true}
        cursor
        cursorStyle="_"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={2000}
      />
    </span>
  );
};

export default TypewriterComponent;
