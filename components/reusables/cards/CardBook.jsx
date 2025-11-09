import Link from "next/link";
import React from "react";
import CsrImage from "../assets/CsrImage";

const CardBook = ({ data, service }) => {
  return (
    <div className="w-full flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="w-full md:w-1/3 relative h-64 md:h-auto flex-shrink-0">
        <CsrImage
          src={`${process.env.NEXT_PUBLIC_SERVER || process.env.NEXT_SERVER }/${data?.cover}`}
          alt={data?.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-cyan-900 mb-2">
            {data?.title}
          </h3>
          <div
            className="text-sm md:text-base text-slate-700 line-clamp-4 mb-4"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          ></div>
          <p className="text-sm md:text-base text-slate-600 mb-4">
            {data?.location && (
              <>
                <strong>Location:</strong> {data?.location} <br />
              </>
            )}
            {data?.season && (
              <>
                <strong>Season:</strong> {data?.season} <br />
              </>
            )}
            {data?.duration && (
              <>
                <strong>Duration:</strong> {data?.duration} <br />
              </>
            )}{data?.height && (
              <>
                <strong>Height:</strong> {data?.height} <br />
              </>
            )}
          </p>
        </div>

        {/* Learn More Button */}
        <div className="mt-2">
          <Link
            href={`/services/${service}/${data?._id}`}
            className="inline-block px-5 py-2 bg-cyan-900 text-white rounded-lg hover:bg-cyan-800 transition-colors duration-300 text-center"
          >
            Explore <span className="sr-only"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardBook;
