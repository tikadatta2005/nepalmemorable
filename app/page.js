import Hero from "@/components/Home/Hero";
import Testimonials from "@/components/Home/Testimonials";
import Trips from "@/components/Home/Trips";
import WhyUs from "@/components/Home/WhyUs";
import { GetData } from "@/utils/GetData";
import React from "react";

export const revalidate = 3600;


const Home = async () => {
  const res = await GetData("/web-details")
  const data = res?.data
  return (
    <main className="w-full">
      <Hero title={data?.title} />
      <WhyUs cover={data?.cover}/>
      <Trips />
      <Testimonials />
    </main>
  );
};

export default Home;
