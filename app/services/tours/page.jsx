import TourHolder from "@/components/tours/TourHolder";
import FastBookNowSmall from "@/components/forms/FastBookNow";
import Banner1 from "@/components/reusables/banners/Banner1";
import CardBook from "@/components/reusables/cards/CardBook";
import React from "react";

const Tours = async () => {
  const data = {
    _id: "652d4c69b72a5f6d9b3c2f93",
    title: "Tours in Nepal",
    cover: "/assets/services/tours.jpg",
    link: "/services/tours",
    description:
      "Experience Nepal’s rich culture, breathtaking landscapes, and spiritual heritage through our thoughtfully curated tours.",
    content: `
      <p>
        From the timeless temples of Kathmandu to the peaceful hills of Nagarkot and the lush jungles of Chitwan, 
        every corner of Nepal has a story to tell. Our tours are designed for travelers who wish to experience 
        <strong>culture, nature, and adventure</strong> in perfect balance.
      </p>
      <br/>
      <p>
        Whether it’s watching the sunrise over the Himalayas, exploring ancient cities, or walking through 
        serene monasteries, each journey brings you closer to the heart of Nepal. 
        With expert local guides and comfortable travel plans, we make exploration effortless and memorable.
      </p>
    `,
    data: [
      {
        title: "Kathmandu-Nagarkot-Bhaktapur Tour",
        description: `
          <p>
            A short yet beautiful escape blending culture, history, and Himalayan views. 
            Explore sacred temples, sunrise over Nagarkot, and the ancient charm of Bhaktapur in one refreshing tour.
          </p>
        `,
        duration: "4 Days",
        cover: "/assets/tours/ktm.jpg",
      },
      {
        title: "Chitwan Jungle Safari Tour",
        description: `
          <p>
            Dive into the wild! Enjoy thrilling jeep safaris, canoe rides, and cultural evenings 
            amidst Chitwan’s lush jungles and rich wildlife. A perfect short getaway into nature.
          </p>
        `,
        duration: "3 Days",
        cover: "/assets/tours/chitwan.jpg",
      },
      {
        title: "Everest Panorama Tour",
        description: `
          <p>
            Fly close to the world’s highest peaks and explore scenic Himalayan villages. 
            A compact adventure with mesmerizing Everest views and warm Sherpa hospitality.
          </p>
        `,
        duration: "5 Days",
        cover: "/assets/tours/everest.jpg",
      },
      {
        title: "Annapurna Panorama Tour",
        description: `
          <p>
            Enjoy a peaceful trek through the Annapurna foothills with sunrise views from Poon Hill 
            and cultural immersion in Gurung villages. A balanced mix of comfort and adventure.
          </p>
        `,
        duration: "6 Days",
        cover: "/assets/tours/annapurna.jpg",
      },
      {
        title: "Kathmandu-Lumbini-Pokhara-Kathmandu Tour",
        description: `
          <p>
            A complete Nepal experience featuring heritage, spirituality, and natural beauty — 
            from Kathmandu’s ancient temples to Lumbini’s peace and Pokhara’s serene lakes.
          </p>
        `,
        duration: "7 Days",
        cover: "/assets/tours/lumbini.jpg",
      },
      {
        title: "Buddhist Heritage Tour",
        description: `
          <p>
            Follow the sacred path of Lord Buddha across Nepal’s most revered monasteries and stupas. 
            A deeply spiritual journey through peace, learning, and reflection.
          </p>
        `,
        duration: "5 Days",
        cover: "/assets/tours/buddist.jpg",
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
          <TourHolder>
            {data?.data?.map((elem, index) => (
              <CardBook data={elem} key={index} service="tours" />
            ))}
          </TourHolder>
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

export default Tours;
