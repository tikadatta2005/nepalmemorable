import Hero from "@/components/Home/Hero";
import Testimonials from "@/components/Home/Testimonials";
import Trips from "@/components/Home/Trips";
import WhyUs from "@/components/Home/WhyUs";
import React from "react";

export const revalidate = 0;
export const dynamic = "force-dynamic";

const Home = async () => {
  const data = {
    logo: "",
    title: "Tailor-made treks and tours in Nepal",
    cover: "",
    phone: "9845763431",
    email: "navoclouds@gmail.com",
    socialmediaLinks: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.linkedin.com/",
      "https://www.x.com/",
    ],
    name: "NEPAL MEMORABLE",
    description:
      "At NAVOCLOUDS Travel, we believe that travel is far more than visiting new places — it is an experience, a memory, and a journey that reflects your curiosity and spirit. Every tour we organize is designed to celebrate life’s most unforgettable moments, from serene escapes to thrilling adventures. Our journey began with a vision to create travel experiences that seamlessly blend comfort, excitement, and authentic local culture, ensuring each trip is not just taken, but cherished.",
  };
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
