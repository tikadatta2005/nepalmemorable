import Image from "next/image";
import React from "react";
import SlickCarousel from "../reusables/carousel/SlickCarousel";
import TripCard from "../trips/TripCard";
import Link from "next/link";
import { NextWhite, PrevWhite } from "../reusables/buttons/CarouselButtons";

const Trips = async () => {
  const data = [
    {
      title: "Kathmandu-Nagarkot-Bhaktapur Tour",
      description: `
          <p>
            A short yet beautiful escape blending culture, history, and Himalayan views. 
            Explore sacred temples, sunrise over Nagarkot, and the ancient charm of Bhaktapur in one refreshing tour.
          </p>
        `,
      duration: "4 Days",
      cover: "/assets/tours/ktm.jpg",
    },
    {
      title: "Chitwan Jungle Safari Tour",
      description: `
          <p>
            Dive into the wild! Enjoy thrilling jeep safaris, canoe rides, and cultural evenings 
            amidst Chitwan’s lush jungles and rich wildlife. A perfect short getaway into nature.
          </p>
        `,
      duration: "3 Days",
      cover: "/assets/tours/chitwan.jpg",
    },
    {
      title: "Everest Panorama Tour",
      description: `
          <p>
            Fly close to the world’s highest peaks and explore scenic Himalayan villages. 
            A compact adventure with mesmerizing Everest views and warm Sherpa hospitality.
          </p>
        `,
      duration: "5 Days",
      cover: "/assets/tours/everest.jpg",
    },
    {
      title: "Annapurna Panorama Tour",
      description: `
          <p>
            Enjoy a peaceful trek through the Annapurna foothills with sunrise views from Poon Hill 
            and cultural immersion in Gurung villages. A balanced mix of comfort and adventure.
          </p>
        `,
      duration: "6 Days",
      cover: "/assets/tours/annapurna.jpg",
    },
    {
      title: "Kathmandu-Lumbini-Pokhara-Kathmandu Tour",
      description: `
          <p>
            A complete Nepal experience featuring heritage, spirituality, and natural beauty — 
            from Kathmandu’s ancient temples to Lumbini’s peace and Pokhara’s serene lakes.
          </p>
        `,
      duration: "7 Days",
      cover: "/assets/tours/lumbini.jpg",
    },
    {
      title: "Buddhist Heritage Tour",
      description: `
          <p>
            Follow the sacred path of Lord Buddha across Nepal’s most revered monasteries and stupas. 
            A deeply spiritual journey through peace, learning, and reflection.
          </p>
        `,
      duration: "5 Days",
      cover: "/assets/tours/buddist.jpg",
    },
  ];

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
              // if (!elem?.cover?.includes("https://")) {
              //   elem.cover = `${process.env.NEXT_PUBLIC_SERVER}${cover}`;
              // }

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
