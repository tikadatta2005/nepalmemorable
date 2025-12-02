"use client";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const GoBack = () => {
  const { back } = useRouter();
  const clicks = () => {
    back();
  };
  return (
    <button
      className="w-fit p-2 px-4 flex items-center text-sm text-white bg-cyan-600 rounded-full transition-all dutation-300 hover:bg-teal-700 shadow-sm hover:shadow-lg "
      onClick={clicks}
    >
      <ChevronLeft size={16} />
      <span>Go back</span>
    </button>
  );
};

export default GoBack;
