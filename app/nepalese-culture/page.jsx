import AboutUsCard from "@/components/About-Us/AboutUsCard";
import Banner1 from "@/components/reusables/banners/Banner1";
import React from "react";

const Culture = async () => {
const data = [
  {
    title: "Dashain",
    description: `
      <p><strong>Dashain</strong> is Nepal’s most celebrated festival, symbolizing the victory of good over evil. It honors Goddess Durga’s triumph over the demon Mahishasura.</p>
      <p>Families across the country come together to receive <em>tika</em> and <em>jamara</em> from elders, fly kites, play cards, and enjoy feasts with delicacies like goat meat and sel roti. Homes are decorated, filled with laughter, blessings, and togetherness.</p>
      <p>Dashain represents harmony, renewal, and the joy of family bonds.</p>
    `,
    cover: "/assets/culture/dashain.jpg",
  },
  {
    title: "Tihar",
    description: `
      <p><strong>Tihar</strong>, also known as the <em>Festival of Lights</em>, spans five beautiful days that celebrate animals, gods, and human relationships.</p>
      <ul>
        <li><strong>Kaag Tihar:</strong> Worship of crows, messengers of news.</li>
        <li><strong>Kukur Tihar:</strong> Honoring loyal dogs with garlands and treats.</li>
        <li><strong>Gai Tihar & Laxmi Puja:</strong> Worship of cows and Goddess Laxmi for wealth and prosperity.</li>
        <li><strong>Govardhan Puja & Mha Puja:</strong> Celebration of nature and self-purification.</li>
        <li><strong>Bhai Tika:</strong> The special day celebrating the sacred bond between brothers and sisters.</li>
      </ul>
      <p>During Tihar, homes glow with <em>diyos</em> and colorful <em>rangolis</em>, and the entire nation sparkles in light and happiness.</p>
    `,
    cover: "/assets/culture/tihar.jpg",
  },
  {
    title: "Holi",
    description: `
      <p><strong>Holi</strong>, the festival of colors, marks the arrival of spring and the triumph of good over evil. It celebrates the playful spirit of Lord Krishna and the joy of unity.</p>
      <p>People gather in streets and courtyards to throw vibrant powders, spray water, sing, dance, and share sweets. Barriers of age, caste, and status dissolve in laughter and color.</p>
      <p>Holi represents love, equality, and renewal — spreading happiness across Nepal.</p>
    `,
    cover: "/assets/culture/holi.jpg",
  },
  {
    title: "Chhath",
    description: `
      <p><strong>Chhath</strong> is a sacred Hindu festival dedicated to the Sun God (<em>Surya</em>) and Chhathi Maiya, celebrated mainly in Nepal’s Terai region.</p>
      <p>Devotees fast for days, cleanse themselves in rivers, and offer prayers to the setting and rising sun, expressing gratitude for life and nature’s bounty.</p>
      <p>The riversides glow with thousands of <em>diyas</em> as families sing traditional songs, creating one of Nepal’s most spiritual and serene sights.</p>
    `,
    cover: "/assets/culture/chhath.jpg",
  },
  {
    title: "Teej",
    description: `
      <p><strong>Teej</strong> is a joyful festival celebrated by Hindu women in honor of Goddess Parvati’s reunion with Lord Shiva.</p>
      <p>Women dress in vibrant red sarees, gather at temples, sing devotional songs, and perform traditional dances. Many observe fasting and pray for the happiness and longevity of their husbands and families.</p>
      <p>Teej symbolizes love, purity, and feminine devotion — filling Nepal’s temples and streets with color, music, and faith.</p>
    `,
    cover: "/assets/culture/teej.jpg",
  },
];


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

      {Array.isArray(data) &&
        data?.map((element, index) => {
          const elem = { ...element };

          return (
            <AboutUsCard
              index={index}
              title={elem?.title}
              description={elem?.description}
              cover={elem?.cover}
              key={index}
            />
          );
        })}
    </main>
  );
};

export default Culture;
