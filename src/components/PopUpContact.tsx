"use client";
import React, { useState, useEffect } from "react";

const PopUpContact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0  flex items-center justify-center z-50 p-4">
      <div className="bg-[#F5F5DC] rounded-lg shadow-2xl max-w-md w-full relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-3 text-white hover:text-gray-200 text-xl font-bold w-8 h-8 flex items-center justify-center z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* FREE CONSULTATION Banner */}
        <div className="bg-[#8B4513] text-white text-center py-2 px-4 rounded-t-lg">
          <span className="font-bold text-sm uppercase tracking-wide">
            Talk to Us
          </span>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Headline */}
          <h2 className="text-xl font-bold text-gray-800 mb-3 text-center">
            Get your dream trip planned by experts
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm text-center mb-6">
            Receive a personalized travel with our travel advisors.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
              required
            />

            {/* Phone Number */}
            <div className="flex">
              <div className="flex items-center bg-gray-100 px-3 py-3 border border-gray-300 border-r-0 rounded-l-lg">
                <span className="text-sm font-medium text-gray-700">+91</span>
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-[#8B4513] focus:border-transparent"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#8B4513] text-white py-3 px-6 rounded-lg font-bold text-md uppercase tracking-wide hover:bg-[#654321] transition-colors duration-300"
            >
              Submit
            </button>
          </form>

          {/* Disclaimer */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-2">
              <span className="text-[#8B4513]">◆</span> Premium Travel
              Experiences Guaranteed!
            </p>
            <a
              href="/privacy"
              className="text-sm text-[#8B4513] underline hover:text-[#654321]"
            >
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUpContact;
