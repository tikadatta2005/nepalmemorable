"use client";
import React, { useState } from "react";
import "./FastBook.css";
import Notifier from "../reusables/popup/Notifier";
import { PostData } from "@/utils/GetData";

const FastBookNow = ({ title, location }) => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(true);

  const [message, setMessage] = useState({
    success: null,
    msg: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const body = new FormData();
    body.append("from", data?.email);
    body.append(
      "text",
      `
      Question is Asked from website:
      Title : ${title}
      url : ${location}

      ${data?.message}`
    );
    body.append("subject", `Message from webiste:${title}`);
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
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
          disabled={loading}
          onClick={handleSubmit}
          className="relative w-full mt-2 py-3 px-4 overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600
          text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl
          transform hover:scale-[1.02] hover:-translate-y-0.5
          transition-all duration-500 ease-out
          focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2
          animate-pulse-glow active:scale-[0.98]"
        >
          <span className="relative z-10">
            {loading ? "Sending ..." : "Inquire Now"}
          </span>

          {/* Shimmer Effect */}
          <span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent
            -translate-x-full animate-shimmer"
          ></span>

          {/* Subtle overlay gradient for depth */}
          <span className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></span>
        </button>
      </div>
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

export default FastBookNow;
