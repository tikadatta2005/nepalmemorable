import React from "react";
import CsrImage from "../assets/CsrImage";

const Banner3 = ({ cover, title, description }) => {
  return (
    <section className="w-full flex min-h-126">
      <div className="w-1/4 md:w-1/2 relative flex">
        <CsrImage
          src={cover}
          alt={title}
          fill
          className="w-full h-full object-cover"
          priority
        />
      </div>
      <div className="w-3/4 md:w-1/2 p-8 flex flex-col justify-center gap-4 py-40 bg-cyan-900">
        <h1 className="w-full text-3xl text-white pb-4 md:text-4xl lg:text-6xl leading-normal">
          {title}
        </h1>
        <p className="w-full text-base md:text-lg lg:text-xl text-cyan-100">
          {description}
        </p>
      </div>
    </section>
  );
};

export default Banner3;
