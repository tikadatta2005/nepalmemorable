"use client";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export const NextCyan = ({ onclick }) => {
  return (
    <button
      className=" cursor-pointer  rounded-full bg-cyan-700 text-white p-2 text-sm"
      onClick={onclick}
    >
      <FaAngleRight />
    </button>
  );
};
export const PrevCyan = ({ onclick }) => {
  return (
    <button
      className=" cursor-pointer rounded-full text-sm bg-cyan-700 text-white p-2"
      onClick={onclick}
    >
      <FaAngleLeft />
    </button>
  );
};
export const NextWhite = ({ onclick }) => {
  return (
    <button
      className=" cursor-pointer  rounded-full bg-white text-cyan-700 p-2 text-sm"
      onClick={onclick}
    >
      <FaAngleRight />
    </button>
  );
};
export const PrevWhite = ({ onclick }) => {
  return (
    <button
      className=" cursor-pointer rounded-full text-sm bg-white text-cyan-700 p-2"
      onClick={onclick}
    >
      <FaAngleLeft />
    </button>
  );
};
