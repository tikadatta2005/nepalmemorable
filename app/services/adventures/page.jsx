import AdventureHolder from "@/components/adventures/AdventureHolder";
import FastBookNow from "@/components/forms/FastBookNow";
import Banner1 from "@/components/reusables/banners/Banner1";
import CardBook from "@/components/reusables/cards/CardBook";
import { GetData } from "@/utils/GetData";
import React from "react";
const meta = {
  title: "Adventures in Nepal",
  description:
    "From mountains to rivers, Nepal is your playground for adventure.",
  content: `<p>Nepal offers a playground for every adventure seeker. Ride through winding biking trails in Kathmandu and Pokhara, soar high above the valleys with paragliding, and feel the adrenaline rush while rafting down roaring Himalayan rivers. For those seeking a unique thrill, ziplining across lush valleys is an experience you won't forget.</p><br/><p>Our adventures are designed for all skill levels, from beginners to experienced thrill-seekers. With professional guides and safety-first equipment, each activity promises excitement without compromise.</p>`,
  cover: ["/assets/services/adventure/1.webp"],
};

export const metadata = () => {
  return {
    title: `${meta.title} | Nepal Memorable Tours`,
    description: meta.description,
    openGraph: {
      title: `${meta.title} | Nepal Memorable Tours`,
      description: meta.description,
      url: "https://www.nepalmemorable.com/services/adventures",
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

const Adventures = async () => {
  const res = await GetData(
    "/get-contents?type=adventures&sort=-1&page=0&len=20"
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
          <AdventureHolder>
            {data?.map((elem, index) => (
              <CardBook data={elem} key={index} service="adventures" />
            ))}
          </AdventureHolder>
        </div>

        {/* Sticky Booking Form */}
        <div className="hidden md:block w-full md:w-1/4">
          <div className="sticky top-24">
            <FastBookNow title={"Adventures"} location={`https://www.nepalmemorable.com/services/adventures`}/>
          </div>
        </div>
      </div>
    </main>
  );
};


export const revalidate = 300;

export default Adventures;
