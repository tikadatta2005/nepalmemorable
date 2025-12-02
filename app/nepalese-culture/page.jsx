import AboutUsCard from "@/components/About-Us/AboutUsCard";
import Banner1 from "@/components/reusables/banners/Banner1";
import { GetData } from "@/utils/GetData";
import React from "react";

const meta = {
  title: "Experience the Colors of Nepal: Festivals & Traditions",
  description:
"Experience the heart and soul of Nepal through its vibrant festivals and cultural celebrations. From colorful street carnivals to sacred temple rituals, every festival brings communities together in music, dance, and joyous traditions. Wander through lively markets, join in the festivities, and discover the stories, flavors, and rituals that make Nepal’s culture truly unforgettable. Each celebration is not just a spectacle, but a journey into the warmth, spirit, and heritage of this extraordinary land",  content: "",
  cover: ["/assets/culture/bg.webp"],
};

export const metadata = () => {
  return {
    title: `${meta.title} | Nepal Memorable Tours`,
    description: meta.description,
    openGraph: {
      title: `${meta.title} | Nepal Memorable Tours`,
      description: meta.description,
      url: "https://www.nepalmemorable.com/nepalese-culture",
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

const Culture = async () => {
  const res = await GetData("/get-contents?type=nepali-culture&sort=1&page=0");
  const data = res?.data;

  return (
    <main className="w-full bg-gray-50">
      {/* Banner */}
      <Banner1
        title={meta?.title}
        cover={meta?.cover}
        description={meta?.description}
      />

      {Array.isArray(data) &&
        data?.map((element, index) => {
          const elem = { ...element };

          return (
            <AboutUsCard
              index={index}
              title={elem?.title}
              description={elem?.description}
              cover={elem?.cover}
              key={index}
            />
          );
        })}
    </main>
  );
};


export const revalidate = 300;

export default Culture;
