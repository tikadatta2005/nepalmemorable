import React from "react";
import Banner3 from "@/components/reusables/banners/Banner3";
import PackageCards from "@/components/reusables/cards/PackageCards";
import { GetData } from "@/utils/GetData";
import PkgHolder from "@/components/packages/PkgHolder";

const meta = {
  title: "Nepal Tour & Trek Packages",
  description:
"Experience Nepal with ease through our expertly curated tour and trek packages—combining comfort, adventure, and authentic local experiences for a truly memorable journey." , content: "",
  cover: "/assets/packages/bg.webp",
};

export const metadata = () => {
  return {
    title: `${meta.title} | Nepal Memorable Tours`,
    description: meta.description,
    openGraph: {
      title: `${meta.title} | Nepal Memorable Tours`,
      description: meta.description,
      url: "https://www.nepalmemorable.com/packages",
      siteName: "Nepal Memorable Tours",
      images: [
        {
          url: `https://www.nepalmemorable.com${meta.cover}`,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
};

const Packages = async () => {
  const res = await GetData(
    "/get-contents?type=packages&sort=-1&page=0&len=20"
  );
  const data = res?.data;
  return (
    <main className="w-full bg-slate-50 min-h-screen">
      <Banner3
        cover={meta?.cover}
        title={meta?.title}
        description={meta?.description}
      />
      <PkgHolder>
        {data?.map((elem, index) => {
          return <PackageCards data={elem} key={index} />;
        })}
      </PkgHolder>
    </main>
  );
};
export const revalidate = 300;

export default Packages;
