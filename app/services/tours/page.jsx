import TourHolder from "@/components/tours/TourHolder";
import FastBookNowSmall from "@/components/forms/FastBookNow";
import Banner1 from "@/components/reusables/banners/Banner1";
import CardBook from "@/components/reusables/cards/CardBook";
import React from "react";
import { GetData } from "@/utils/GetData";

const meta = {
  title: "Tours in Nepal",
  description:
    "Experience Nepal’s rich culture, breathtaking landscapes, and spiritual heritage through our thoughtfully curated tours.",
  content: `<p>From the timeless temples of Kathmandu to the peaceful hills of Nagarkot and the lush jungles of Chitwan, every corner of Nepal has a story to tell. Our tours are designed for travelers who wish to experience culture, nature, and adventure in perfect balance.</p><br/><p>Whether it’s watching the sunrise over the Himalayas, exploring ancient cities, or walking through serene monasteries, each journey brings you closer to the heart of Nepal. With expert local guides and comfortable travel plans, we make exploration effortless and memorable.</p>`,
  cover: "/assets/services/tours.jpg",
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
          url: `https://www.nepalmemorable.com${meta.cover}`, // full URL for OG
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
      <div className="w-full max-w-7xl mx-auto p-6 md:p-12 text-gray-700 text-base md:text-lg leading-relaxed">
        <div
          dangerouslySetInnerHTML={{ __html: meta?.content }}
          className="prose prose-cyan max-w-full"
        ></div>
      </div>

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
            <FastBookNowSmall />
          </div>
        </div>
      </div>
    </main>
  );
};


export const revalidate = 0;
export const dynamic = "force-dynamic";

export default Tours;
