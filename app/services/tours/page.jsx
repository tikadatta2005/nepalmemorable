import TourHolder from "@/components/tours/TourHolder";
import Banner1 from "@/components/reusables/banners/Banner1";
import CardBook from "@/components/reusables/cards/CardBook";
import React from "react";
import { GetData } from "@/utils/GetData";
import FastBookNow from "@/components/forms/FastBookNow";

const meta = {
  title: "Tours in Nepal",
  description:
    "Experience the breathtaking beauty of Nepal, from towering Himalayan peaks to peaceful valleys, historic temples, and warm local traditions each tour designed to inspire, uplift, and connect you with the heart of this extraordinary land",
  cover: ["/assets/services/tours/1.webp","/assets/services/tours/2.webp"],
};

export const metadata = () => {
  return {
    title: `${meta.title} | Nepal Memorable Tours`,
    description: meta.description,
    openGraph: {
      title: `${meta.title} | Nepal Memorable Tours`,
      description: meta.description,
      url: "https://www.nepalmemorable.com/services/tours",
      siteName: "Nepal Memorable Tours",
      images: [
        {
          url: `https://www.nepalmemorable.com${meta.cover[0]}`, // full URL for OG
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


const Tours = async () => {
  const res = await GetData("/get-contents?type=tours&sort=-1&page=0&len=20");
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
          <TourHolder>
            {data?.map((elem, index) => (
              <CardBook data={elem} key={index} service="tours" />
            ))}
          </TourHolder>
        </div>

        {/* Sticky Booking Form */}
        <div className="hidden md:block w-full md:w-1/4">
          <div className="sticky top-24">
            <FastBookNow title={"Tours"} location={`https://www.nepalmemorable.com/services/tours`}/>
          </div>
        </div>
      </div>
    </main>
  );
};


export const revalidate = 300;

export default Tours;
