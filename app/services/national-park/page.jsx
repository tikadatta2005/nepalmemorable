import FastBookNowSmall from "@/components/forms/FastBookNow";
import NpHolder from "@/components/NationalParkTrip/NpHolder";
import Banner1 from "@/components/reusables/banners/Banner1";
import CardBook from "@/components/reusables/cards/CardBook";
import React from "react";

const NationalParkTrip = async () => {
  const data = {
    _id: "653d5c81a83b6f7e4a1d8b94",
    title: "National Park Trips",
    cover: "/assets/services/np.jpg",
    link: "/services/national-park",
    description:
      "Discover Nepal’s breathtaking biodiversity and majestic wildlife through guided trips into its world-famous national parks.",
    content: `
      <p>
        Nepal’s national parks offer a blend of nature, culture, and adventure. From the subtropical jungles of <strong>Chitwan</strong> 
        to the snow-covered peaks of <strong>Sagarmatha</strong>, each park holds a unique experience for travelers and wildlife lovers alike.
      </p>
      <br/>
      <p>
        Our trips are designed to connect you with nature—whether you’re spotting rhinos in the wild, trekking through alpine forests, 
        or listening to the calls of exotic birds at dawn. With our experienced local guides, you’ll explore the untouched beauty of Nepal’s 
        protected areas safely and sustainably.
      </p>
    `,
    data: [
      {
        title: "Chitwan National Park",
        description: `
      <p>
        Established in 1973 and listed as a UNESCO World Heritage Site, 
        <strong>Chitwan National Park</strong> is Nepal’s most famous wildlife reserve.
        It shelters endangered species like the <strong>one-horned rhinoceros</strong>, 
        <strong>Bengal tiger</strong>, and <strong>Asian elephant</strong>.
      </p>
      <br/>
      <p>
        Explore through <strong>jeep safaris</strong>, <strong>canoe rides</strong>, or 
        <strong>guided jungle walks</strong>. The nearby <strong>Tharu villages</strong> 
        add a vibrant cultural touch to your trip.
      </p>
    `,
        location: "Chitwan District, Central Nepal",
        season: "Autumn, Winter, Spring",
        cover: "/assets/nationalparks/chitwan.jpg",
      },
      {
        title: "Bardia National Park",
        description: `
      <p>
        <strong>Bardia National Park</strong> in western Nepal offers a 
        quieter and wilder experience than Chitwan, ideal for true nature enthusiasts.
        The park’s grasslands and riverine forests are home to 
        <strong>tigers</strong>, <strong>rhinos</strong>, <strong>deer</strong>, 
        and even <strong>Gangetic dolphins</strong>.
      </p>
      <br/>
      <p>
        Experience <strong>jeep safaris</strong>, <strong>elephant encounters</strong>, 
        or <strong>rafting on the Karnali River</strong> while surrounded by untouched wilderness.
      </p>
    `,
        location: "Bardiya District, Mid-Western Nepal",
        season: "Winter, Spring",
        cover: "/assets/nationalparks/bardia.jpg",
      },
      {
        title: "Sagarmatha National Park",
        description: `
      <p>
        Home to <strong>Mount Everest</strong>, 
        <strong>Sagarmatha National Park</strong> is a high-altitude paradise of snow-capped peaks, 
        glaciers, and ancient Sherpa monasteries.
      </p>
      <br/>
      <p>
        Encounter rare wildlife such as the <strong>snow leopard</strong> and <strong>red panda</strong> 
        as you trek along the iconic <strong>Everest Base Camp trail</strong> 
        surrounded by the grandeur of the Himalayas.
      </p>
    `,
        location: "Solukhumbu District, Eastern Nepal",
        season: "Spring, Autumn",
        cover: "/assets/nationalparks/sagarmatha.jpg",
      },
      {
        title: "Langtang National Park",
        description: `
      <p>
        Just north of Kathmandu, <strong>Langtang National Park</strong> combines natural beauty with cultural richness. 
        Trek through forests of rhododendron and bamboo while spotting <strong>red pandas</strong> and 
        <strong>Himalayan black bears</strong>.
      </p>
      <br/>
      <p>
        Visit the sacred <strong>Gosaikunda Lake</strong> and enjoy scenic mountain views 
        of <strong>Langtang Lirung</strong>. Perfect for short treks close to the capital.
      </p>
    `,
        location: "Rasuwa District, Central Nepal",
        season: "Spring, Autumn",
        cover: "/assets/nationalparks/langtang.jpg",
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
          <NpHolder>
            {data?.data?.map((elem, index) => (
              <CardBook data={elem} key={index} service="national-park-trips" />
            ))}
          </NpHolder>
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

export default NationalParkTrip;
