import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card1 = ({ title, cover, link }) => {
  return (
    <Link href={link}>
      <div className="w-full max-w-md relative h-100 rounded-xl overflow-hidden group">
        <Image
          src={cover}
          width={400}
          height={400}
          alt={title}
          className="w-full transition-all duration-300 h-full absolute z-0 object-cover group-hover:scale-105"
        />
        <div className="w-full absolute p-4 text-center flex flex-col justify-end z-10 inset-0 md:text-lg bg-gradient-to-t from-cyan-950/80 via-transparent to-transparent text-white lg:text-xl">
          <h3 className="group-hover:text-cyan-300 group-hover:scale-105 transition-all duration-300 cursor-pointer">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Card1;
