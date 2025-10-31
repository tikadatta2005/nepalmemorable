import React from "react";
import CsrImage from "../assets/CsrImage";
import Link from "next/link";

const PackageCards = ({ data }) => {
  return (
    <div className="w-full bg-white max-w-md flex flex-col justify-between rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-xl">
      <div className="w-full">
        <div className="w-full h-42 overflow-hidden">
          <CsrImage
            src={data?.cover}
            width={450}
            height={200}
            alt={data?.title}
            className="w-full transition-all duration-300  h-42 object-cover group-hover:scale-105"
          />
        </div>

        <div className="w-full p-4">
          <div className="w-full  overflow-hidden whitespace-nowrap truncate text-xl max-w-64 p-4 h-16 gap-2 -mt-12 mx-auto z-10 relative bg-white shadow-lg rounded font-bold text-center text-slate-700 flex justify-center items-baseline">
            <span>{data?.highlight}</span>
          </div>
          <div className="w-full flex flex-col py-4 text-center">
            <h3 className="w-full text-2xl pb-2 text-slate-800">
              {data?.title}
            </h3>
            <p className="w-full text-lg font-semibold text-slate-700">
              {data?.subtitle}
            </p>
          </div>
          <div
            className="w-full text-slate-600 px-8 py-2 pb-8 text-sm"
            dangerouslySetInnerHTML={{ __html: `${data?.features}` }}
          ></div>
        </div>
      </div>

      <div className="w-full flex justify-center items-end pb-8">
        <Link
          href={`/packages/${data?._id}`}
          className="w-fit px-6 p-3 rounded-xl mx-auto text-white bg-cyan-600 transition-all duration-300 hover:scale-105"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default PackageCards;
