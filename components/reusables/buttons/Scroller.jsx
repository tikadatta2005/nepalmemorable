"use client";
import React from "react";
import { IoArrowDown } from "react-icons/io5";

const Scroller = () => {
  const handleClick = () => {
    window.scrollBy({ top: 400, behavior: "smooth" });
  };
  return (
    <button
      onClick={handleClick}
      className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-70 transition-all duration-300 hover:opacity-100"
    >
      <IoArrowDown className="text-white text-2xl md:text-3xl" />
      <span className="text-white text-xs mt-1">Scroll</span>
    </button>
  );
};

export default Scroller;
