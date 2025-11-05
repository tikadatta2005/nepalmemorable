import React from "react";
import Banner3 from "@/components/reusables/banners/Banner3";
import PackageCards from "@/components/reusables/cards/PackageCards";
import { GetData } from "@/utils/GetData";

export const revalidate = 0;
export const dynamic = "force-dynamic";

const Packages = async () => {
  const res = await GetData(
    "/get-contents?type=packages&sort=-1&page=0"
  );
  const data = res?.data;
  return (
    <main className="w-full bg-slate-50 min-h-screen">
      <Banner3
        cover={"/assets/packages/bg.jpg"}
        title="Nepal Tour & Trek Packages"
        description="From mountain adventures to cultural escapes — discover the best of Nepal with curated journeys for every traveler."
      />
      <section className="w-full max-w-7xl mx-auto p-4 py-8 gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {data?.map((elem, index) => {
          return <PackageCards data={elem} key={index} />;
        })}
      </section>
    </main>
  );
};

export default Packages;
