import FastBookNow from "@/components/forms/FastBookNow";
import Banner1 from "@/components/reusables/banners/Banner1";
import List1 from "@/components/reusables/lists/List1";
import { GetData } from "@/utils/GetData";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await GetData(`/get-content/${id}?type=services`);
  const data = res?.data;
  const coverImage = `${process.env.NEXT_SERVER}/${data?.cover}`;
  return {
    title: data?.title || "Default Title",
    description: data?.description || "Default Description",
    openGraph: {
      title: data?.title || "Default Title",
      description: data?.description || "Default Description",
      url: `https://www.nepalmemorable.com/services/${id}`,
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
  const res = await GetData(`/get-content/${id}?type=services`);
  const data = await res?.data;

  if(!data) return <NotFoundPage/>

  return (
    <main className="w-full bg-gray-50">
      {/* Banner */}
      <Banner1
        title={data?.title}
        cover={`${process.env.NEXT_SERVER || process.env.NEXT_PUBLIC_SERVER}/${
          data?.cover
        }`}
        description={data?.description}
      />

      <div className="w-full max-w-7xl mx-auto p-6 md:p-12 flex flex-col md:flex-row gap-8">
        {/* Cards */}
        <div className="w-full md:w-3/4 flex flex-col gap-4">
          <h1 className="w-full text-4xl text-cyan-700 font-bold">
            {data?.title}
          </h1>
          <div
            className="w-full text-lg text-black"
            dangerouslySetInnerHTML={{ __html: `${data?.description}` }}
          ></div>
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
          {data?.season && (
            <p>
              <strong>Season : </strong>
              {data?.season}
            </p>
          )}
          {data?.duration && (
            <p>
              <strong>Duration : </strong>
              {data?.duration}
            </p>
          )}

          {data?.lists && <List1 data={data?.lists} />}

          {/* content loading */}
          <div
            className="w-full text-base text-slate-700"
            dangerouslySetInnerHTML={{ __html: `${data?.content}` }}
          ></div>
        </div>

        <div className="hidden md:block w-full md:w-1/4">
          <div className="sticky top-24">
            <FastBookNow
              title={data?.title}
              location={`https://www.nepalmemorable.com/services/${id}`}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
export const revalidate = 300;

export default page;
