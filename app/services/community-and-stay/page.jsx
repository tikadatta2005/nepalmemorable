import CommunityHolder from "@/components/community/CommunityHolder";
import Banner1 from "@/components/reusables/banners/Banner1";
import CardBook from "@/components/reusables/cards/CardBook";
import React from "react";
import { GetData } from "@/utils/GetData";
import FastBookNow from "@/components/forms/FastBookNow";

const meta = {
  title: "Community & Homestay in Nepal",
  description:
    "Step into the heart of Nepal through its welcoming communities. Stay with local families in traditional homestays, share meals, learn ancient customs, and take part in daily village life. Wander through terraced hills, fragrant gardens, and bustling local markets, where every interaction offers a glimpse of Nepal’s vibrant culture. Beyond sightseeing, these experiences create lasting connections, soulful memories, and a deeper understanding of life in this extraordinary land.",
  cover: ["/assets/services/home_stay/1.webp"],
};

export const metadata = () => {
  return {
    title: `${meta.title} | Nepal Memorable Tours`,
    description: meta.description,
    openGraph: {
      title: `${meta.title} | Nepal Memorable Tours`,
      description: meta.description,
      url: "https://www.nepalmemorable.com/community-and-stay",
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

const CommunityHomestay = async () => {
  const res = await GetData(
    "/get-contents?type=home-stay&sort=-1&page=0&len=20"
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
          <CommunityHolder>
            {data?.map((elem, index) => (
              <CardBook data={elem} key={index} service="community-and-stay" />
            ))}
          </CommunityHolder>
        </div>

        {/* Sticky Booking Form */}
        <div className="hidden md:block w-full md:w-1/4">
          <div className="sticky top-24">
            <FastBookNow
              title={"Home Stay"}
              location={`https://www.nepalmemorable.com/services/community-and-stay`}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export const revalidate = 300;

export default CommunityHomestay;
