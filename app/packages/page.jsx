import React from "react";
import Banner3 from "@/components/reusables/banners/Banner3";
import PackageCards from "@/components/reusables/cards/PackageCards";
import { GetData } from "@/utils/GetData";
import BasicHolder from "@/components/reusables/holder/BasicHolder";

export const revalidate = 0;
export const dynamic = "force-dynamic";

const meta = {
  title: "Nepal Tour & Trek Packages",
  description:
    "From mountain adventures to cultural escapes — discover the best of Nepal with curated journeys for every traveler.",
  content: "",
  cover: "/assets/packages/bg.jpg",
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
      <BasicHolder
        service="national-park"
        url={`${process.env.NEXT_PUBLIC_SERVER}/api/v1/client/get-contents?type=packages&page=:page&len=20`}
        Card={PackageCards}
        className="w-full max-w-7xl mx-auto p-4 py-8 gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
        initial={1}
      >
        {data?.map((elem, index) => {
          return <PackageCards data={elem} key={index} />;
        })}
      </BasicHolder>
    </main>
  );
};

export default Packages;
