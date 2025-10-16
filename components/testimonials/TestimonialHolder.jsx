"use client";

import React from "react";
import BasicHolder from "../reusables/holder/BasicHolder";
import TestimonialCard from "./TestimonialCard";
import { FaQuoteLeft } from "react-icons/fa6";

const TestimonialHolder = ({ children }) => {
  return (
    <div className="w-full relative max-w-5xl mx-auto bg-cyan-800 min-h-[calc(100vh-8rem)]  rounded-xl shadow-xl ">
      <div className="w-20 h-20 absolute rounded-full shadow-xl -mt-11 ml-11 text-white bg-cyan-600 flex items-center justify-center">
        <FaQuoteLeft size={30}/>
      </div>
      <BasicHolder
        service="tours"
        className="md:grid-cols-2 p-8 lg:grid-cols-3"
        url={`${process.env.NEXT_PUBLIC_SERVER}/api/v1/client/get-contents?type=testimonials&page=:page`}
        Card={TestimonialCard}
      >
        {children}
      </BasicHolder>
    </div>
  );
};

export default TestimonialHolder;
