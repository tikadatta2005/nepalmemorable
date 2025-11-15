import React from "react";
import Scroller from "../buttons/Scroller";
import ImageChanger from "./ImageChanger";

const Banner1 = ({ cover, title, description }) => {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      {/* Background Slider */}
      <ImageChanger
        sources={cover}
        alt="Cover Banner"
        className="absolute inset-0 z-0"
      />

      {/* Dark Overlay + Content */}
      <div className="absolute inset-0 bg-cyan-950/80 z-10 flex justify-center items-center p-4 py-16">
        <div className="w-full max-w-7xl mx-auto p-4 flex flex-col justify-center gap-4 lg:gap-8 items-center">
          <h1 className="text-white text-center w-full mx-auto text-3xl md:text-4xl lg:text-6xl">
            {title}
          </h1>

          <div
            className="text-cyan-100 text-center font-medium lg:text-xl md:text-lg text-base max-w-5xl mx-auto"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>

        <Scroller />
      </div>
    </div>
  );
};


export default Banner1;
