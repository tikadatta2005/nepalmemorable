import Banner1 from "@/components/reusables/banners/Banner1";
import React from "react";

const Culture = async () => {
  return (
    <main className="w-full bg-gray-50">
      {/* Banner */}
      <Banner1
        title={"Nepal’s Rich Culture & Vibrant Festivals"}
        cover={"/assets/culture/bg.jpg"}
        description={
          "Discover the timeless traditions, colorful festivals, and diverse cultural heritage that make Nepal a land of unity in diversity. From spiritual rituals to joyful celebrations, explore what keeps Nepal’s heart beating through its culture."
        }
      />
    </main>
  );
};

export default Culture;
