"use client";
import useInfinite from "@/hooks/useInfinite";
import React from "react";

const BasicHolder = ({ children, className, url, Card , service, initial}) => {
  const { data, ref } = useInfinite(url, initial);

  return (
    <section
      className={`w-full max-w-5xl mx-auto grid grid-cols-1 gap-4 ${className} `}
    >
      {children}
      {Array?.isArray(data) &&
        data?.map((elem, index) => <Card data={elem} service={service} key={index} />)}

      <div className="w-full" ref={ref}></div>
    </section>
  );
};

export default BasicHolder;
