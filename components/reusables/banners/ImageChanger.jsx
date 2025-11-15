"use client";
import React, { useState, useEffect } from "react";
import CsrImage from "../assets/CsrImage";

const ImageChanger = ({ className = "", sources = [], alt }) => {
  if (!sources || sources.length === 0) return null;

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        // console.log("NEXT:", (prev + 1) % sources.length);
        return (prev + 1) % sources.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [sources.length]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {sources.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000`}
          style={{
            opacity: current === i ? 1 : 0,
            pointerEvents: "none",
          }}
        >
          <CsrImage
            src={src}
            alt={alt}
            fill
            className="object-cover"
            priority={i === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageChanger;
