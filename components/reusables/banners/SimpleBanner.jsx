import React from "react";
import CsrImage from "../assets/CsrImage";
import Scroller from "../buttons/Scroller";

const SimpleBanner = ({ cover, title, description }) => {
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
        <Scroller />
      </div>
    </div>
  );
};

export default SimpleBanner;
