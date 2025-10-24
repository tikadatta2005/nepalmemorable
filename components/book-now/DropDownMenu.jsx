"use client";
import useInfinite from "@/hooks/useInfinite";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const random = [
  {
    _id: 1,
    name: "Annapurna Base Camp",
    price: 50,
  },
  {
    _id: 2,
    name: "Everest Base Camp",
    price: 500,
  },
  {
    _id: 3,
    name: "Chitwan National Park",
    price: 5000,
  },
  {
    _id: 4,
    name: "Langtang Valley tour",
    price: 50000,
  },
];

const DropDownMenu = ({ url, append, remove }) => {
  const { data, ref } = useInfinite(url);
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  return (
    <div className="w-full flex text-sm flex-col gap-4 p-4 bg-white shadow rounded-lg">
      <input
        type="text"
        name="input"
        placeholder="Search here"
        className="w-full text-sm px-2 py-1 border-slate-500 border-2 rounded-lg"
        value={input}
        onChange={(e) => setInput(e?.target?.value)}
      />

      <div className="w-full h-32 overflow-y-scroll flex flex-col custom-scroll">
        <div className="w-full border-t-2 border-slate-300 "></div>
        {[...random, ...data]?.map((elem, index) => {
          if (
            elem?.title?.toLowerCase()?.includes(input?.toLowerCase()) ||
            elem?.name?.toLowerCase()?.includes(input?.toLowerCase())
          ) {
            return (
              <div
                className="w-full flex gap-4 cursor-pointer items-center p-4 text-sm transition-all duration-300 hover:bg-slate-100 border-b-2 border-slate-300"
                onMouseDown={() => {
                  if (list.some((li) => li._id == elem?._id)) {
                    setList((prev) =>
                      prev.filter((li) => li._id !== elem?._id)
                    );
                    remove(elem);
                  } else {
                    setList((prev) => [...prev, elem]);
                    append(elem);
                  }
                }}
                key={index}
              >
                <span
                  className={`${
                    list.some((li) => li._id == elem?._id)
                      ? "text-cyan-500"
                      : "text-slate-200"
                  }`}
                >
                  <FaCheck />
                </span>
                <span className="text-slate-700">
                  {elem?.name || elem?.title}
                </span>
              </div>
            );
          } else return null;
        })}
        <div className="w-full" ref={ref}></div>
      </div>
    </div>
  );
};

export default DropDownMenu;
