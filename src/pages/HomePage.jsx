import React from "react";
import Hersection from "../components/Hersection";
import Slider from "../components/Slider";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <>
      <div className="flex">
        <Hersection />
        <Slider />
      </div>
    </>
  );
};

export default HomePage;
