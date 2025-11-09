import FastBookNowSmall from "@/components/forms/FastBookNow";
import HikingHolder from "@/components/hiking/HikingHolder";
import Banner1 from "@/components/reusables/banners/Banner1";
import CardBook from "@/components/reusables/cards/CardBook";
import { GetData } from "@/utils/GetData";
import React from "react";
const meta = {
  title: "Hiking in Nepal",
  description:
    "Nepal — the land of trails. From peaceful hill walks to scenic ridge hikes, discover routes that bring you closer to mountains, culture, and nature.",
  content: `<p>Hiking in Nepal offers the perfect balance of adventure, culture, and natural beauty. Unlike long treks, these routes are shorter and easier, designed for anyone who wants to enjoy Nepal’s stunning landscapes without extreme altitude or long travel days.</p><br/><p>From panoramic viewpoints near Kathmandu to lakeside trails in Pokhara, every hike lets you experience the Himalayas up close. Walk through rhododendron forests, visit ancient monasteries, and meet friendly locals — all within a few days’ journey.</p>`,
  cover: "/assets/services/hiking.jpg",
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
          url: `https://www.nepalmemorable.com${meta.cover}`,
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
  const res = await GetData(
    "/get-contents?type=hiking&sort=1&page=0"
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

      {/* Intro */}
      <div className="w-full max-w-7xl mx-auto p-6 md:p-12 text-gray-700 text-base md:text-lg leading-relaxed">
        <div
          dangerouslySetInnerHTML={{ __html: meta?.content }}
          className="prose prose-cyan max-w-full"
        ></div>
      </div>

      {/* Main Content: Cards + Booking */}
      <div className="w-full max-w-7xl mx-auto p-6 md:p-12 flex flex-col md:flex-row gap-8">
        {/* Cards */}
        <div className="w-full md:w-3/4 space-y-6">
          <HikingHolder>
            {data?.data?.map((elem, index) => (
              <CardBook data={elem} key={index} service="hiking" />
            ))}
          </HikingHolder>
        </div>

        {/* Sticky Booking Form */}
        <div className="hidden md:block w-full md:w-1/4">
          <div className="sticky top-24">
            <FastBookNowSmall />
          </div>
        </div>
      </div>
    </main>
  );
};


export const revalidate = 0;
export const dynamic = "force-dynamic";

export default Hiking;
