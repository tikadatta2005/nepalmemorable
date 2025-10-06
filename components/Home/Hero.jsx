import Link from "next/link";
import React from "react";

const Hero = ({ title }) => {
  const activities = [
    { link: "/activities/tours", name: "Tours" },
    { link: "/activities/trekking", name: "Trekking" },
    { link: "/activities/adventures", name: "Adventures" },
    { link: "/activities/national-park", name: "National Park" },
    { link: "/activities/hiking", name: "Hiking" }
  ];

  return (
    <section className="w-full h-screen flex flex-col justify-end relative">
      <video
        className="w-full h-full inset-0 -z-10 absolute object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/assets/home/hero/hero5.mp4" type="video/mp4" />
      </video>
      <div className="w-full py-20 bg-gradient-to-t from-cyan-950/80 to-transparent">
        <div className="w-full max-w-5xl  mx-auto text-center">
          <h1 className="w-full text-white lg:text-6xl md:text-5xl text-4xl font-medium">
            {title || "Tailor-made treks and tours in Nepal"}
          </h1>
          <div className="pt-8 w-full flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
            {activities?.map((elem, index)=>{
                return<Link href={elem?.link} key={index}>
                    <button className="w-fit p-2 px-6 text-[12px] md:text-sm lg:text-base capitalized font-semibold text-slate-700 bg-white rounded-full shadow-md">
                        {elem?.name}
                    </button>
                </Link>
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
