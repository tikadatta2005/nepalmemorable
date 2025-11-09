"use client";

import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";

const List1 = ({ data }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (typeof window === "undefined") return null;

    if (!data) return;

    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    const items = doc.querySelectorAll("ol > li");

    const parsedList = Array.from(items).map((li) => {
      // Extract title
      const strong = li.querySelector("strong");
      const title = strong ? strong.textContent.trim() : null;

      // Remove <strong> from DOM to isolate description
      if (strong) strong.remove();

      // Keep innerHTML so we preserve paragraphs, breaks, spans, etc.
      const description = li.innerHTML.trim();

      return { title, description };
    });

    setList(parsedList);
  }, [data]);

  console.log(list);

  const [expandedDay, setExpandedDay] = useState(0);

  const toggleDay = (index) => {
    setExpandedDay(expandedDay === index ? -1 : index);
  };

  return (
    <div className="w-full">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200" />

        <div className="space-y-3">
          {list.map((item, index) => (
            <div key={index} className="relative">
              {/* Day marker */}
              <div className="absolute left-6 top-5 w-3 h-3 -ml-1.5 rounded-full bg-white border-2 border-cyan-700 z-10" />

              {/* Card */}
              <div className="ml-14">
                <button
                  onClick={() => toggleDay(index)}
                  className="w-full text-left bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-200"
                >
                  <div className="px-5 py-4 flex items-center justify-between">
                    <h3 className="font-semibold text-base text-cyan-700">
                      {item.title}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 flex-shrink-0 ${
                        expandedDay === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Expandable content */}
                  <div
                    className={`grid transition-all duration-200 ease-in-out ${
                      expandedDay === index
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-4 pt-2 border-t border-gray-100">
                        <div
                          className="prose prose-sm prose-gray max-w-none text-gray-600"
                          dangerouslySetInnerHTML={{ __html: item.description }}
                        />
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List1;
