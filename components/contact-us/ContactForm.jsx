"use client"
import React, { useState } from 'react'
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", data);
  }

  return (
    <form onSubmit={handleSubmit} className='w-full p-6 bg-white/50 backdrop-blur-sm shadow-md shadow-cyan-800/20 rounded-xl space-y-4'>
      
      <h1 className='text-3xl font-semibold text-cyan-700 text-center mb-2'>
        Contact Now
      </h1>

      {/* Name */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-cyan-700 mb-1">Full Name</label>
        <input 
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          className='border-2 border-slate-700 px-3 py-2 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600'
          placeholder="Enter your full name"
          required
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-cyan-700 mb-1">Email Address</label>
        <input 
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          className='border-2 border-slate-700 px-3 py-2 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600'
          placeholder="example@gmail.com"
          required
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-cyan-700 mb-1">Phone Number</label>
        <input 
          type="text"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          className='border-2 border-slate-700 px-3 py-2 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600'
          placeholder="9800000000"
        />
      </div>

      {/* Subject */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-cyan-700 mb-1">Subject</label>
        <input 
          type="text"
          name="subject"
          value={data.subject}
          onChange={handleChange}
          className='border-2 border-slate-700 px-3 py-2 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600'
          placeholder="How can we help?"
          required
        />
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-cyan-700 mb-1">Message</label>
        <textarea 
          name="message"
          value={data.message}
          onChange={handleChange}
          rows="4"
          className='border-2 border-slate-700 px-3 py-2 rounded-lg focus:outline-none focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600'
          placeholder="Write your message..."
          required
        ></textarea>
      </div>

      {/* Submit */}
      <button 
        type="submit"
        className='w-full bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white py-2 rounded-lg flex items-center justify-center gap-2 font-medium transition-all'
      >
        <FaPaperPlane size={18} />
        Send Message
      </button>

    </form>
  )
}

export default ContactForm
