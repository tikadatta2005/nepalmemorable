import FastBookNow from "@/components/forms/FastBookNow";
import NpHolder from "@/components/NationalParkTrip/NpHolder";
import Banner1 from "@/components/reusables/banners/Banner1";
import CardBook from "@/components/reusables/cards/CardBook";
import { GetData } from "@/utils/GetData";
import React from "react";

const meta = {
  title: "National Park Trips in Nepal",
  description:
    "Step into Nepal’s untouched wilderness where elephants, rhinos, tigers, and vibrant birdlife roam freely, rivers flow serenely, Tharu villages welcome you with culture and cuisine, and nature’s diversity awaits in Dhorpatan, Rara, Khaptad, Sagarmatha, Chitwan, Bardia, and Koshi Tappu.",
  cover: ["/assets/services/np/1.webp"],
};

export const metadata = () => {
  return {
    title: `${meta.title} | Nepal Memorable Tours`,
    description: meta.description,
    openGraph: {
      title: `${meta.title} | Nepal Memorable Tours`,
      description: meta.description,
      url: "https://www.nepalmemorable.com/services/national-park",
      siteName: "Nepal Memorable Tours",
      images: [
        {
          url: `https://www.nepalmemorable.com${meta.cover[0]}`,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
};

const NationalParkTrip = async () => {
  const res = await GetData(
    "/get-contents?type=national-park&sort=-1&page=0&len=20"
  );
  const data = res?.data;

  return (
    <main className="w-full bg-gray-50">
      {/* Banner */}
      <Banner1
        title={meta?.title}
        cover={meta?.cover}
        description={meta?.description}
      />

      {/* Introduction */}
      {meta?.content&&<div className="w-full max-w-7xl mx-auto p-6 md:p-12 text-gray-700 text-base md:text-lg leading-relaxed">
        <div
          dangerouslySetInnerHTML={{ __html: meta?.content }}
          className="prose prose-cyan max-w-full"
        ></div>
      </div>}

      {/* Main Content: Cards + Form */}
      <div className="w-full max-w-7xl mx-auto p-6 md:p-12 flex flex-col md:flex-row gap-8">
        {/* Cards */}
        <div className="w-full md:w-3/4 space-y-6">
          <NpHolder>
            {data?.map((elem, index) => (
              <CardBook data={elem} key={index} service="national-park" />
            ))}
          </NpHolder>
        </div>

        {/* Sticky Booking Form */}
        <div className="hidden md:block w-full md:w-1/4">
          <div className="sticky top-24">
            <FastBookNow
              title={"National Parks"}
              location={`https://www.nepalmemorable.com/services/national-park`}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export const revalidate = 300;

export default NationalParkTrip;
