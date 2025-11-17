import Banner3 from "@/components/reusables/banners/Banner3";
import Card1 from "@/components/reusables/cards/Card1";
import ServHolder from "@/components/services/ServHolder";
import { GetData } from "@/utils/GetData";
import React from "react";

export const revalidate = 0;
export const dynamic = "force-dynamic";

const Services = async () => {
  const res = await GetData(
    "/get-contents?type=services&sort=-1&page=0&len=20"
  );

  const basicData = [
    {
      _id: "652d4c69b72a5f6d9b3c2f92",
      title: "Tours",
      cover: "/assets/services/tours/1.webp",
      link: "/services/tours",
    },
    {
      _id: "652d4c69b72a5f6d9b3c2f91",
      title: "Trekking",
      cover: "/assets/services/trekking/1.webp",
      link: "/services/trekking",
    },
    {
      _id: "652d4c69b72a5f6d9b3c2f93",
      title: "Adventures",
      cover: "/assets/services/adventure/1.webp",
      link: "/services/adventures",
    },
    {
      _id: "652d4c69b72a5f6d9b3c2f94",
      title: "National Park",
      cover: "/assets/services/np/1.webp",
      link: "/services/national-park",
    },
    {
      _id: "652d4c69b72a5f6d9b3c2f95",
      title: "Hiking",
      cover: "/assets/services/hiking/1.webp",
      link: "/services/hiking",
    },
    {
      _id: "652d4c69b72a5f6d9b3c2f96",
      title: "Home Stay",
      cover: "/assets/services/home_stay/1.webp",
      link: "/services/community-and-stay",
    },
  ];

  const data = [...(Array.isArray(res?.data) ? res?.data : [])];

  return (
    <main className="w-full bg-slate-50 min-h-screen">
      <Banner3
        cover={"/assets/services/bg.webp"}
        title="Explore Nepal – Treks & Tours of a Lifetime"
        description="Discover the beauty of Nepal with Nepal Memorable. From breathtaking Himalayan treks to cultural tours, we craft unforgettable adventures that let you experience nature, tradition, and adventure all in one journey."
      />
      <ServHolder>
        {basicData?.map((elem, index) => {
          return (
            <Card1
              key={index}
              title={elem?.title}
              cover={elem?.cover}
              link={
                elem?.link ||
                `/services/${elem?.title?.replaceAll(" ", "-")?.toLowerCase()}`
              }
            />
          );
        })}{data?.map((elem, index) => {
          return (
            <Card1
              key={index}
              title={elem?.title}
              cover={elem?.cover}
              link={
                `/services/${elem?._id}`
              }
            />
          );
        })}
      </ServHolder>
    </main>
  );
};

export default Services;
