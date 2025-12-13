"use client";
import { GetData } from "@/utils/GetData";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  FaMailBulk,
  FaPhone,
  FaExternalLinkAlt,
  FaGlobe,
  FaWhatsapp,
} from "react-icons/fa";

// ----------------------
// Currency Converter
// ----------------------
const CurrencyConverter = () => {
  const [rates, setRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("NPR");
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => setRates(data?.rates))
      .catch((err) => console.error("Error fetching rates:", err));
  }, []);

  const convert = () => {
    if (!rates[from] || !rates[to]) return;
    const baseAmount = amount / rates[from];
    const converted = baseAmount * rates[to];
    setResult(converted.toFixed(2));
  };

  useEffect(() => {
    convert();
  }, [amount, from, to, rates]);

  const currencyOptions = Object.keys(rates);

  return (
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-cyan-100"></div>

      <div className="flex items-center gap-2 text-sm text-white bg-cyan-900/60 p-2 rounded-lg">
        <FaGlobe className="text-xl" />
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-cyan-950/70 px-2 py-1 rounded text-cyan-50 w-20"
        />
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="bg-cyan-950/70 px-2 py-1 rounded text-cyan-50"
        >
          {currencyOptions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <span className="text-cyan-300">→</span>
        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="bg-cyan-950/70 px-2 py-1 rounded text-cyan-50"
        >
          {currencyOptions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <span className="ml-2 text-cyan-100 font-semibold">
          {result ? `${result} ${to}` : "..."}
        </span>
      </div>
    </div>
  );
};

// ----------------------
// Currency Rate List
// ----------------------
const CurrencyRateList = () => {
  const [rates, setRates] = useState(null);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/NPR")
      .then((res) => res.json())
      .then((data) => {
        const selected = {
          USD: data?.rates.USD,
          EUR: data?.rates.EUR,
          GBP: data?.rates.GBP,
          AUD: data?.rates.AUD,
          JPY: data?.rates.JPY,
          CNY: data?.rates.CNY,
          INR: data?.rates.INR,
        };
        setRates(selected);
      })
      .catch((err) => console.error("Error fetching rates:", err));
  }, []);

  if (!rates) {
    return <div className="text-sm text-cyan-200">Loading rates...</div>;
  }

  return (
    <ul className="space-y-1 text-sm text-cyan-100">
      {Object.entries(rates).map(([code, value]) => (
        <li key={code}>
          1 {code} = {(1 / value).toFixed(2)} NPR
        </li>
      ))}
    </ul>
  );
};

// ----------------------
// Footer
// ----------------------
const Footer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await GetData("/web-details");
      setData(res?.data);
      console.log(res?.data);
    })();
  }, []);

  const navigation = [
    { link: "/packages", name: "Packages" },
    { link: "/about-us", name: "About Us" },
    { link: "/services", name: "Services" },
    { link: "/testimonials", name: "Testimonials" },
    { link: "/contact-us", name: "Contact Us" },
    { link: "/terms-of-services", name: "Terms of Services" },
  ];

  const services = [
    { link: "/services/tours", name: "Tours" },
    { link: "/services/trekking", name: "Trekking" },
    { link: "/services/adventures", name: "Adventures" },
    { link: "/services/national-park", name: "National Park" },
    { link: "/services/hiking", name: "Hiking" },
    { link: "/services/community-and-stay", name: "Community & Stay" },
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-cyan-900 to-cyan-950">
      {/* Currency Converter */}
      <div className="w-full bg-cyan-800/50 border-y border-cyan-700/50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <CurrencyConverter />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/logoIcon.png"
                alt="Nepal Memorable"
                className="h-12 w-auto"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              NEPAL MEMORABLE TOURS {"(P). LTD"}
            </h3>
            <p className="text-sm text-cyan-50 leading-relaxed mb-4">
              {data?.description}
            </p>
            <div className="flex flex-col gap-2 text-sm text-cyan-100">
              <a
                href={`mailto:${data?.email}`}
                className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
              >
                <FaMailBulk />
                <span>{data?.email}</span>
              </a>
              {data?.phone
                ?.replaceAll(" ", "")
                .split(",")
                ?.map((nums, index) => {
                  return (
                    <a
                      href={`tel:977${nums}`}
                      key={index}
                      className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
                    >
                      <FaPhone />
                      <span>+977 {nums}</span>
                    </a>
                  );
                })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="text-sm text-cyan-100 hover:text-cyan-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.link}
                    className="text-sm text-cyan-100 hover:text-cyan-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Currency Rates */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">
              Currency Rates
            </h4>
            <p className="pb-4 text-sm text-cyan-100">
              The currency rate will be changed as per the market.
            </p>
            <CurrencyRateList />
          </div>
        </div>

        {/* Social Media & Tourism Board */}
        <div className="mt-12 pt-8 border-t border-cyan-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Media */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <span className="text-sm font-medium text-cyan-200">
                Follow Us
              </span>
              <div className="flex items-center gap-4">
                {data?.socialmediaLinks &&
                  data?.socialmediaLinks?.map((social, index) => {
                    const Icon = social?.icon;
                    return (
                      <Link
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-100 hover:text-white text-xl transition-all hover:scale-110"
                      >
                        <Icon />
                      </Link>
                    );
                  })}
              </div>
            </div>

            {/* Nepal Tourism Board Link */}
            <div className="w-fit flex gap-4 flex-wrap">
              <a
                href="https://ntb.gov.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-cyan-800 hover:bg-cyan-700 rounded-lg transition-all hover:scale-105 group"
              >
                <span className="text-sm font-medium text-white">
                  Nepal Tourism Board
                </span>
                <FaExternalLinkAlt className="text-cyan-200 group-hover:text-white text-sm" />
              </a>
              <a
                href="https://ntb.gov.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-cyan-800 hover:bg-cyan-700 rounded-lg transition-all hover:scale-105 group"
              >
                <span className="text-sm font-medium text-white">
                  Nepal Tourism Board
                </span>
                <FaExternalLinkAlt className="text-cyan-200 group-hover:text-white text-sm" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-cyan-800/50 text-center">
          <p className="text-sm text-cyan-200">
            © {new Date().getFullYear()} Nepal Memorable Tours. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
