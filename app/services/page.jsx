import Banner3 from "@/components/reusables/banners/Banner3";
import Card1 from "@/components/reusables/cards/Card1";
import { GetData } from "@/utils/GetData";
import React from "react";

export const revalidate = 0;
export const dynamic = "force-dynamic";

const Services = async () => {
  const res = await GetData(
    "/get-contents?type=services&sort=1&page=0"
  );
  const data = res?.data;

  return (
    <main className="w-full bg-slate-50 min-h-screen">
      <Banner3
        cover={"/assets/services/bg.jpg"}
        title="Explore Nepal – Treks & Tours of a Lifetime"
        description="Discover the beauty of Nepal with Nepal Memorable. From breathtaking Himalayan treks to cultural tours, we craft unforgettable adventures that let you experience nature, tradition, and adventure all in one journey."
      />
      <section className="w-full max-w-7xl mx-auto p-4 py-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map((elem, index) => {
          return (
            <Card1
              key={index}
              title={elem?.title}
              cover={elem?.cover}
              link={
                elem?.link ||
                `/services/${elem?.title
                  ?.replaceAll(" ", "-")
                  ?.toLowerCase()}?_id=${elem?._id}`
              }
            />
          );
        })}
      </section>
    </main>
  );
};

export default Services;
