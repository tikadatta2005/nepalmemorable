import FastBookNowSmall from "@/components/forms/FastBookNow";
import CommunityHolder from "@/components/community/CommunityHolder";
import Banner1 from "@/components/reusables/banners/Banner1";
import CardBook from "@/components/reusables/cards/CardBook";
import React from "react";
import { GetData } from "@/utils/GetData";

const meta = {
  title: "Community & Homestay in Nepal",
  description:
    "Experience Nepal like a local — stay with families, share meals, join village life, and support sustainable tourism that uplifts communities.",
  content: `<p>Community-based and homestay tourism in Nepal offers travelers the chance to live with local families, enjoy authentic food, and experience rich traditions firsthand. Unlike hotels, these stays are run by the communities themselves, ensuring that tourism directly supports local livelihoods, women’s empowerment, and cultural preservation.</p><br/><p>Guests enjoy warm hospitality, cultural performances, cooking and farming activities, and meaningful interactions with diverse ethnic groups — including Gurung, Tamang, Tharu, Magar, Rai, Limbu, Sherpa, and Newar. It’s a beautiful way to travel consciously while discovering Nepal’s rural heart.</p>`,
  cover: "/assets/services/home.jpg",
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
          <CommunityHolder>
            {data?.map((elem, index) => (
              <CardBook data={elem} key={index} service="community-homestay" />
            ))}
          </CommunityHolder>
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

export default CommunityHomestay;
