"use client"
import React, { useState } from 'react'

const FastBookNow = ({ title, location }) => {
  const [formData, setFormData] = useState({
    email: '',
    fromDate: '',
    toDate: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Booking:', { ...formData, title, location })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="w-full h-fit flex flex-col gap-4 p-6 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl shadow-sm">
      <h4 className="text-lg font-semibold text-slate-800 mb-2">
        Quick Booking
      </h4>
      
      <div className="flex flex-col gap-1.5">
        <label 
          htmlFor="email" 
          className="text-sm font-medium text-slate-700"
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
          className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label 
          htmlFor="fromDate" 
          className="text-sm font-medium text-slate-700"
        >
          Check-in Date
        </label>
        <input
          id="fromDate"
          name="fromDate"
          type="date"
          value={formData.fromDate}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label 
          htmlFor="toDate" 
          className="text-sm font-medium text-slate-700"
        >
          Check-out Date
        </label>
        <input
          id="toDate"
          name="toDate"
          type="date"
          value={formData.toDate}
          onChange={handleChange}
          required
          className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all"
        />
      </div>

      <button
        type="submit"
        onClick={handleSubmit}
        className="w-full mt-2 py-3 px-4 bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
      >
        Book Now
      </button>
    </div>
  )
}

export default FastBookNow