import AboutUsCard from "@/components/About-Us/AboutUsCard";
import Banner1 from "@/components/reusables/banners/Banner1";
import Banner2 from "@/components/reusables/banners/Banner2";
import React from "react";

export const revalidate = 0;
export const dynamic = "force-dynamic";

const AboutUs = async () => {
  const data = [
    {
      title: "Discover Nepal Like Never Before",
      description:
        "<p>Since 2012, we create unforgettable journeys across Nepal’s breathtaking landscapes.</p>",
      cover: "/assets/about-us/abt1.jpg",
    },
    {
      title: "Who We Are",
      description: `
      <p>Nepal Memorable Tours is a team of passionate travel experts committed to <strong>safety, quality, and personalized experiences</strong>.</p>
      <p>We guide travelers from around the world, ensuring every journey is seamless, enriching, and unforgettable.</p>
    `,
      cover: "/assets/about-us/abt1.jpg",
    },
    {
      title: "Our Mission & Values",
      description: `
      <ul>
        <li><strong>Safety First:</strong> Every adventure is carefully planned to ensure peace of mind.</li>
        <li><strong>Thrilling Experiences:</strong> From treks to river rafting, adventure is our signature.</li>
        <li><strong>Community Empowerment:</strong> Supporting local communities through sustainable tourism.</li>
        <li><strong>Eco-Friendly Travel:</strong> Respecting nature while exploring it.</li>
      </ul>
    `,
      cover: "/assets/about-us/abt1.jpg",
    },
    {
      title: "What We Offer",
      description: `
      <ul>
        <li><strong>Logistical Support:</strong> Charity trips, professional projects, group delegations, and visa assistance.</li>
        <li><strong>Transportation:</strong> Car, motorbike, mountain bike rentals, and private bus bookings.</li>
        <li><strong>Accommodation & Adventure:</strong> Hotels, cozy home-stays, trekking, rafting, bungee, paragliding, and jungle safaris.</li>
        <li><strong>Specialized Trips:</strong> Support for researchers, filmmakers, volunteers, and interpreters.</li>
        <li><strong>Community Tourism:</strong> Explore local culture while supporting sustainable initiatives.</li>
      </ul>
    `,
      cover: "/assets/about-us/abt1.jpg",
    },
    {
      title: "Empowering Communities",
      description: `
      <p>We actively promote tourism in Nepal’s diverse regions, highlighting local culture and traditions.</p>
      <p>Our initiatives empower communities while offering travelers authentic and immersive experiences.</p>
    `,
      cover: "/assets/about-us/abt1.jpg",
    },
    {
      title: "Start Your Adventure Today",
      description: `
      <p>Ready to explore Nepal with a team that makes every trip memorable?</p>
      <p>Plan your journey with us today and create experiences that last a lifetime.</p>
    `,
      cover: "/assets/about-us/abt1.jpg",
    },
  ];

  const finalindex = data?.length - 1;

  return (
    <main className="w-full">
      {Array.isArray(data) &&
        data?.map((element, index) => {
          const elem = { ...element };

          if (index === 0) {
            return (
              <Banner1
                title={elem?.title}
                description={elem?.description}
                cover={elem?.cover}
                key={index}
              />
            );
          } else if (index === finalindex) {
            return (
              <Banner2
                title={elem?.title}
                description={elem?.description}
                cover={elem?.cover}
                key={index}
                link={{href:"/book-now", name:"Book a trip now!"}}
              />
            );
          } else {
            return (
              <AboutUsCard
                index={index}
                title={elem?.title}
                description={elem?.description}
                cover={elem?.cover}
                key={index}
              />
            );
          }
        })}
    </main>
  );
};

export default AboutUs;
