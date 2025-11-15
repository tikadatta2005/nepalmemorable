import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import CsrImage from "../reusables/assets/CsrImage";

const TestimonialCard = ({ data }) => {

  return (
    <div className="w-full p-4 py-8 max-w-md bg-white shadow-md flex flex-col gap-4 rounded-lg">
      <div className="w-full flex gap-2 items-center ">
        <CsrImage
          src={`${process.env.NEXT_PUBLIC_SERVER || process.env.NEXT_SERVER}/${data?.image}`}
          alt={data?.name || "Profile"}
          width={100}
          height={100}
          className="w-10 h-10 rounded-full object-cover"
        />
        <h3 className="w-fit text-slate-700 text-xl whitespace-nowrap truncate">
          {data?.name}
        </h3>
      </div>

      {/* stars */}
      <div className="w-full flex gap-2 items-center">
        {Array.from(Array(5))?.map((_, index) => (
          <FaStar key={index} className="text-amber-500 " />
        ))}
      </div>

      <div
        className="w-full line-clamp-3"
        dangerouslySetInnerHTML={{ __html: `${data?.description}` }}
      />
      <Link
        href={`/testimonials/${data?._id}`}
        className="w-fit h-fit cursor-pointer"
      >
        <button className="p-2 text-sm text-white bg-cyan-700 cursor-pointer rounded-lg transition-all duration-300 hover:bg-cyan-800 shadow hover:shadow-lg px-4">
          Read more ...
        </button>
      </Link>
    </div>
  );
};

export default TestimonialCard;
