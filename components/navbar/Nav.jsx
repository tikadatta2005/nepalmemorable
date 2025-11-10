"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [showActivities, setShowActivities] = useState(false);
  const [showAbouts, setShowAbouts] = useState(false);

  useEffect(() => {
    setIsScrolled(window.scrollY > 0);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        open &&
        !event.target.closest(".mobile-menu") &&
        !event.target.closest(".menu-button")
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const navigations = [
    { link: "/packages", name: "Packages" },
    { link: "/testimonials", name: "Testimonials" },
    { link: "/contact-us", name: "Contact Us" },
  ];

  const activities = [
    { link: "/services/tours", name: "Tours" },
    { link: "/services/trekking", name: "Trekking" },
    { link: "/services/adventures", name: "Adventures" },
    { link: "/services/national-park", name: "National Park" },
    { link: "/services/hiking", name: "Hiking" },
    { link: "/services/community-and-stay", name: "Home Stay" },
  ];
  const abouts = [
    { link: "/about-us", name: "Nepal Memorable Tours" },
    { link: "/nepalese-culture", name: "Nepalese Culture & Festivals" },
  ];

  const handleMobileLinkClick = () => {
    setOpen(false);
    setShowActivities(false);
  };

  return (
    <>
      <header
        className={`w-full p-2 px-4 text-base fixed top-0 z-50 left-0 right-0 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-sm text-slate-700 shadow-lg"
            : "bg-gradient-to-b from-cyan-950/80 to-transparent text-white"
        }`}
      >
        <div className="w-full max-w-5xl mx-auto flex justify-between items-center">
          {/* logo */}
          <Link href="/" className="w-fit flex items-center text-xl gap-2">
            <span
              className={`font-bold ${
                isScrolled ? "text-cyan-700" : "text-cyan-500"
              }`}
            >
              NEPAL
            </span>
            <span
              className={`${
                isScrolled ? "text-slate-700" : "text-cyan-200"
              } font-medium`}
            >
              MEMORABLE
            </span>
            <span
              className={`${
                isScrolled ? "text-slate-700" : "text-white"
              } font-medium`}
            >
              TOURS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="w-fit hidden lg:flex gap-2 items-center">
            <div className="relative group">
              <button
                className={`w-fit px-2 transition-all duration-300 ${
                  isScrolled ? "hover:text-cyan-600" : "hover:text-cyan-200"
                } hover:scale-105 flex gap-2 items-center`}
              >
                About Us
                <FaAngleDown className="text-sm" />
              </button>

              <div className="hidden absolute w-fit h-fit z-50 group-hover:block p-4 top-5 left-1/2 transform -translate-x-1/2">
                <div className="w-64 shadow-lg flex flex-col rounded-xl overflow-hidden">
                  {abouts?.map((elem, index) => (
                    <Link
                      key={index}
                      href={elem?.link}
                      className={`w-full p-4 font-medium text-slate-700 transition-all duration-300 hover:text-cyan-700 ${
                        index % 2 === 0 ? "bg-white/90" : "bg-blue-100/90"
                      } backdrop-blur-sm`}
                    >
                      {elem?.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link
                href="/services"
                className={`w-fit px-2 transition-all duration-300 ${
                  isScrolled ? "hover:text-cyan-600" : "hover:text-cyan-200"
                } hover:scale-105 flex gap-2 items-center`}
              >
                Services
                <FaAngleDown className="text-sm" />
              </Link>

              <div className="hidden absolute w-fit h-fit z-50 group-hover:block p-4 top-5 left-1/2 transform -translate-x-1/2">
                <div className="w-64 shadow-lg flex flex-col rounded-xl overflow-hidden">
                  {activities?.map((elem, index) => (
                    <Link
                      key={index}
                      href={elem?.link}
                      className={`w-full p-4 font-medium text-slate-700 transition-all duration-300 hover:text-cyan-700 ${
                        index % 2 === 0 ? "bg-white/90" : "bg-blue-100/90"
                      } backdrop-blur-sm`}
                    >
                      {elem?.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {navigations?.map((elem, index) => (
              <Link
                href={elem?.link}
                key={index}
                className={`w-fit px-2 transition-all duration-300  ${
                  isScrolled ? "hover:text-cyan-600" : "hover:text-cyan-200"
                }  hover:scale-105`}
              >
                {elem?.name}
              </Link>
            ))}
            <Link href="/book-now" className="ml-8">
              <button className="p-2 px-4 bg-cyan-800 text-white rounded-md transition-all duration-300 hover:scale-105 hover:text-cyan-100 cursor-pointer shadow">
                Book Now
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(true)}
            className="menu-button w-fit block lg:hidden text-2xl cursor-pointer transition-all duration-300 hover:scale-105 hover:text-cyan-100"
          >
            <MdMenu />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`mobile-menu fixed w-80 max-w-[85vw] flex flex-col z-50 shadow-2xl lg:hidden bottom-0 top-0 transition-all duration-300 backdrop-blur-lg bg-white/95 ${
          open ? "right-0" : "-right-80"
        }`}
      >
        {/* Menu Header */}
        <div className="w-full justify-between items-center p-4 border-b-2 border-cyan-700 flex bg-white/80">
          <b className="text-lg font-semibold text-cyan-700">Menu</b>
          <button
            onClick={() => setOpen(false)}
            className="w-fit text-2xl cursor-pointer transition-all duration-300 hover:scale-105 text-slate-700 hover:text-red-500"
          >
            <MdClose />
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex-1 overflow-y-auto">
          <div className="border-b border-gray-200">
            <button
              onClick={() => setShowAbouts(!showAbouts)}
              className="w-full p-4 text-left font-medium text-slate-700 hover:text-cyan-700 hover:bg-gray-50 transition-all duration-300 flex items-center justify-between"
            >
              About Us
              {showAbouts ? (
                <FaAngleUp className="text-sm" />
              ) : (
                <FaAngleDown className="text-sm" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                showAbouts ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {abouts?.map((elem, index) => (
                <Link
                  key={index}
                  href={elem?.link}
                  onClick={handleMobileLinkClick}
                  className="block w-full pl-8 pr-4 py-3 text-slate-600 hover:text-cyan-700 hover:bg-cyan-50 transition-all duration-300 border-l-2 border-transparent hover:border-cyan-300"
                >
                  {elem?.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Activities Dropdown */}
          <div className="border-b border-gray-200">
            <button
              onClick={() => setShowActivities(!showActivities)}
              className="w-full p-4 text-left font-medium text-slate-700 hover:text-cyan-700 hover:bg-gray-50 transition-all duration-300 flex items-center justify-between"
            >
              Services
              {showActivities ? (
                <FaAngleUp className="text-sm" />
              ) : (
                <FaAngleDown className="text-sm" />
              )}
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                showActivities ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {activities?.map((elem, index) => (
                <Link
                  key={index}
                  href={elem?.link}
                  onClick={handleMobileLinkClick}
                  className="block w-full pl-8 pr-4 py-3 text-slate-600 hover:text-cyan-700 hover:bg-cyan-50 transition-all duration-300 border-l-2 border-transparent hover:border-cyan-300"
                >
                  {elem?.name}
                </Link>
              ))}
              <Link
                href={"/services"}
                onClick={handleMobileLinkClick}
                className="block w-full pl-8 pr-4 py-3 text-slate-600 hover:text-cyan-700 hover:bg-cyan-50 transition-all duration-300 border-l-2 border-transparent hover:border-cyan-300"
              >
                All Services
              </Link>
            </div>
          </div>

          {/* Regular Navigation Items */}
          {navigations?.map((elem, index) => (
            <Link
              key={index}
              href={elem?.link}
              onClick={handleMobileLinkClick}
              className="block w-full p-4 font-medium text-slate-700 hover:text-cyan-700 hover:bg-gray-50 transition-all duration-300 border-b border-gray-200"
            >
              {elem?.name}
            </Link>
          ))}

          {/* Contact Us Button */}
          <div className="p-4 border-b border-gray-200">
            <Link href="/book-now" onClick={handleMobileLinkClick}>
              <button className="w-full p-3 bg-cyan-800 text-white rounded-md transition-all duration-300 hover:bg-cyan-700 shadow font-medium">
                Book Now
              </button>
            </Link>
          </div>
        </div>

        {/* Menu Footer */}
        <div className="p-4 border-t border-gray-200 bg-white/80">
          <Link
            href="/"
            onClick={handleMobileLinkClick}
            className="flex items-center justify-center text-lg gap-2"
          >
            <span className="font-bold text-cyan-700">NEPAL</span>
            <span className="text-slate-700 font-medium">MEMORABLE</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
