import FastBookNow from "@/components/forms/FastBookNow";
import NotFoundPage from "@/components/reusables/404/NotFound";
import CsrImage from "@/components/reusables/assets/CsrImage";
import List1 from "@/components/reusables/lists/List1";
import { GetData } from "@/utils/GetData";
import React from "react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await GetData(`/get-content/${id}?type=adventures`);
  const data = res?.data;
  const coverImage = `${process.env.NEXT_SERVER}/${data?.cover}`;
  return {
    title: data?.title || "Default Title",
    description: data?.description || "Default Description",
    openGraph: {
      title: data?.title || "Default Title",
      description: data?.description || "Default Description",
      url: `https://www.nepalmemorable.com/services/adventures/${id}`,
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
  const res = await GetData(`/get-content/${id}?type=adventures`);
  const data = await res?.data;
if(!data) return <NotFoundPage/>
  return (
    <main className="w-full min-h-screen bg-white">
      <CsrImage
        alt={data?.title}
        src={`${process.env.NEXT_SERVER}/${data?.cover}`}
        width={1200}
        className="w-full h-150 object-cover shadow"
        height={700}
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
          <p>
            <strong>Location : </strong>
            {data?.location}
          </p><p>
            <strong>Season : </strong>
            {data?.season}
          </p>

          {data?.lists && (
            <div
              className="sr-only"
              dangerouslySetInnerHTML={{ __html: `${data?.lists}` }}
            ></div>
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
            <FastBookNow title={data?.title} location={`https://www.nepalmemorable.com/services/adventures/${id}`}/>
          </div>
        </div>
      </div>
    </main>
  );
};
export const revalidate = 300;

export default page;
