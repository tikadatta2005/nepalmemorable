"use client";

import React from "react";
import useInfinite from "@/hooks/useInfinite";
import PackageCards from "../reusables/cards/PackageCards";

const PkgHolder = ({ children }) => {
  const { data, ref } = useInfinite(`/get-contents?type=packages&sort=-1&len=20&page=:page`,1 );

  return (
    <section
      className="w-full max-w-7xl mx-auto p-4 py-8 gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
    >
      {children}
      {Array?.isArray(data) &&
        data?.map((elem, index) => (
          <PackageCards data={elem} service={service} key={index} />
        ))}

      <div className="w-full" ref={ref}></div>
    </section>
  );
};

export default PkgHolder;
