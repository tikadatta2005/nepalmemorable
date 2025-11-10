import FastBookNow from "@/components/forms/FastBookNow";
import CsrImage from "@/components/reusables/assets/CsrImage";
import List1 from "@/components/reusables/lists/List1";
import { GetData } from "@/utils/GetData";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await GetData(`/get-content/${id}?type=packages`);
  const data = res?.data;
  const coverImage = `${process.env.NEXT_SERVER}/${data?.cover}`;
  return {
    title: data?.title || "Default Title",
    description: data?.description || "Default Description",
    openGraph: {
      title: data?.title || "Default Title",
      description: data?.description || "Default Description",
      url: `https://www.nepalmemorable.com/packages/${id}`,
      type: "article",
      images: [
        {
          url: coverImage,
          width: 1200,
          height: 630,
          alt: data?.title || "Tour Image",
        },
      ],
    },
  };
}

const page = async ({ params }) => {
  const { id } = await params;
  const res = await GetData(`/get-content/${id}?type=packages`);
  const data = await res?.data;

  console.log(data?.lists);

  return (
    <main className="w-full min-h-screen bg-white">
      <CsrImage
        alt={data?.title}
        src={`${process.env.NEXT_SERVER}/${data?.cover}`}
        width={1200}
        className="w-full h-150 object-cover shadow object-center"
        height={700}
      />

      <div className="w-full max-w-7xl mx-auto p-6 md:p-12 flex flex-col md:flex-row gap-8">
        {/* Cards */}
        <div className="w-full md:w-3/4 flex flex-col gap-4">
          <h1 className="w-full text-4xl text-cyan-700 font-bold">
            {data?.title}
          </h1>
          <p className="w-fit p-2 px-4 rounded-full text-sm font-bold text-white bg-cyan-700">
            {data?.highlight}
          </p>

          <div
            className="sr-only"
            dangerouslySetInnerHTML={{ __html: `${data?.lists}` }}
          ></div>
          {data?.lists && <List1 data={data?.lists} />}

          {/* content loading */}
          <div
            className="w-full text-base text-slate-700"
            dangerouslySetInnerHTML={{ __html: `${data?.content}` }}
          ></div>
        </div>

        <div className="hidden md:block w-full md:w-1/4">
          <div className="sticky top-24">
            <FastBookNow />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
