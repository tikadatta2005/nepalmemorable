import React from "react";
import { IoArrowDown } from "react-icons/io5";
import CsrImage from "../assets/CsrImage";

const Banner1 = ({ cover, title, description }) => {
  return (
    <div className="w-full overflow-hidden">
      <CsrImage
        src={cover}
        alt="Cover Banner"
        fill
        className="fixed inset-0 z-0 object-cover object-center"
        priority
      />
      <div className="w-full relative flex min-h-screen justify-center items-center z-0 p-4 py-16 bg-cyan-950/80">
        <div className="w-full max-w-7xl mx-auto p-4 flex flex-col justify-center gap-4 lg:gap-8 items-center">
          <h1 className="text-white text-center w-full mx-auto text-3xl md:text-4xl lg:text-6xl">
            {title}
          </h1>
          <div
            className="text-cyan-100 text-center font-medium lg:text-xl md:text-lg text-base max-w-5xl mx-auto"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </div>

        {/* Dimmed Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-70">
          <IoArrowDown className="text-white text-2xl md:text-3xl" />
          <span className="text-white text-xs mt-1">Scroll</span>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
