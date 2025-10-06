"use client";

import React, { forwardRef, useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const HiddenComponent = ({ onclick, style, className }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onclick}
    ></div>
  );
};

const SlickCarousel = ({ settings, children, NextButton, PrevButton }) => {
  const [computedSettings, setComputedSettings] = useState(settings);

  const getSlidesFromResponsive = (width) => {
    // Find the first matching breakpoint
    const matched = settings.responsive?.find((bp) => width <= bp.breakpoint);

    if (matched) {
      return matched.settings;
    }
    // fallback to default
    return {
      slidesToShow: settings.slidesToShow,
      slidesToScroll: settings.slidesToScroll,
    };
  };

  useEffect(() => {
    const updateSettings = () => {
      const width = window.innerWidth;
      setComputedSettings({
        ...settings,
        ...getSlidesFromResponsive(width),
      });
    };

    updateSettings(); // run on mount
    window.addEventListener("resize", updateSettings);

    return () => {
      window.removeEventListener("resize", updateSettings);
    };
  }, [settings]);

  let sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.slickPrev();
  };

  return (
    <div className="w-full relative">
      <div className="w-full slider-container">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...{
            ...computedSettings,
            nextArrow: <HiddenComponent />,
            prevArrow: <HiddenComponent />,
          }}
        >
          {children}
        </Slider>
      </div>

      {PrevButton && NextButton && (
        <div className="w-[calc(100%+60px)] absolute top-1/2 transform -translate-1/2 left-1/2 h-fit flex items-center justify-between">
          <PrevButton onclick={handlePrev} />
          <NextButton onclick={handleNext} />
        </div>
      )}
    </div>
  );
};

export default SlickCarousel;
