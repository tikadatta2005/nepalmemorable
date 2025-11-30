import React from "react";
import Scroller from "../buttons/Scroller";
import CsrImage from "../assets/CsrImage";

const RegionBanner = ({ cover, title }) => {
  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div className="w-full h-screen overflow-hidden relative">
        <CsrImage
          src={cover}
          alt={"Region Background Image"}
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Dark Overlay + Content */}
      <div className="absolute inset-0 bg-cyan-950/80 z-10 flex justify-center items-center p-4 py-16">
        <div className="w-full max-w-7xl mx-auto p-4 flex flex-col justify-center gap-4 lg:gap-8 items-center">
          <h1 className="text-white text-center w-full mx-auto text-3xl md:text-4xl lg:text-6xl">
            {title}
          </h1>
        </div>

        <Scroller />
      </div>
    </div>
  );
};

export default RegionBanner;
