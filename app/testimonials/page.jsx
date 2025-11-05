import CsrBg from "@/components/reusables/assets/CsrBg";
import TestimonialCard from "@/components/testimonials/TestimonialCard";
import TestimonialHolder from "@/components/testimonials/TestimonialHolder";
import { GetData } from "@/utils/GetData";
import React from "react";

const Testimonials = async () => {
  const res = await GetData(
    "/get-contents?type=testimonials&sort=-1&len=20&page=0"
  );
  const data = res?.data;

  return (
    <CsrBg className="relative w-full min-h-screen bg-cover bg-fixed" style={{backgroundImage:"url(/assets/testimonials/bg.jpg)"}}>
      {/* Optimized Background */}
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

          {[...data]?.map((elem, index) => {
            return <TestimonialCard data={elem} key={index} />;
          })}
        </TestimonialHolder>
      </section>
    </CsrBg>
  );
};

export default Testimonials;
