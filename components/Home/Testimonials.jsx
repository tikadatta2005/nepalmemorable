import React from "react";
import SlickCarousel from "../reusables/carousel/SlickCarousel";
import TestimonialCard from "../testimonials/TestimonialCard";
import Link from "next/link";
import { NextCyan, PrevCyan } from "../reusables/buttons/CarouselButtons";

const Testimonials = async () => {
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

  const fallbackImage =
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80";

  const data = [
    {
      _id: "1",
      image: fallbackImage,
      name: "Sarah Johnson",
      description:
        "The team made our trek unforgettable. From start to finish, everything was perfectly organized and stress-free.",
    },
    {
      _id: "2",
      image: fallbackImage,
      name: "Michael Lee",
      description:
        "I’ve traveled with many companies before, but this was by far the most genuine and personal experience.",
    },
    {
      _id: "3",
      image: fallbackImage,
      name: "Priya Sharma",
      description:
        "Their attention to detail and safety gave me confidence throughout the journey. Highly recommended!",
    },
    {
      _id: "4",
      image: fallbackImage,
      name: "David Smith",
      description:
        "A seamless adventure filled with breathtaking moments. Can’t wait to book my next trip with them.",
    },
  ];

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
