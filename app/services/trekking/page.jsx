import TrekkHolder from "@/components/trekking/TrekkHolder";
import Banner1 from "@/components/reusables/banners/Banner1";
import CardBook from "@/components/reusables/cards/CardBook";
import React from "react";
import { GetData } from "@/utils/GetData";
import FastBookNow from "@/components/forms/FastBookNow";
const meta = {
  title: "Trekking in Nepal",
  description:
    "Challenge your spirit and embrace the exhilaration of Nepal’s high trails from Everest’s towering peaks to Annapurna’s rugged paths. Trek through untamed wilderness, cross suspension bridges, and walk among the clouds through lush valleys and snowy peaks. Along the way, serene rivers, cascading waterfalls, and breathtaking panoramas invite moments of meditation, reflection, and a true spiritual journey—trekking in Nepal nourishes both the body and the soul.",
  cover: [
    "/assets/services/trekking/1.webp",
    "/assets/services/trekking/2.webp",
  ],
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

const Trekking = async () => {
  const res = await GetData(
    "/get-contents?type=trekking-regions&sort=1&page=0&len=20"
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
          <TrekkHolder type="trekking-regions" slug="" sort={"1"}>
            {data?.map((elem, index) => (
              <CardBook data={elem} key={index} service="trekking" />
            ))}
          </TrekkHolder>
        </div>

        {/* Sticky Booking Form */}
        <div className="hidden md:block w-full md:w-1/4">
          <div className="sticky top-24">
            <FastBookNow
              title={"Trekking"}
              location={`https://www.nepalmemorable.com/services/trekking`}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export const revalidate = 300;

export default Trekking;
