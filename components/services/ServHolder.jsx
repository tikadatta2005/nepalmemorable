"use client";

import React from "react";
import useInfinite from "@/hooks/useInfinite";
import Card1 from "../reusables/cards/Card1";

const ServHolder = ({ children }) => {
  const { data, ref } = useInfinite(
    `/get-contents?type=services&sort=-1&len=20&page=:page`,
    1
  );

  return (
    <section className="w-full max-w-7xl mx-auto p-4 py-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {children}
      {Array?.isArray(data) &&
        data?.map((elem, index) => (
          <Card1
            title={elem?.title}
            cover={`${process.env.NEXT_PUBLIC_SERVER}/${elem?.cover}`}
            link={`/services/${elem?._id}`}
            key={index}
          />
        ))}

      <div className="w-full" ref={ref}></div>
    </section>
  );
};

export default ServHolder;
