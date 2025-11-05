import Banner1 from "@/components/reusables/banners/Banner1";
import { GetData } from "@/utils/GetData";
import React from "react";

export const revalidate = 0;
export const dynamic = "force-dynamic";
const page = async () => {
  const res = await GetData("/get-contents?type=terms&sort=1&page=0");
  const data = res?.data;

  return (
    <main className="w-full flex flex-col">
      <Banner1
        title="Terms & Services"
        description="Please review the following terms that govern your use of our website and travel services. By booking with us, you agree to these policies designed to ensure a safe and seamless experience."
        cover="/assets/terms/bg.jpg"
      />
      <br />
      {data?.map((elem, index) => {
        return (
          <section
            className="w-full max-w-5xl flex flex-col gap-4 mx-auto p-4"
            key={index}
          >
            <h2 className="w-full text-2xl md:text-4xl text-slate-800">
              {elem?.title}
            </h2>
            <div
              className="text-base md:text-lg text-slate-500 flex flex-col gap-4"
              dangerouslySetInnerHTML={{ __html: `${elem?.description}` }}
            />
          </section>
        );
      })}
    </main>
  );
};

export default page;
