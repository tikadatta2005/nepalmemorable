import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedin, FaMailBulk } from "react-icons/fa";
import {
  FaXTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLink,
  FaPhone,
} from "react-icons/fa6";

const SocialIcon = (link) => {
  if (link.includes("facebook.com")) {
    return FaFacebook;
  } else if (link.includes("instagram.com")) {
    return FaInstagram;
  } else if (link.includes("youtube.com")) {
    return FaYoutube;
  } else if (link.includes("x.com")) {
    return FaXTwitter;
  } else if (link.includes("linkedin.com")) {
    return FaLinkedin;
  } else {
    return FaLink;
  }
};

const Footer = async () => {
  const data = {
    logo: "",
    title: "Tailor-made treks and tours in Nepal",
    cover: "",
    phone: "9845763431",
    email: "nepalmemorable@gmail.com",
    socialmediaLinks: [
      "https://www.facebook.com/",
      "https://www.instagram.com/",
      "https://www.linkedin.com/",
      "https://www.x.com/",
    ],
    name: "NEPAL MEMORABLE",
    description:
      "At NAVOCLOUDS Travel, we believe that travel is far more than visiting new places — it is an experience, a memory, and a journey that reflects your curiosity and spirit. Every tour we organize is designed to celebrate life’s most unforgettable moments, from serene escapes to thrilling adventures. Our journey began with a vision to create travel experiences that seamlessly blend comfort, excitement, and authentic local culture, ensuring each trip is not just taken, but cherished.",
  };
  const navigation = [
    { link: "/packages", name: "Packages" },
    { link: "/about-us", name: "About Us" },
    { link: "/services", name: "Services" },
    { link: "/services/tours", name: "Tours" },
    { link: "/services/trekking", name: "Trekking" },
    { link: "/services/adventures", name: "Adventures" },
    { link: "/services/national-park", name: "National Park" },
    { link: "/services/hiking", name: "Hiking" },
    { link: "/services/community-and-stay", name: "Community And Stay" },
    { link: "/testimonials", name: "Testimonials" },
    { link: "/contact-us", name: "Contact Us" },
    { link: "/terms-of-services", name: "Terms of services" },
  ];

  return (
    <footer className="w-full py-16 bg-cyan-900">
      <div className="w-full p-4 mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 max-w-7xl">
        <div className="w-full flex flex-col gap-2 col-span-1 md:col-span-2">
          {data?.logo ? (
            <Image
              src={`${
                data?.logo?.includes("https://")
                  ? ""
                  : process.env.NEXT_PUBLIC_SERVER
              }${data?.logo}`}
              alt="logo of nepal memorable"
              width={200}
              height={200}
              className="w-fit h-12"
            />
          ) : (
            <Image
              src={`/assets/logo.png`}
              alt="logo of nepal memorable"
              width={200}
              height={200}
              className="w-fit h-12"
            />
          )}
          <b className="text-base md:text-lg text-white">NEPAL MEMORABLE</b>
          <p className="text-slate-100 text-sm">
            &copy; {new Date().getFullYear()}. All rights reserved!
            <br />
            <br />
            {data?.description}
          </p>
        </div>

        <div className="w-fit mx-auto flex text-sm flex-col gap-2 text-slate-100">
          <b className="text-lg">Quick Links</b>
          <div className="w-full flex flex-col gap-2 p-2">
            {navigation?.map((links, index) => (
              <Link
                className="transition-all duration-300 hover:text-cyan-400"
                href={links?.link}
                key={index}
              >
                {links?.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-fit mx-auto flex flex-col gap-8 text-slate-100">
          <div className="w-fit flex flex-col gap-2">
            <b className="text-lg">CONTACT INFO</b>
            <div className="p-2 text-sm flex flex-col gap-2">
              <p className="flex gap-2 items-center">
                <FaMailBulk /> {data?.email}
              </p>
              <p className="flex gap-2 items-center">
                <FaPhone /> {data?.phone}
              </p>
            </div>
          </div>{" "}
          <div className="w-fit flex flex-col gap-2">
            <b className="text-lg">SOCIAL MEDIA</b>
            <div className="p-2 text-sm flex items-center gap-4">
              {data?.socialmediaLinks &&
                data?.socialmediaLinks?.map((elem, index) => {
                  const Icon = SocialIcon(elem);
                  return (
                    <Link
                      href={elem}
                      key={index}
                      className="transition-all duration-300 text-xl hover:text-cyan-200 hover:scale-102 "
                    >
                      <Icon />
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
