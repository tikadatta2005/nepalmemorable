"use client";
import React, { useEffect, useRef, useState } from "react";

// Professional Carousel Component
const Carousel = ({ children, itemCount, itemWidth = 320, bar = true, dots=true }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);

  // Convert children to array for easier manipulation
  const childrenArray = React.Children.toArray(children);

  // Create infinite loop by duplicating items
  const infiniteItems = [
    ...childrenArray.slice(-1), // Last item at beginning
    ...childrenArray, // Original items
    ...childrenArray.slice(0, 1), // First item at end
  ];

  const nextbutton = useRef(null);

  // Auto-advance carousel
  useEffect(() => {
    if (!isHovered && !isTransitioning && nextbutton?.current) {
      intervalRef.current = setInterval(() => {
        nextbutton.current.click();
      }, 4000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isHovered, isTransitioning]);

  // Handle transitions and infinite loop
  useEffect(() => {
    if (carouselRef.current) {
      const translateX = -(currentIndex + 1) * (itemWidth + 16);
      carouselRef.current.style.transform = `translateX(${translateX}px)`;
    }
  }, [currentIndex, itemWidth]);

  const goToNext = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      if (prev === itemCount - 1) {
        // At last real item, go to first duplicate
        setTimeout(() => {
          carouselRef.current.style.transition = "none";
          setCurrentIndex(0);
          setTimeout(() => {
            carouselRef.current.style.transition =
              "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
            setIsTransitioning(false);
          }, 50);
        }, 500);
        return prev + 1;
      }
      setTimeout(() => setIsTransitioning(false), 500);
      return prev + 1;
    });
  };

  const goToPrevious = () => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      if (prev === 0) {
        // At first real item, go to last duplicate
        setTimeout(() => {
          carouselRef.current.style.transition = "none";
          setCurrentIndex(itemCount - 1);
          setTimeout(() => {
            carouselRef.current.style.transition =
              "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
            setIsTransitioning(false);
          }, 50);
        }, 500);
        return -1;
      }
      setTimeout(() => setIsTransitioning(false), 500);
      return prev - 1;
    });
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentIndex) return;

    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="relative w-full group">
      {/* Carousel Container */}
      <div
        className="overflow-hidden w-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={carouselRef}
          className="flex gap-4 transition-transform duration-500 ease-out"
          style={{
            width: `${infiniteItems.length * (itemWidth + 16)}px`,
            transform: `translateX(-${
              (currentIndex + 1) * (itemWidth + 16)
            }px)`,
          }}
        >
          {infiniteItems.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: itemWidth }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Only show on hover */}
      <button
        onMouseDown={goToPrevious}
        
        disabled={isTransitioning}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-teal-600/90 hover:bg-teal-600 shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 z-10 lg:opacity-0 lg:group-hover:opacity-100"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        ref={nextbutton}
        onClick={goToNext}
        onMouseDown={goToNext}
        disabled={isTransitioning}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-teal-600/90 hover:bg-teal-600 shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 z-10 lg:opacity-0 lg:group-hover:opacity-100"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dot Indicators */}
      {dots && <div className="flex justify-center space-x-2 mt-6">
        {Array.from({ length: itemCount }).map((_, index) => (
          <button
            key={index}
            onMouseDown={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`h-2 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
              index === currentIndex
                ? "bg-teal-600 w-8 shadow-sm"
                : "bg-gray-300 hover:bg-gray-400 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>}

      {/* Progress Bar */}
      {bar && (
        <div className="w-full bg-gray-200 rounded-full h-1 mt-4 overflow-hidden">
          <div
            className="bg-teal-600 h-1 rounded-full transition-all duration-100 ease-linear"
            style={{
              width: `${((currentIndex + 1) / itemCount) * 100}%`,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Carousel;