import AboutUsCard from "@/components/About-Us/AboutUsCard";
import Banner1 from "@/components/reusables/banners/Banner1";
import { GetData } from "@/utils/GetData";
import React from "react";

const Culture = async () => {
  const res = await GetData(
    "/get-contents?type=nepali-culture&sort=1&page=0"
  );
  const data = res?.data;

  return (
    <main className="w-full bg-gray-50">
      {/* Banner */}
      <Banner1
        title={"Nepal’s Rich Culture & Vibrant Festivals"}
        cover={"/assets/culture/bg.jpg"}
        description={
          "Discover the timeless traditions, colorful festivals, and diverse cultural heritage that make Nepal a land of unity in diversity. From spiritual rituals to joyful celebrations, explore what keeps Nepal’s heart beating through its culture."
        }
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

export default Culture;
