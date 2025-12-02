"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";
import Image from "next/image";
import { GetData } from "@/utils/GetData";
import { ChevronRight } from "lucide-react";

const SubLinkCoponents = ({ baseLink, sublinks }) => {
  if (baseLink.includes("trek")) {
    console.log(sublinks);
  }
  return (
    <div className="w-full max-w-64 p-0 top-4.5 h-fit min-h-full absolute hidden group-hover/act:block -right-64">
      <div className="w-full bg-white h-fit flex flex-col gap-0 shadow-lg">
        {Array.isArray(sublinks) &&
          sublinks?.map((elem, index) => {
            const slugBase = elem?.folder_id
              ? elem.folder_id
              : elem?.title || elem?.name
              ? (elem.title || elem.name)
                  .toString()
                  .trim()
                  .replace(/[^\w\s-]/g, "") // remove special chars
                  .replace(/\s+/g, "-") // replace spaces with -
                  .toLowerCase()
              : "";

            const slug = slugBase ? `${slugBase}-${elem?._id}` : `${elem?._id}`;

            return (
              <Link href={`${baseLink}/${slug}`} key={index} className="w-full">
                <button
                  className={`w-full p-2 text-sm px-4 text-left text-slate-800 ${
                    index % 2 === 0 ? "bg-slate-100" : "bg-white"
                  } transition-all duration-300 hover:text-cyan-700 overflow-hidden  truncate whitespace-nowrap`}
                >
                  {elem?.title || elem?.name}
                </button>
              </Link>
            );
          })}
        <Link href={`${baseLink}`} className="w-full">
          <button
            className={`w-full p-2 text-sm px-4 text-left text-slate-800 ${
              sublinks?.length % 2 === 0 ? "bg-slate-100" : "bg-white"
            } transition-all duration-300 hover:text-cyan-700 overflow-hidden  truncate whitespace-nowrap`}
          >
            See all items ...
          </button>
        </Link>
      </div>
    </div>
  );
};

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [showActivities, setShowActivities] = useState(false);
  const [showAbouts, setShowAbouts] = useState(false);

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

  const [subLinks, setSublinks] = useState([
    {
      tours: [],
      trekking: [],
      adventures: [],
      hiking: [],
      home_stay: [],
    },
  ]);
  useEffect(() => {
    const types = {
      tours: "tours",
      trekking: "trekking-regions",
      np: "national-park",
      adventures: "adventures",
      hiking: "hiking",
      home_stay: "home-stay",
    };

    const FetchSubs = async (key) => {
      const res = await GetData(
        `/get-contents?type=${types?.[key]}&page=0&len=10&sort=1`
      );
      if (res?.error || !Array.isArray(res?.data)) return;
      else return setSublinks((prev) => ({ ...prev, [key]: res?.data }));
    };

    for (const key in types) {
      FetchSubs(key);
    }
  }, []);

  const activities = [
    { link: "/services/tours", name: "Tours", sublinks: subLinks?.tours },
    {
      link: "/services/trekking",
      name: "Trekking",
      sublinks: subLinks?.trekking,
    },
    {
      link: "/services/adventures",
      name: "Adventures",
      sublinks: subLinks?.adventures,
    },
    {
      link: "/services/national-park",
      name: "National Park",
      sublinks: subLinks?.np,
    },
    { link: "/services/hiking", name: "Hiking", sublinks: subLinks?.hiking },
    {
      link: "/services/community-and-stay",
      name: "Home Stay",
      sublinks: subLinks?.home_stay,
    },
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
        className={`w-full p-2 px-4 text-base fixed top-0 z-50 left-0 right-0 ${"bg-white/100 backdrop-blur-sm text-slate-700 shadow-lg"}`}
      >
        <div className="w-full max-w-5xl mx-auto flex text-sm justify-between items-center">
          {/* logo */}
          <Link
            href="/"
            className="w-fit flex items-center text-base md:text-lg gap-2"
          >
            <Image
              src="/assets/logoIcon.png"
              width={40}
              height={40}
              className={`w-fit h-8 md:h-10`}
              alt={"Nepal Memorable"}
            />
            <span className={`font-bold ${"text-cyan-500"}`}>NEPAL</span>
            <span className={`${"text-slate-700"} font-medium`}>MEMORABLE</span>
            <span className={`${"text-slate-700"} font-medium`}>TOURS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="w-fit hidden lg:flex gap-2 items-center">
            <div className="relative group">
              <button
                className={`w-fit px-2 transition-all duration-300 ${"hover:text-cyan-600"} hover:scale-105 flex gap-2 items-center`}
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
                className={`w-fit px-2 transition-all duration-300 ${"hover:text-cyan-600"} hover:scale-105 flex gap-2 items-center`}
              >
                Services
                <FaAngleDown className="text-sm" />
              </Link>

              <div className="hidden absolute w-fit h-fit z-50 group-hover:block p-4 px-0 top-5 left-1/2 transform -translate-x-1/2">
                <div className="w-64 shadow-lg flex flex-col rounded-xl">
                  {activities?.map((elem, index) => (
                    <div key={index} className="w-full h-fit group/act">
                      <Link
                        key={index}
                        href={elem?.link}
                        className={`w-full p-4 font-medium text-slate-700 transition-all duration-300 hover:text-cyan-700 ${
                          index % 2 === 0 ? "bg-white/90" : "bg-blue-100/90"
                        } backdrop-blur-sm flex items-center justify-between`}
                      >
                        {elem?.name}
                        <ChevronRight size={16} />
                      </Link>
                      <SubLinkCoponents
                        baseLink={elem?.link}
                        sublinks={elem?.sublinks || []}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {navigations?.map((elem, index) => (
              <Link
                href={elem?.link}
                key={index}
                className={`w-fit px-2 transition-all duration-300  ${"hover:text-cyan-600"}  hover:scale-105`}
              >
                {elem?.name}
              </Link>
            ))}
            <Link href="/book-now" className="ml-8">
              <button className="p-2 px-4 bg-amber-500 text-white rounded-md transition-all duration-300 hover:scale-105 hover:text-amber-100 cursor-pointer shadow">
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
