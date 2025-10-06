import AdventureHolder from "@/components/adventures/AdventureHolder";
import FastBookNowSmall from "@/components/forms/FastBookNow";
import Banner1 from "@/components/reusables/banners/Banner1";
import CardBook from "@/components/reusables/cards/CardBook";
import React from "react";

const Adventures = async () => {
  const data = {
    _id: "652d4c69b72a5f6d9b3c2f93",
    title: "Adventures",
    cover: "/assets/services/adventure.jpg",
    link: "/services/adventures",
    description:
      "From mountains to rivers, Nepal is your playground for adventure.",
    content: `
      <p>
        Nepal offers a playground for every adventure seeker. Ride through winding <strong>biking</strong> trails in Kathmandu and Pokhara, 
        soar high above the valleys with <strong>paragliding</strong>, and feel the adrenaline rush while <strong>rafting</strong> down 
        roaring Himalayan rivers. For those seeking a unique thrill, <strong>ziplining</strong> across lush valleys is an experience you won't forget.
      </p>
      <br/>
      <p>
        Our adventures are designed for all skill levels, from beginners to experienced thrill-seekers. 
        With professional guides and safety-first equipment, each activity promises excitement without compromise.
      </p>
    `,
    data: [
      {
        title: "Biking",
        description: `
          <p>
            Ride through scenic mountain trails and remote villages covering 15-25 km per route. 
            Each trail offers a mix of gentle slopes and challenging climbs, perfect for both beginners and experienced riders.
          </p>
          <br/>
          <p>
            Enjoy breathtaking views of the Himalayas and local villages along the way. 
            Our guides ensure a safe, fun, and memorable biking adventure through Nepal’s diverse landscapes.
          </p>
        `,
        location: "Kathmandu, Pokhara",
        season: "Spring, Autumn",
        cover: "/assets/adventures/biking.jpg",
      },
      {
        title: "Paragliding",
        description: `
          <p>
            Take off from Sarangkot in Pokhara and glide 20-30 minutes over serene lakes and lush valleys. 
            Feel the wind in your face while enjoying panoramic Himalayan views.
          </p>
          <br/>
          <p>
            Our professional instructors guide you throughout the flight, making it safe and exhilarating. 
            Perfect for both first-timers and adventure enthusiasts seeking a bird’s-eye view of Nepal.
          </p>
        `,
        location: "Pokhara, Bandipur",
        season: "Autumn, Winter",
        cover: "/assets/adventures/paragliding.jpg",
      },
      {
        title: "Rafting",
        description: `
          <p>
            Navigate thrilling rapids on the Trishuli and Seti rivers, covering 12-18 km in 2-4 hours. 
            Experience the excitement of white-water rafting in a safe and guided environment.
          </p>
          <br/>
          <p>
            Suitable for beginners and experienced rafters alike, each trip combines adrenaline-pumping action 
            with the beauty of Nepal’s river valleys and surrounding landscapes.
          </p>
        `,
        location: "Trishuli River, Seti River",
        season: "Spring, Monsoon",
        cover: "/assets/adventures/rafting.jpg",
      },
      {
        title: "Ziplining",
        description: `
          <p>
            Experience one of the steepest and longest ziplines in the world, spanning 1.2 km across valleys, forests, and rivers. 
            Feel the thrill as you soar high above the ground.
          </p>
          <br/>
          <p>
            Perfect for adrenaline seekers and nature lovers alike, the ride offers a quick but unforgettable adventure, 
            with panoramic views and heart-pumping excitement at every moment.
          </p>
        `,
        location: "Pokhara",
        season: "All Seasons",
        cover: "/assets/adventures/zipline.jpg",
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
          <AdventureHolder>
            {data?.data?.map((elem, index) => (
              <CardBook data={elem} key={index} service="adventures" />
            ))}
          </AdventureHolder>
        </div>

        {/* Sticky Booking Form */}
        <div className="hidden md:block w-full md:w-1/4">
          <div className="sticky top-24">
            <FastBookNowSmall/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Adventures;
