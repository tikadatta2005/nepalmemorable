import Banner3 from "@/components/reusables/banners/Banner3";
import Card1 from "@/components/reusables/cards/Card1";
import BasicHolder from "@/components/reusables/holder/BasicHolder";
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
      cover: "/assets/services/tours.jpg",
      link: "/services/tours",
    },
    {
      _id: "652d4c69b72a5f6d9b3c2f91",
      title: "Trekking",
      cover: "/assets/services/trekking.jpg",
      link: "/services/trekking",
    },
    {
      _id: "652d4c69b72a5f6d9b3c2f93",
      title: "Adventures",
      cover: "/assets/services/adventure.jpg",
      link: "/services/adventures",
    },
    {
      _id: "652d4c69b72a5f6d9b3c2f94",
      title: "National Park",
      cover: "/assets/services/np.jpg",
      link: "/services/national-park",
    },
    {
      _id: "652d4c69b72a5f6d9b3c2f95",
      title: "Hiking",
      cover: "/assets/services/hiking.jpg",
      link: "/services/hiking",
    },
    {
      _id: "652d4c69b72a5f6d9b3c2f96",
      title: "Community & Stay",
      cover: "/assets/services/home.jpg",
      link: "/services/community-and-stay",
    },
  ];

  const data = [...(Array.isArray(res?.data) ? res?.data : [])];

  return (
    <main className="w-full bg-slate-50 min-h-screen">
      <Banner3
        cover={"/assets/services/bg.jpg"}
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
