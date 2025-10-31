import React from "react";
import Banner3 from "@/components/reusables/banners/Banner3";
import PackageCards from "@/components/reusables/cards/PackageCards";

export const revalidate = 0;
export const dynamic = "force-dynamic";

const Packages = async () => {
  const data = [
    {
      title: "Everest Base Camp Trek",
      subtitle: "Walk Among the Giants of the Himalayas",
      highlight: "5 days (1500 m)",
      cover: "/assets/packages/image1.jpg",
      features: `
      <ul class="list-disc pl-5 space-y-1">
        <li>12-night guided trek to Everest Base Camp</li>
        <li>Scenic flight to Lukla and back</li>
        <li>Visit Namche Bazaar, Tengboche Monastery & Sherpa villages</li>
        <li>Incredible views of Everest, Lhotse & Ama Dablam</li>
      </ul>
      <p class="mt-2 text-slate-600">
        A legendary adventure to the base of the world’s highest peak — blending challenge, beauty, and culture.
      </p>
      `,
    },
    {
      title: "Annapurna Base Camp Trek",
      subtitle: "A Classic Himalayan Journey",
      highlight: "5 days (1500 m)",
      cover: "/assets/packages/image2.jpg",
      features: `
      <ul class="list-disc pl-5 space-y-1">
        <li>10-day trek through forests, waterfalls, and Gurung villages</li>
        <li>Stunning sunrise view from Poon Hill</li>
        <li>Tea-house accommodation and local cuisine</li>
        <li>Panoramic views of Annapurna and Machhapuchhre</li>
      </ul>
      <p class="mt-2 text-slate-600">
        A perfect mix of adventure and serenity — ideal for first-time trekkers seeking true Himalayan charm.
      </p>
      `,
    },
    {
      title: "Langtang Valley Trek",
      subtitle: "Explore the Valley of Glaciers",
      highlight: "5 days (1500 m)",
      cover: "/assets/packages/image3.jpg",
      features: `
      <ul class="list-disc pl-5 space-y-1">
        <li>7-day trek from Syabrubesi to Kyanjin Gompa</li>
        <li>Scenic alpine forests and Tamang heritage</li>
        <li>Visit ancient monasteries and yak pastures</li>
        <li>Less-crowded and close to Kathmandu</li>
      </ul>
      <p class="mt-2 text-slate-600">
        A short and rewarding trek offering breathtaking views and deep cultural immersion.
      </p>
      `,
    },
    {
      title: "Pokhara Adventure Escape",
      subtitle: "Lakes, Mountains & Adrenaline",
      highlight: "5 days (1500 m)",
      cover: "/assets/packages/image4.jpg",
      features: `
      <ul class="list-disc pl-5 space-y-1">
        <li>5-day scenic tour around Pokhara</li>
        <li>Paragliding, boating, and sunrise at Sarangkot</li>
        <li>Visit Davis Falls & World Peace Pagoda</li>
        <li>Optional zip-lining or ultralight flight</li>
      </ul>
      <p class="mt-2 text-slate-600">
        Perfect for those seeking relaxation and thrill in Nepal’s adventure capital.
      </p>
      `,
    },
    {
      title: "Kathmandu Heritage Journey",
      subtitle: "Temples, Palaces & Living Culture",
      highlight: "5 days (1500 m)",
      cover: "/assets/packages/image5.jpg",
      features: `
      <ul class="list-disc pl-5 space-y-1">
        <li>3-day guided exploration of Kathmandu, Patan & Bhaktapur</li>
        <li>Visit UNESCO World Heritage Sites and ancient courtyards</li>
        <li>Local market tours and traditional dinner</li>
        <li>Insight into Nepal’s art, faith, and history</li>
      </ul>
      <p class="mt-2 text-slate-600">
        Dive into the spiritual and artistic heart of Nepal — where every street tells a story.
      </p>
      `,
    },
    {
      title: "Chitwan Jungle Safari",
      subtitle: "Wildlife & Culture in the Southern Plains",
      highlight: "5 days (1500 m)",
      cover: "/assets/packages/image6.jpg",
      features: `
      <ul class="list-disc pl-5 space-y-1">
        <li>3-night safari in Chitwan National Park</li>
        <li>Jeep & canoe tours to spot rhinos and crocodiles</li>
        <li>Tharu cultural dance and village visit</li>
        <li>Ethical elephant experience (optional)</li>
      </ul>
      <p class="mt-2 text-slate-600">
        Discover Nepal’s wild side — a perfect balance of nature, wildlife, and cultural encounters.
      </p>
      `,
    },
  ];

  return (
    <main className="w-full bg-slate-50 min-h-screen">
      <Banner3
        cover={"/assets/packages/bg.jpg"}
        title="Nepal Tour & Trek Packages"
        description="From mountain adventures to cultural escapes — discover the best of Nepal with curated journeys for every traveler."
      />
      <section className="w-full max-w-7xl mx-auto p-4 py-8 gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {data?.map((elem, index) => {
          return <PackageCards data={elem} key={index} />;
        })}
      </section>
    </main>
  );
};

export default Packages;
