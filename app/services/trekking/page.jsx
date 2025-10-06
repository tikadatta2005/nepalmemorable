import TrekkHolder from "@/components/trekking/TrekkHolder";
import FastBookNowSmall from "@/components/forms/FastBookNow";
import Banner1 from "@/components/reusables/banners/Banner1";
import CardBook from "@/components/reusables/cards/CardBook";
import React from "react";

const Trekking = async () => {
  const data = {
    _id: "652d4c69b72a5f6d9b3c2f93",
    title: "Trekking in Nepal",
    cover: "/assets/services/trekking.jpg",
    link: "/services/trekking",
    description:
      "Walk through ancient trails, high mountain passes, and vibrant villages — Nepal’s treks are journeys of both nature and spirit.",
    content: `
    <p>
      Trekking in Nepal is a once-in-a-lifetime experience, combining <strong>breathtaking mountain views</strong>, 
      <strong>rich cultural encounters</strong>, and serene natural beauty. 
      From the iconic Everest Base Camp to the tranquil Rara Lake, each route tells a different story.
    </p>
    <br/>
    <p>
      Whether you seek high-altitude adventure or peaceful cultural immersion, 
      our treks are guided by experts who ensure safety, comfort, and authenticity. 
      Discover why Nepal is known as the <strong>trekker’s paradise</strong>.
    </p>
  `,
    data: [
      {
        title: "Everest Base Camp (EBC)",
        description: `
        <p>
          Follow the footsteps of legends to the base of Mount Everest. 
          Enjoy Sherpa hospitality, monasteries, and the awe-inspiring views from Kala Patthar.
        </p>
      `,
        height: "5,364 m",
        cover: "/assets/trekking/ebc.jpg",
      },
      {
        title: "Annapurna Base Camp (ABC)",
        description: `
        <p>
          A classic Himalayan trek offering close-up views of Annapurna I and Machhapuchhre (Fishtail). 
          Walk through rhododendron forests, Gurung villages, and natural hot springs at Jhinu Danda.
        </p>
      `,
        height: "4,130 m",
        cover: "/assets/trekking/abc.jpg",
      },
      {
        title: "Manaslu Circuit",
        description: `
        <p>
          A remote and less-traveled route around Mount Manaslu, the world’s 8th highest peak. 
          Discover Tibetan villages, pristine valleys, and the stunning Larkya La Pass.
        </p>
      `,
        height: "5,160 m",
        cover: "/assets/trekking/mansalu.jpg",
      },
      {
        title: "Langtang Valley",
        description: `
        <p>
          A scenic trek close to Kathmandu, offering glacier views, Tamang culture, and peaceful monasteries at Kyanjin Gompa.
        </p>
      `,
        height: "4,984 m",
        cover: "/assets/trekking/lantang.jpg",
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

      {/* Introduction */}
      <div className="w-full max-w-7xl mx-auto p-6 md:p-12 text-gray-700 text-base md:text-lg leading-relaxed">
        <div
          dangerouslySetInnerHTML={{ __html: data?.content }}
          className="prose prose-cyan max-w-full"
        ></div>
      </div>

      {/* Main Content: Cards + Form */}
      <div className="w-full max-w-7xl mx-auto p-6 md:p-12 flex flex-col md:flex-row gap-8">
        {/* Cards */}
        <div className="w-full md:w-3/4 space-y-6">
          <TrekkHolder>
            {data?.data?.map((elem, index) => (
              <CardBook data={elem} key={index} service="trekking" />
            ))}
          </TrekkHolder>
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

export default Trekking;
