import Image from "next/image";
import React from "react";
import SlickCarousel from "../reusables/carousel/SlickCarousel";
import TripCard from "../trips/TripCard";
import Link from "next/link";
import { NextWhite, PrevWhite } from "../reusables/buttons/CarouselButtons";
import { GetData } from "@/utils/GetData";

const Trips = async () => {
  const res = await GetData("/get-contents?type=tours&page=0&sort=-1&len=6");
  const data = res?.data;

  const settings = {
    dots: false,
    infinite: true, // use infinite instead of loop
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
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
    <section className="w-full relative pt-16 mt-0 md:p-0 md:-mt-54">
      <Image
        src="/assets/reusables/wave1.webp"
        alt="wave design"
        width={1200}
        height={200}
        className="w-full h-auto"
      />
      <div className="w-full bg-cyan-700 pb-20 p-4 -mt-1">
        <div className="w-full max-w-7xl mx-auto p-4">
          <div className="w-full flex justify-between">
            <div className="flex w-fit flex-col gap-2">
              <b className="text-amber-200 w-fit text-sm md:text-base">
                POPULAR TRIPS
              </b>
              <h2 className="text-white font-pacifico text-2xl md:text-3xl lg:text-4xl leading-tight mb-6">
                Tour In Nepal
              </h2>
            </div>
            <div className="w-fit flex flex-col justify-end py-4">
              <Link href="/services/tours" className="w-fit h-fit">
                <button className="w-fit md:text-base text-sm font-medium text-white p-2 px-4 rounded-lg bg-amber-400 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
                  See all
                </button>
              </Link>
            </div>
          </div>
          {/* div of react slider */}
          <SlickCarousel
            settings={settings}
            PrevButton={PrevWhite}
            NextButton={NextWhite}
          >
            {[...data, ...data, ...data]?.map((element, index) => {
              const elem = { ...element };
              elem.cover = `${process.env.NEXT_SERVER}/${elem.cover}`;

              return (
                <div key={index} className="w-full p-1">
                  <TripCard data={elem} />
                </div>
              );
            })}
          </SlickCarousel>
        </div>
      </div>
    </section>
  );
};

export default Trips;
