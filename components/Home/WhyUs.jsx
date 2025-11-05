import Image from "next/image";
import React from "react";
import CsrImage from "../reusables/assets/CsrImage";
import { GetData } from "@/utils/GetData";

const WhyUs = async ({ cover }) => {
  const res = await GetData("/get-contents?type=why-us&sort=1&page=0&len=6")
  const data = res?.data;

  return (
    <section className="w-full min-h-screen bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        {/* Left: Text */}
        <div className="flex flex-col pt-20 p-4 pb-20 md:pb-52 justify-center gap-4  px-6 md:px-12 lg:px-16">
          <h2 className="text-slate-800 font-pacifico text-2xl md:text-3xl lg:text-4xl leading-tight mb-6">
            Why Us? Because Your Journey Matters
          </h2>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
            {data?.map((elem, index) => {
              return (
                <div
                  key={index}
                  className="w-full transiton-all duration-300 hover:scale-105 text-sm flex flex-col gap-4 shadow-md text-slate-700 bg-white p-2 md:p-4 border-l-2 md:border-l-4 rounded-xl border-cyan-700 font-medium"
                >
                  <CsrImage
                    src={elem?.icon}
                    alt="icon on topic"
                    width={100}
                    height={100}
                    className="w-fit h-8"
                  />
                  <p>{elem?.title}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Full Image */}
        <div className="relative w-full h-80 md:h-full px-4 md:px-0">
          <div className="relative w-full h-full rounded-xl shadow-xl md:rounded-none md:shadow-none overflow-hidden">
            <CsrImage
              src={
                cover
                  ? `${process.env.NEXT_CLIENT_SERVER}/${cover}`
                  : "/assets/home/about/aboutus.webp"
              }
              alt="About us"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
