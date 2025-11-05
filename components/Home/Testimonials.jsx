import React from "react";
import SlickCarousel from "../reusables/carousel/SlickCarousel";
import TestimonialCard from "../testimonials/TestimonialCard";
import Link from "next/link";
import { NextCyan, PrevCyan } from "../reusables/buttons/CarouselButtons";
import { GetData } from "@/utils/GetData";

const Testimonials = async () => {

  const res = await GetData("/get-contents?type=testimonials&page=0&len=6&sort=-1")
  const data = res?.data

  const settings = {
    dots: false,
    infinite: true, // use infinite instead of loop
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  return (
    <section className="p-4 py-16 bg-slate-100">
      <div className="w-full mx-auto max-w-7xl px-4">
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-2 items-center text-center">
          <b className="text-sm md:text-base  text-cyan-700">TESTIMONIALS</b>
          <h2 className="text-slate-800 font-pacifico text-2xl md:text-3xl lg:text-4xl leading-tight mb-6">
            Client Experiences That Inspire
          </h2>
        </div>

        <div className="w-full ">
          <SlickCarousel
            settings={settings}
            key={settings}
            NextButton={NextCyan}
            PrevButton={PrevCyan}
          >
            {[...data, ...data, ...data]?.map((elem, index) => {
              const obj = { ...elem };
              obj.image = obj.image?.includes("https://")
                ? obj?.image
                : process.env.NEXT_PUBLIC_SERVER;

              return (
                <div className="p-2 py-4" key={index}>
                  <TestimonialCard data={obj} />
                </div>
              );
            })}
          </SlickCarousel>
        </div>
        <br />
        <center>
          <Link href="/testimonials" className="w-fit h-fit mx-auto">
            <button className="w-fit md:text-base text-sm font-medium text-white p-2 px-4 rounded-lg bg-amber-400 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
              Read all experiences
            </button>
          </Link>
        </center>
      </div>
    </section>
  );
};

export default Testimonials;
