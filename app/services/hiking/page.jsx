import FastBookNowSmall from "@/components/forms/FastBookNow";
import HikingHolder from "@/components/hiking/HikingHolder";
import Banner1 from "@/components/reusables/banners/Banner1";
import CardBook from "@/components/reusables/cards/CardBook";
import React from "react";

const Hiking = async () => {
  const data = {
    _id: "65401hikepage",
    title: "Hiking in Nepal",
    cover: "/assets/services/hiking.jpg",
    link: "/services/hiking",
    description:
      "Nepal — the land of trails. From peaceful hill walks to scenic ridge hikes, discover routes that bring you closer to mountains, culture, and nature.",
    content: `
      <p>
        Hiking in Nepal offers the perfect balance of adventure, culture, and natural beauty. 
        Unlike long treks, these routes are shorter and easier, designed for anyone who wants 
        to enjoy Nepal’s stunning landscapes without extreme altitude or long travel days.
      </p>
      <br/>
      <p>
        From panoramic viewpoints near Kathmandu to lakeside trails in Pokhara, 
        every hike lets you experience the <strong>Himalayas up close</strong>. 
        Walk through rhododendron forests, visit ancient monasteries, and meet friendly locals — 
        all within a few days’ journey.
      </p>
    `,
    data: [
      {
        title: "Nagarkot to Changunarayan Hike",
        description: `
          <p>
            A short, scenic hike along the Kathmandu Valley rim offering breathtaking sunrise views of the Himalayas. 
            The trail passes through terraced fields and traditional Newari villages, ending at the ancient 
            <strong>Changunarayan Temple</strong>. Ideal for beginners, it’s a blend of nature, culture, and peaceful countryside just outside the city.
          </p>
        `,
        location: "Kathmandu Valley (Nagarkot – Bhaktapur)",
        height: "2,175 m",
        season: "All Seasons",
        cover: "/assets/hiking/nagarkot.jpg",
      },
      {
        title: "Australian Camp Hike",
        description: `
          <p>
            A popular short hike near Pokhara that rewards you with incredible views of 
            <strong>Annapurna South</strong>, <strong>Machhapuchhre (Fishtail)</strong>, and lush green valleys. 
            The trail winds through <strong>Pothana</strong> and rhododendron forests, making it a peaceful escape for families or anyone wanting a quick Himalayan experience.
          </p>
        `,
        location: "Kaski District (Pokhara Region)",
        height: "2,060 m",
        season: "Autumn, Spring",
        cover: "/assets/hiking/australian_camp.jpg",
      },
      {
        title: "Shivapuri Peak Hike",
        description: `
          <p>
            Located inside <strong>Shivapuri Nagarjun National Park</strong>, this full-day hike takes you through oak and pine forests to the 2,732m summit. 
            Along the way, you’ll visit monasteries, spot rare birds, and enjoy a sweeping view over the Kathmandu Valley and distant Himalayan peaks — 
            a perfect nature retreat close to the city.
          </p>
        `,
        location: "Northern Kathmandu Valley",
        height: "2,732 m",
        season: "Autumn, Winter, Spring",
        cover: "/assets/hiking/shivapuri.jpg",
      },
      {
        title: "World Peace Pagoda Hike",
        description: `
          <p>
            A gentle lakeside hike in Pokhara that climbs to the iconic <strong>World Peace Pagoda</strong>, 
            offering sweeping views of <strong>Phewa Lake</strong>, Pokhara city, and the Annapurna range. 
            The trail is easy yet scenic, perfect for a short adventure or a peaceful sunset walk.
          </p>
        `,
        location: "Pokhara, Kaski District",
        height: "1,100 m",
        season: "All Seasons",
        cover: "/assets/hiking/world_peace_pagoda.jpg",
      },
    ],
  };

  return (
    <main className="w-full bg-gray-50">
      {/* Banner */}
      <Banner1
        title={data?.title}
        cover={data?.cover}
        description={data?.description}
      />

      {/* Intro */}
      <div className="w-full max-w-7xl mx-auto p-6 md:p-12 text-gray-700 text-base md:text-lg leading-relaxed">
        <div
          dangerouslySetInnerHTML={{ __html: data?.content }}
          className="prose prose-cyan max-w-full"
        ></div>
      </div>

      {/* Main Content: Cards + Booking */}
      <div className="w-full max-w-7xl mx-auto p-6 md:p-12 flex flex-col md:flex-row gap-8">
        {/* Cards */}
        <div className="w-full md:w-3/4 space-y-6">
          <HikingHolder>
            {data?.data?.map((elem, index) => (
              <CardBook data={elem} key={index} service="hiking" />
            ))}
          </HikingHolder>
        </div>

        {/* Sticky Booking Form */}
        <div className="hidden md:block w-full md:w-1/4">
          <div className="sticky top-24">
            <FastBookNowSmall />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hiking;
