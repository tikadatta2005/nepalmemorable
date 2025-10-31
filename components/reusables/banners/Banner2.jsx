import Link from "next/link";
import React from "react";
import CsrImage from "../assets/CsrImage";

const Banner2 = ({ title, description, cover, link }) => {
  return (
    <section className="w-full relative">
      <CsrImage
        src={cover}
        alt="Cover Banner"
        fill
        className="fixed inset-0 -z-10 object-cover object-center"
        priority
      />
      <div className="w-full mx-auto py-20 p-4 bg-white/80 flex justify-center items-center z-0">
        <div className="w-full max-w-5xl text-center mx-auto p-4">
          <h3 className="text-cyan-800 text-2xl md:text-3xl lg:text-4xl">
            {title}
          </h3>
          <br />
          <div
            className="text-sm md:text-base lg:text-lg font-medium text-slate-700"
            dangerouslySetInnerHTML={{ __html: `${description}` }}
          ></div>

          <br />
          {link && (
            <Link href={link?.href} className="w-fit h-fit mx-auto">
              <button className="w-fit p-2 px-6 cursor-pointer  rounded-xl hover:scale-105 text-white font-medium bg-cyan-800 transition-all duration-300 hover:bg-cyan-950">
                {link?.name}
              </button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner2;
