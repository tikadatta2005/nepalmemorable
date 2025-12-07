import React from "react";
import List1 from "../lists/List1";
import CsrImage from "./CsrImage";
import FastBookNow from "@/components/forms/FastBookNow";
import GoBack from "../buttons/GoBack";

const DetailsPage = ({ data, location }) => {
  return (
    <main className="w-full min-h-screen bg-white">
      <CsrImage
        alt={data?.title}
        src={`${process.env.NEXT_SERVER}/${data?.cover}`}
        width={1200}
        priority
        className="w-full h-150 object-cover shadow object-center  bg-linear-to-br from-cyan-600 to-teal-700 "
        height={700}
      />

      <div className="w-full max-w-7xl mx-auto p-6 md:p-12 flex flex-col md:flex-row gap-8">
        {/* Cards */}
        <div className="w-full md:w-3/4 flex flex-col gap-4">
          <GoBack />
          <h1 className="w-full text-4xl text-cyan-700 font-bold">
            {data?.title}
          </h1>

          {data?.uid && (
            <p>
              <strong>{data?.uid}</strong>
            </p>
          )}
          {data?.location && (
            <p>
              <strong>Location : </strong>
              {data?.location}
            </p>
          )}
          {data?.height && (
            <p>
              <strong>Height : </strong>
              {data?.height}
            </p>
          )}
          {data?.duration && (
            <p>
              <strong>Duration : </strong>
              {data?.duration}
            </p>
          )}
          {data?.season && (
            <p>
              <strong>Season : </strong>
              {data?.season}
            </p>
          )}

           <div
            className="w-full text-base text-slate-700"
            dangerouslySetInnerHTML={{ __html: `${data?.description}` }}
          ></div>

          {((data?.lists || data?.list))&& <List1 data={data?.lists || data?.list} />}

          {/* content loading */}
          <div
            className="w-full text-base text-slate-700"
            dangerouslySetInnerHTML={{ __html: `${data?.content}` }}
          ></div>
        </div>

        <div className="hidden md:block w-full md:w-1/4">
          <div className="sticky top-24">
            {location && (
              <FastBookNow title={data?.title} location={location} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DetailsPage;
