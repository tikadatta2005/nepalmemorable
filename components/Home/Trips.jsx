import Image from "next/image";
import React from "react";
import SlickCarousel from "../reusables/carousel/SlickCarousel";
import TripCard from "../trips/TripCard";
import Link from "next/link";
import { NextWhite, PrevWhite } from "../reusables/buttons/CarouselButtons";
import { GetData } from "@/utils/GetData";
import { ChevronRight } from "lucide-react";
import CsrImage from "../reusables/assets/CsrImage";
import CsrBg from "../reusables/assets/CsrBg";

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
    <section className="w-full relative overflow-hidden">
      <CsrBg
        className="bg-center bg-fixed bg-cover"
        style={{ backgroundImage: `url("/assets/covers/lake.jpg")` }}
      >
        <div className="w-full relative z-10 pb-20 pt-20 p-4 bg-black/20">
          <div className="w-full max-w-7xl mx-auto p-4">
            <div className="w-full flex justify-between">
              <div className="flex w-fit flex-col gap-2">
                <b className="text-amber-200 w-fit text-sm md:text-base text-shadow-2xs">
                  POPULAR TRIPS
                </b>
                <h2 className="text-white font-pacifico text-2xl md:text-3xl lg:text-4xl leading-tight mb-6">
                  Tour In Nepal
                </h2>
              </div>
              <div className="w-fit flex flex-col justify-end py-4">
                <Link href="/services/tours" className="w-fit h-fit">
                  <button className="w-fit md:text-base flex gap-2 items-center text-sm font-medium text-white p-2 px-4 rounded-lg bg-amber-500 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer">
                    See all
                    <ChevronRight />
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
                return (
                  <div key={index} className="w-full p-1">
                    <TripCard data={element} />
                  </div>
                );
              })}
            </SlickCarousel>
          </div>
        </div>
      </CsrBg>
    </section>
  );
};

export default Trips;
