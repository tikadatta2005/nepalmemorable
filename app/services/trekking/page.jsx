import TrekkHolder from "@/components/trekking/TrekkHolder";
import Banner1 from "@/components/reusables/banners/Banner1";
import CardBook from "@/components/reusables/cards/CardBook";
import React from "react";
import { GetData } from "@/utils/GetData";
import FastBookNow from "@/components/forms/FastBookNow";
const meta = {
  title: "Trekking in Nepal",
  description:
    "Walk through ancient trails, high mountain passes, and vibrant villages — Nepal’s treks are journeys of both nature and spirit.",
  content: `<p>Trekking in Nepal is a once-in-a-lifetime experience, combining breathtaking mountain views, rich cultural encounters, and serene natural beauty. From the iconic Everest Base Camp to the tranquil Rara Lake, each route tells a different story.</p><br/><p>Whether you seek high-altitude adventure or peaceful cultural immersion, our treks are guided by experts who ensure safety, comfort, and authenticity. Discover why Nepal is known as the trekker’s paradise.</p>`,
  cover: "/assets/services/trekking.jpg",
};

export const metadata = () => {
  return {
    title: `${meta.title} | Nepal Memorable Tours`,
    description: meta.description,
    openGraph: {
      title: `${meta.title} | Nepal Memorable Tours`,
      description: meta.description,
      url: "https://www.nepalmemorable.com/services/trekking",
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


const Trekking = async () => {
  const res = await GetData(
    "/get-contents?type=trekking&sort=-1&page=0&len=20"
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
          <TrekkHolder>
            {data?.map((elem, index) => (
              <CardBook data={elem} key={index} service="trekking" />
            ))}
          </TrekkHolder>
        </div>

        {/* Sticky Booking Form */}
        <div className="hidden md:block w-full md:w-1/4">
          <div className="sticky top-24">
            <FastBookNow title={"Trekking"} location={`https://www.nepalmemorable.com/services/trekking`}/>
          </div>
        </div>
      </div>
    </main>
  );
};


export const revalidate = 0;
export const dynamic = "force-dynamic";

export default Trekking;
