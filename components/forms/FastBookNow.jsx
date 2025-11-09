"use client";
import React, { useState } from "react";
import "./FastBook.css";

const FastBookNow = ({ title, location }) => {
  const [formData, setFormData] = useState({
    email: "",message:""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking:", { ...formData, title, location });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full h-fit flex flex-col gap-4 p-6 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl shadow-sm">
      <h4 className="text-lg font-semibold text-slate-800 mb-2">
        Quick Inquiry
      </h4>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm font-medium text-slate-700">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
          className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-sm font-medium text-slate-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          type="text"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          required
          className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg h-20 text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
        className="relative w-full mt-2 py-3 px-4 overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600
          text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl
          transform hover:scale-[1.02] hover:-translate-y-0.5
          transition-all duration-500 ease-out
          focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2
          animate-pulse-glow active:scale-[0.98]"
      >
        <span className="relative z-10">Inquire Now</span>

        {/* Shimmer Effect */}
        <span
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
            -translate-x-full animate-shimmer"
        ></span>

        {/* Subtle overlay gradient for depth */}
        <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></span>
      </button>
    </div>
  );
};

export default FastBookNow;
