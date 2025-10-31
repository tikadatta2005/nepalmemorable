import Image from "next/image";
import Link from "next/link";
import React from "react";
import CsrImage from "../reusables/assets/CsrImage";

const TripCard = ({ data }) => {
  const { cover, title, duration, _id } = data;
  return (
    <Link
      href={`/services/tours/${_id}`}
      className="w-full max-w-md group shadow-md bg-white p-4 rounded-lg flex flex-col gap-4 cursor-pointer"
    >
      <div className="w-full relative h-72 rounded-md overflow-hidden">
        <CsrImage
          src={cover}
          width={300}
          height={300}
          alt={title}
          className="absolute object-cover inset-0 w-full h-full transition-all duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg md:text-xl text-slate-700 text-center overflow-hidden whitespace-nowrap truncate w-full mx-auto transition-all duration-500 group-hover:text-cyan-700 group-hover:scale-105">
        {title}
      </h3>
      <p className="text-sm md:text-base text-center mx-auto font-semibold text-slate-500 uppercase">
        Duration : {duration}
      </p>
    </Link>
  );
};

export default TripCard;
