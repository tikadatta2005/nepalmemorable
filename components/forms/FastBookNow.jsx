"use client";
import React, { useState } from "react";
import "./FastBook.css";
import Notifier from "../reusables/popup/Notifier";
import { PostData } from "@/utils/GetData";
import CsrImage from "../reusables/assets/CsrImage";

const FastBookNow = ({ title, location }) => {
  const [formData, setFormData] = useState({
    email: "",
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
    const body = new FormData();
    body.append("from", formData?.email);
    body.append(
      "text",
      `
      Question is Asked from website:
      Title : ${title}
      url : ${location}

      ${formData?.message}`
    );
    body.append("subject", `Message from webiste:${title}`);
    console.log(NEXT_PUBLIC_MAIL_SERVER);
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
      <form
        onSubmit={handleSubmit}
        className="w-full gap-4 border relative border-slate-200 rounded-xl overflow-hidden shadow-sm"
      >
        <CsrImage src="/assets/bookings/mini_bg.webp" alt="Book from best Tours and Travels in Nepal" width={200} height={200} className="absolute w-full h-full inset-0 object-cover"/>

        <div className="h-fit flex relative z-10 flex-col gap-4 p-6 bg-cyan-800/50">
          <h4 className="text-lg font-semibold text-white mb-2">
            Quick Inquiry
          </h4>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-100"
            >
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
              className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="text-sm font-medium text-slate-100"
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
              className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg h-20 text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
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

export default FastBookNow;
