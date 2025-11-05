import React from "react";
import CsrImage from "../reusables/assets/CsrImage";

const AboutUsCard = ({ title, description, index, cover }) => {
  return (
    <section className={`w-full p-4 py-16 ${index%2===0? "bg-gray-100" :" bg-white"}`}>
      <div
        className={`w-full max-w-7xl mx-auto p-4 justify-center gap-8 flex ${
          index % 2 === 0 ? "flex-row" : "flex-row-reverse"
        } flex-wrap`}
      >
        <div className="w-full md:w-[calc(50%-1rem)] flex flex-col justify-center">
          <CsrImage
            src={cover}
            alt={title}
            width={600}
            loading="lazy"
            height={600}
            className="w-full object-cover h-fit max-h-120 min-h-80 rounded-xl shadow"
          />
        </div>
        <div className="w-full md:w-[calc(50%-1rem)] flex flex-col justify-center gap-4">
          <h3 className="text-cyan-800 text-2xl md:text-3xl lg:text-4xl">
            {title}
          </h3>
          <div
            className="text-sm md:text-base lg:text-lg text-slate-700"
            dangerouslySetInnerHTML={{ __html: `${description}` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsCard;
