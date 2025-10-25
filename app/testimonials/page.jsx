import TestimonialCard from "@/components/testimonials/TestimonialCard";
import TestimonialHolder from "@/components/testimonials/TestimonialHolder";
import Image from "next/image";
import React from "react";

const Testimonials = async () => {
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
    <main className="relative w-full min-h-screen">
      {/* Optimized Background */}
      <Image
        src="/assets/testimonials/bg.jpg"
        alt="Testimonials background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center -z-10"
      />

      <section className="relative w-full min-h-screen p-8 pt-28 bg-slate-950/70">
        <TestimonialHolder>
          <div className="w-full p-4 text-4xl lg:text-6xl text-white flex flex-col items-center justify-center">
            <h1 className="text-3xl lg:text-4xl font-semibold py-4">
              Traveler Experiences
              <span className="text-xl lg:text-2xl font-normal">
                &nbsp;from Nepal
              </span>
            </h1>
            <p className="text-sm lg:text-base mt-2 text-gray-200">
              Real stories from our happy explorers.
            </p>
          </div>

          {[...data, ...data, ...data]?.map((elem, index) => {
            const obj = { ...elem };
            obj.image = obj.image?.includes("https://")
              ? obj.image
              : process.env.NEXT_PUBLIC_SERVER;
            return <TestimonialCard data={obj} key={index} />;
          })}
        </TestimonialHolder>
      </section>
    </main>
  );
};

export default Testimonials;
