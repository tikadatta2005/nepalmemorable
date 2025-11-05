import FastBookNowSmall from "@/components/forms/FastBookNow";
import NpHolder from "@/components/NationalParkTrip/NpHolder";
import Banner1 from "@/components/reusables/banners/Banner1";
import CardBook from "@/components/reusables/cards/CardBook";
import { GetData } from "@/utils/GetData";
import React from "react";

const meta = {
  title: "National Park Trips in Nepal",
  description:
    "Discover Nepal’s breathtaking biodiversity and majestic wildlife through guided trips into its world-famous national parks.",
  content: `<p>Nepal’s national parks offer a blend of nature, culture, and adventure. From the subtropical jungles of Chitwan to the snow-covered peaks of Sagarmatha, each park holds a unique experience for travelers and wildlife lovers alike.</p><br/><p>Our trips are designed to connect you with nature—whether you’re spotting rhinos in the wild, trekking through alpine forests, or listening to the calls of exotic birds at dawn. With our experienced local guides, you’ll explore the untouched beauty of Nepal’s protected areas safely and sustainably.</p>`,
  cover: "/assets/services/np.jpg",
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


const NationalParkTrip = async () => {
  const res = await GetData(
    "/get-contents?type=national-park&sort=1&page=0"
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
          <NpHolder>
            {data?.data?.map((elem, index) => (
              <CardBook data={elem} key={index} service="national-park-trips" />
            ))}
          </NpHolder>
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

export default NationalParkTrip;
