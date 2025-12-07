import Link from "next/link";
import React from "react";
import CsrVideo from "../reusables/assets/CsrVideo";

const Hero = ({ title }) => {
  const activities = [
    { link: "/services/tours", name: "Tours" },
    { link: "/services/trekking", name: "Trekking" },
    { link: "/services/adventures", name: "Adventures" },
    { link: "/services/national-park", name: "National Park" },
    { link: "/services/hiking", name: "Hiking" },
  ];

  return (
    <section className="w-full h-screen flex flex-col justify-end relative">
      <CsrVideo
        className="w-full h-full inset-0 -z-10 absolute object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/assets/home/hero/ABC.mp4"
        type="video/mp4"
      />
      <div className="w-full py-20 bg-gradient-to-t from-cyan-950/80 to-transparent">
        <div className="w-full max-w-5xl  mx-auto text-center">
          <h1 className="w-full text-white lg:text-6xl md:text-5xl text-4xl font-medium">
            {title || "Tailor-made treks and tours in Nepal"}
          </h1>
          <div className="pt-8 w-full flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
            {activities?.map((elem, index) => {
              return (
                <Link href={elem?.link} key={index}>
                  <button className="w-fit p-2 px-6 text-[12px] md:text-sm lg:text-base capitalized font-semibold text-slate-700 bg-white rounded-full shadow-md">
                    {elem?.name}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
