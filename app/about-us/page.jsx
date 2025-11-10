import AboutUsCard from "@/components/About-Us/AboutUsCard";
import Banner1 from "@/components/reusables/banners/Banner1";
import Banner2 from "@/components/reusables/banners/Banner2";
import { GetData } from "@/utils/GetData";
import React from "react";

export const revalidate = 300;

const AboutUs = async () => {
  const res = await GetData(
    "/get-contents?type=about-nepal-memorable&sort=1&page=0"
  );
  const data = res?.data;

  const finalindex = data?.length - 1;

  return (
    <main className="w-full">
      {Array.isArray(data) &&
        data?.map((element, index) => {
          const elem = { ...element };
          const {cover} = elem

          if (index === 0) {
            return (
              <Banner1
                title={elem?.title}
                description={elem?.description}
                cover={`${process.env.NEXT_PUBLIC_SERVER}/${cover}`}
                key={index}
              />
            );
          } else if (index === finalindex) {
            return (
              <Banner2
                title={elem?.title}
                description={elem?.description}
                cover={`${process.env.NEXT_PUBLIC_SERVER}/${cover}`}
                key={index}
                link={{ href: "/book-now", name: "Book a trip now!" }}
              />
            );
          } else {
            return (
              <AboutUsCard
                index={index}
                title={elem?.title}
                description={elem?.description}
                cover={`${process.env.NEXT_PUBLIC_SERVER}/${cover}`}
                key={index}
              />
            );
          }
        })}
    </main>
  );
};


export default AboutUs;
