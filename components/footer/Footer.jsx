"use client"
import React, { useState, useEffect } from 'react';
import { 
  FaFacebook, 
  FaInstagram, 
  FaLinkedin, 
  FaTwitter,
  FaMailBulk,
  FaPhone,
  FaExternalLinkAlt,
  FaGlobe
} from 'react-icons/fa';

const CurrencyDisplay = () => {
  const [rates, setRates] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch currency rates from a free API
    fetch('https://api.exchangerate-api.com/v4/latest/NPR')
      .then(res => res.json())
      .then(data => {
        const currencies = [
          { code: 'USD', flag: '🇺🇸', name: 'US Dollar' },
          { code: 'EUR', flag: '🇪🇺', name: 'Euro' },
          { code: 'GBP', flag: '🇬🇧', name: 'British Pound' },
          { code: 'AUD', flag: '🇦🇺', name: 'Australian Dollar' },
          { code: 'JPY', flag: '🇯🇵', name: 'Japanese Yen' },
          { code: 'CNY', flag: '🇨🇳', name: 'Chinese Yuan' },
          { code: 'INR', flag: '🇮🇳', name: 'Indian Rupee' }
        ];
        
        const ratesData = currencies.map(curr => ({
          ...curr,
          rate: data.rates[curr.code],
          nprAmount: 10000,
          foreignAmount: (10000 * data.rates[curr.code]).toFixed(2)
        }));
        
        setRates(ratesData);
      })
      .catch(err => console.error('Error fetching rates:', err));
  }, []);

  useEffect(() => {
    if (rates && rates.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex(prev => (prev + 1) % rates.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [rates]);

  if (!rates) {
    return (
      <div className="text-cyan-100 text-sm">Loading currency rates...</div>
    );
  }

  const current = rates[currentIndex];

  return (
    <div className="overflow-hidden">
      <div className="flex items-center gap-3 transition-all duration-500 ease-in-out">
        <span className="text-2xl text-white">{current.flag}</span>
        <div className="flex flex-col">
          <span className="text-xs text-cyan-200">{current.name}</span>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-white">NPR 10,000</span>
            <span className="text-cyan-300">=</span>
            <span className="font-semibold text-cyan-100">
              {current.code} {current.foreignAmount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const data = {
    phone: "9845763431",
    email: "nepalmemorable@gmail.com",
    socialmediaLinks: [
      { url: "https://www.facebook.com/", icon: FaFacebook },
      { url: "https://www.instagram.com/", icon: FaInstagram },
      { url: "https://www.linkedin.com/", icon: FaLinkedin },
      { url: "https://www.x.com/", icon: FaTwitter }
    ],
    description: "At Nepal Memorable Travel, we believe that travel is far more than visiting new places — it is an experience, a memory, and a journey that reflects your curiosity and spirit."
  };

  const navigation = [
    { link: "/packages", name: "Packages" },
    { link: "/about-us", name: "About Us" },
    { link: "/services", name: "Services" },
    { link: "/testimonials", name: "Testimonials" },
    { link: "/contact-us", name: "Contact Us" },
    { link: "/terms-of-services", name: "Terms of Services" }
  ];

  const services = [
    { link: "/services/tours", name: "Tours" },
    { link: "/services/trekking", name: "Trekking" },
    { link: "/services/adventures", name: "Adventures" },
    { link: "/services/national-park", name: "National Park" },
    { link: "/services/hiking", name: "Hiking" },
    { link: "/services/community-and-stay", name: "Community & Stay" }
  ];

  return (
    <footer className="w-full bg-gradient-to-b from-cyan-900 to-cyan-950">
      {/* Currency Rate Banner */}
      <div className="w-full bg-cyan-800/50 border-y border-cyan-700/50 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-cyan-100">
              <FaGlobe className="text-xl" />
              <span className="text-sm font-medium">Live Currency Rates</span>
            </div>
            <CurrencyDisplay />
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/assets/logo.png" 
                alt="Nepal Memorable" 
                className="h-12 w-auto"
              />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">NEPAL MEMORABLE</h3>
            <p className="text-sm text-cyan-50 leading-relaxed mb-4">
              {data.description}
            </p>
            <div className="flex flex-col gap-2 text-sm text-cyan-100">
              <a href={`mailto:${data.email}`} className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                <FaMailBulk />
                <span>{data.email}</span>
              </a>
              <a href={`tel:${data.phone}`} className="flex items-center gap-2 hover:text-cyan-300 transition-colors">
                <FaPhone />
                <span>{data.phone}</span>
              </a>
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
        </div>

        {/* Social Media & Tourism Board */}
        <div className="mt-12 pt-8 border-t border-cyan-800/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Media */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <span className="text-sm font-medium text-cyan-200">Follow Us</span>
              <div className="flex items-center gap-4">
                {data.socialmediaLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-100 hover:text-white text-xl transition-all hover:scale-110"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Nepal Tourism Board Link */}
            <a
              href="https://visitnepal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-cyan-800 hover:bg-cyan-700 rounded-lg transition-all hover:scale-105 group"
            >
              <span className="text-sm font-medium text-white">
                Visit Nepal Tourism Board
              </span>
              <FaExternalLinkAlt className="text-cyan-200 group-hover:text-white text-sm" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-cyan-800/50 text-center">
          <p className="text-sm text-cyan-200">
            © {new Date().getFullYear()} Nepal Memorable. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;