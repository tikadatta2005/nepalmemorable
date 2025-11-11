"use client";

import { PostData } from "@/utils/GetData";
import { ChevronDown } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FaPaperPlane, FaSpinner } from "react-icons/fa";
import Select, { components } from "react-select";
import Notifier from "../reusables/popup/Notifier";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    country: { country: "", dial: "", flag: "" },
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState({
    success: null,
    msg: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const text = `
  ${data?.message}

  Name: ${data?.name},
  Country: ${data?.country?.country}
  Phone: ${data?.country?.dial} ${data?.phone}
  Email: ${data?.email}
    `;

    const body = new FormData();
    body.append("subject", data?.subject);
    body.append("text", text);
    body.append("from", data?.email);

    const res = await PostData(
      `${process.env.NEXT_PUBLIC_MAIL_SERVER}/api/v1/client/send-mail`,
      { body }
    );
    if (res?.error) {
      setMessage({
        success: false,
        msg: res?.error || "Could not send mail!",
      });
    } else {
      setMessage({
        success: true,
        msg: "Message Sent successfully! We will reply to you shortly!",
      });
    }
    setLoading(false);
  };

  const [country, setCountry] = useState(null);
  const [countryOptions, setCountryOptions] = useState([]);

  // Fetch countries with flags + dial codes
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,flags,idd"
        );
        if (!res.ok)
          throw new Error(`Failed to fetch countries: ${res.status}`);
        const countries = await res.json();

        const options = countries
          .filter((c) => c.name?.common && c.idd?.root)
          .map((c) => ({
            value: c.name.common,
            label: c.name.common,
            name: c.name.common,
            flag: c.flags?.svg || c.flags?.png,
            dial: c.idd.root + (c.idd.suffixes ? c.idd.suffixes[0] : ""),
          }))
          .sort((a, b) => a.name.localeCompare(b.name));

        setCountryOptions(options);
      } catch (err) {
        console.error("Error fetching countries:", err);
      }
    };

    fetchCountries();
  }, []);

  // Generic input change handler
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Country select handler
  const handleCountrySelect = (selected) => {
    setCountry(selected);
    setData({
      ...data,
      country: {
        country: selected.name,
        dial: selected.dial,
        flag: selected.flag,
      },
    });
  };

  // Form submission

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl p-6 bg-white/50 backdrop-blur-sm shadow-md shadow-cyan-800/20 rounded-xl space-y-4 mx-auto"
      >
        <h1 className="text-3xl font-semibold text-cyan-700 text-center mb-4">
          Contact Now
        </h1>

        {/* Name */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-cyan-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className="border-2 border-slate-700 px-3 py-2 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-cyan-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className="border-2 border-slate-700 px-3 py-2 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
            placeholder="example@gmail.com"
            required
          />
        </div>

        {/* Country + Phone */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-cyan-700 mb-1">
            Phone Number
          </label>
          <div className="flex gap-2">
            {/* Country Selector */}
            <div className="min-w-30">
              <Select
                options={countryOptions}
                value={country}
                onChange={handleCountrySelect}
                placeholder="Country"
                isSearchable
                menuPortalTarget={
                  typeof document !== "undefined" ? document.body : null
                }
                components={{
                  DropdownIndicator: (props) => (
                    <components.DropdownIndicator {...props}>
                      <ChevronDown className="text-cyan-700" />{" "}
                      {/* change color here */}
                    </components.DropdownIndicator>
                  ),
                }}
                styles={{
                  control: (base) => ({
                    ...base,
                    border: "2px solid rgb(51,65,85)",
                    borderRadius: "8px",
                    boxShadow: "none",
                    minHeight: "43px",
                    backgroundColor: "transparent",
                    color: "rgb(51,65,85)",
                    "&:hover": { borderColor: "rgb(8,145,178)" },
                  }),
                  menuPortal: (base) => ({
                    ...base,
                    zIndex: 9999,
                  }),
                  menu: (base) => ({
                    ...base,
                    minHeight: "200px",
                    maxHeight: "300px",
                    overflowY: "auto",
                  }),
                  option: (base) => ({
                    ...base,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }),
                  singleValue: (base) => ({
                    ...base,
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }),
                }}
                formatOptionLabel={(option, { context }) => {
                  if (context === "menu") {
                    return (
                      <div className="flex items-center gap-2">
                        <img
                          src={option.flag}
                          alt={option.name}
                          className="w-5 h-4 rounded-sm"
                        />
                        <span className="text-gray-500 text-xs">
                          {option.dial}
                        </span>
                      </div>
                    );
                  }
                  return (
                    <div className="flex items-center gap-2">
                      <img
                        src={option.flag}
                        alt={option.name}
                        className="w-5 h-4 rounded-sm"
                      />
                      <span>{option.dial}</span>
                    </div>
                  );
                }}
              />
            </div>

            {/* Phone input */}
            <input
              type="tel"
              name="phone"
              value={data.phone}
              onChange={handleChange}
              className="w-full border-2 border-slate-700 px-3 py-2 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
              placeholder="9800000000"
            />
          </div>
        </div>

        {/* Subject */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-cyan-700 mb-1">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={data.subject}
            onChange={handleChange}
            className="border-2 border-slate-700 px-3 py-2 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
            placeholder="How can we help?"
            required
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-cyan-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={data.message}
            onChange={handleChange}
            rows="4"
            className="border-2 border-slate-700 px-3 py-2 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
            placeholder="Write your message..."
            required
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white py-2 rounded-lg flex items-center justify-center gap-2 font-medium transition-all"
        >
          {loading ? (
            <FaSpinner
              className="transition-all duration-300 text-white animate-spin"
              size={18}
            />
          ) : (
            <FaPaperPlane size={18} />
          )}
          {loading ? "Sending Message" : "Send Message"}
        </button>
      </form>

      {message?.msg && (
        <Notifier
          {...message}
          onClose={() => {
            setMessage({ success: null, msg: "" });
          }}
        />
      )}
    </>
  );
};

export default ContactForm;
