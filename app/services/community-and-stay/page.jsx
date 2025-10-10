import FastBookNowSmall from "@/components/forms/FastBookNow";
import CommunityHolder from "@/components/community/CommunityHolder";
import Banner1 from "@/components/reusables/banners/Banner1";
import CardBook from "@/components/reusables/cards/CardBook";
import React from "react";

const CommunityHomestay = async () => {
  const data = {
    _id: "65401communitypage",
    title: "Community & Homestay in Nepal",
    cover: "/assets/services/home.jpg",
    link: "/services/community-and-stay",
    description:
      "Experience Nepal like a local — stay with families, share meals, join village life, and support sustainable tourism that uplifts communities.",
    content: `
      <p>
        Community-based and homestay tourism in Nepal offers travelers the chance to live with local families, 
        enjoy authentic food, and experience rich traditions firsthand. 
        Unlike hotels, these stays are run by the communities themselves, ensuring that tourism directly supports 
        local livelihoods, women’s empowerment, and cultural preservation.
      </p>
      <br/>
      <p>
        Guests enjoy warm hospitality, cultural performances, cooking and farming activities, and 
        meaningful interactions with diverse ethnic groups — including Gurung, Tamang, Tharu, Magar, Rai, Limbu, Sherpa, and Newar. 
        It’s a beautiful way to travel consciously while discovering Nepal’s rural heart.
      </p>
    `,
    data: [
      {
        title: "Sirubari Homestay",
        description: `
          <p>
            Located in the hills of Syangja near Pokhara, <strong>Sirubari</strong> is Nepal’s first organized community-based homestay village. 
            Visitors are welcomed with traditional ceremonies, stay in tidy stone-and-slate Gurung homes, 
            and enjoy cultural dances, handicraft displays, and walks to Himalayan viewpoints showcasing Annapurna and Dhaulagiri. 
            Known for its hospitality and well-managed community spirit, Sirubari offers a peaceful and authentic Gurung village experience.
          </p>
        `,
        location: "Syangja District (Near Pokhara)",
        altitude: "1,700 m",
        season: "All Seasons",
        cover: "/assets/community/sirubari.jpg",
      },
      {
        title: "Ghalegaun Homestay",
        description: `
          <p>
            Often called the <strong>Model Village of Nepal</strong>, Ghalegaun in Lamjung district is a shining example of community tourism. 
            Overlooking the Annapurna and Manaslu ranges, this Gurung settlement welcomes visitors with garlands, cultural dances, and local cuisine. 
            The village features traditional houses, a small museum, and breathtaking sunrise views — offering a serene, immersive experience of rural Himalayan life.
          </p>
        `,
        location: "Lamjung District, Gandaki Province",
        altitude: "2,070 m",
        season: "Autumn, Spring",
        cover: "/assets/community/ghalegaun.jpg",
      },
      {
        title: "Barpak Homestay",
        description: `
          <p>
            Perched on a hilltop in Gorkha at 1,900 meters, <strong>Barpak</strong> is a large Gurung village with panoramic views of Buddha Himal and Ganesh Himal. 
            Once the epicenter of the 2015 earthquake, Barpak has rebuilt itself as a model tourism village, offering comfortable homestays and rich cultural experiences. 
            Visitors can learn about Gurung heritage, join in daily village life, and witness Nepal’s resilience and unity firsthand.
          </p>
        `,
        location: "Gorkha District, Gandaki Province",
        altitude: "1,900 m",
        season: "Autumn, Winter, Spring",
        cover: "/assets/community/barpak.jpg",
      },
      {
        title: "Chitlang Homestay",
        description: `
          <p>
            Nestled just a short drive from Kathmandu, <strong>Chitlang</strong> offers a refreshing rural escape rich in history and culture. 
            A traditional Newari settlement surrounded by green hills, it features ancient temples, stone carvings, and organic farms. 
            Visitors can explore the goat cheese factory, hike to Kulekhani (Markhu) Lake, and enjoy peaceful countryside living — 
            making it an ideal weekend homestay close to the capital.
          </p>
        `,
        location: "Makwanpur District (Near Kathmandu)",
        altitude: "1,700 m",
        season: "All Seasons",
        cover: "/assets/community/chitlang.jpg",
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
          <CommunityHolder>
            {data?.data?.map((elem, index) => (
              <CardBook data={elem} key={index} service="community-homestay" />
            ))}
          </CommunityHolder>
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

export default CommunityHomestay;
