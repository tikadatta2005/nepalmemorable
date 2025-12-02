import FastBookNow from "@/components/forms/FastBookNow";
import HikingHolder from "@/components/hiking/HikingHolder";
import Banner1 from "@/components/reusables/banners/Banner1";
import CardBook from "@/components/reusables/cards/CardBook";
import { GetData } from "@/utils/GetData";
import React from "react";
const meta = {
  title: "Hiking in Nepal",
  description:
    "Hike through Nepal’s peaceful hills, where every trail passes through charming villages and rolling landscapes. Meet warm local people, enjoy glimpses of traditional life, and find quiet spots for reflection and meditation. Even a single day on these trails offers fresh air, stunning scenery, and a journey that nourishes both body and soul.",
  cover: ["/assets/services/hiking/1.webp", "/assets/services/hiking/2.webp"],
};

export const metadata = () => {
  return {
    title: `${meta.title} | Nepal Memorable Tours`,
    description: meta.description,
    openGraph: {
      title: `${meta.title} | Nepal Memorable Tours`,
      description: meta.description,
      url: "https://www.nepalmemorable.com/services/hiking",
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

const Hiking = async () => {
  const res = await GetData("/get-contents?type=hiking&sort=-1&page=0&len=20");
  const data = res?.data;
  return (
    <main className="w-full bg-gray-50">
      {/* Banner */}
      <Banner1
        title={meta?.title}
        cover={meta?.cover}
        description={meta?.description}
      />

      {/* Intro */}
      {meta?.content&&<div className="w-full max-w-7xl mx-auto p-6 md:p-12 text-gray-700 text-base md:text-lg leading-relaxed">
        <div
          dangerouslySetInnerHTML={{ __html: meta?.content }}
          className="prose prose-cyan max-w-full"
        ></div>
      </div>}

      {/* Main Content: Cards + Booking */}
      <div className="w-full max-w-7xl mx-auto p-6 md:p-12 flex flex-col md:flex-row gap-8">
        {/* Cards */}
        <div className="w-full md:w-3/4 space-y-6">
          <HikingHolder>
            {data?.map((elem, index) => (
              <CardBook data={elem} key={index} service="hiking" />
            ))}
          </HikingHolder>
        </div>

        {/* Sticky Booking Form */}
        <div className="hidden md:block w-full md:w-1/4">
          <div className="sticky top-24">
            <FastBookNow
              title={"Hiking"}
              location={`https://www.nepalmemorable.com/services/hiking`}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export const revalidate = 300;

export default Hiking;
