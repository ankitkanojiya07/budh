"use client";

import { useState, useRef, useEffect } from "react";
import { allTourNames } from "@/content-data/tour-names";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

interface EnquiryFormData {
  tourName: string;
  name: string;
  mobile: string;
  email: string;
  departureDate: string;
  arrivalDate: string;
  adults: number;
  children: number;
  enquiry: string;
}

export default function EnquiryPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<EnquiryFormData>({
    tourName: "",
    name: "",
    mobile: "",
    email: "",
    departureDate: "",
    arrivalDate: "",
    adults: 1,
    children: 0,
    enquiry: "",
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Header animation that only plays once
    gsap.from(headerRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: headerRef.current,
        start: 'top 80%',
        end: 'bottom center',
        toggleActions: 'play none none none',
        once: true
      }
    });

    // Form fields animation that only plays once
    const formElements = formRef.current?.querySelectorAll('.form-field');
    formElements?.forEach((element, index) => {
      gsap.from(element, {
        x: index % 2 === 0 ? -50 : 50,
        opacity: 0,
        duration: 0.5,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom center',
          toggleActions: 'play none none none',
          once: true
        }
      });
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    handleClear();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setFormData({
      tourName: "",
      name: "",
      mobile: "",
      email: "",
      departureDate: "",
      arrivalDate: "",
      adults: 1,
      children: 0,
      enquiry: "",
    });
    formRef.current?.reset();
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="w-full min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col items-center justify-center bg-gray-50">
      {/* Header Section */}
      <div ref={headerRef} className="gap-4 flex flex-col items-center justify-center text-center mb-8 sm:mb-12 lg:mb-16">
        <p className="uppercase  text-sm sm:text-base md:text-lg text-pri-brown tracking-wider">
          Plan Your Journey
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold text-pri-brown">
          Enquire Now
        </h1>
        <p className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] text-center text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">
          Begin your spiritual journey with us by filling out the form below. We'll help you plan the perfect Buddhist tour experience.
        </p>
      </div>

      {/* Form Section */}
      <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-4xl space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Tour Name - Full Width */}
          <div className="form-field flex flex-col lg:col-span-2">
            <label htmlFor="tourName" className="mb-2 text-gray-700 text-sm sm:text-base font-medium">
              Tour Name
            </label>
            <select
              name="tourName"
              id="tourName"
              value={formData.tourName}
              onChange={handleChange}
              required
              className="p-3 sm:p-4 border border-gray-300 focus:outline-none focus:border-pri-orange focus:ring-2 focus:ring-pri-orange/20 transition-all duration-200 text-sm sm:text-base"
            >
              <option value="">Select a Tour</option>
              {allTourNames.map((tour) => (
                <option key={tour.id} value={tour.id}>
                  {tour.name}
                </option>
              ))}
            </select>
          </div>

          {/* Name */}
          <div className="form-field flex flex-col">
            <label htmlFor="name" className="mb-2 text-gray-700 text-sm sm:text-base font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 sm:p-4 border border-gray-300 focus:outline-none focus:border-pri-orange focus:ring-2 focus:ring-pri-orange/20 transition-all duration-200 text-sm sm:text-base"
              placeholder="Enter your full name"
            />
          </div>

          {/* Mobile */}
          <div className="form-field flex flex-col">
            <label htmlFor="mobile" className="mb-2 text-gray-700 text-sm sm:text-base font-medium">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="p-3 sm:p-4 border border-gray-300 focus:outline-none focus:border-pri-orange focus:ring-2 focus:ring-pri-orange/20 transition-all duration-200 text-sm sm:text-base"
              placeholder="Enter 10-digit mobile number"
            />
          </div>

          {/* Email - Full Width */}
          <div className="form-field flex flex-col lg:col-span-2">
            <label htmlFor="email" className="mb-2 text-gray-700 text-sm sm:text-base font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 sm:p-4 border border-gray-300 focus:outline-none focus:border-pri-orange focus:ring-2 focus:ring-pri-orange/20 transition-all duration-200 text-sm sm:text-base"
              placeholder="Enter your email address"
            />
          </div>

          {/* Date Fields - Always in a row */}
          <div className="form-field lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label htmlFor="departureDate" className="mb-2 text-gray-700 text-sm sm:text-base font-medium">
                  Departure Date
                </label>
                <input
                  type="date"
                  id="departureDate"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                  min={today}
                  required
                  className="p-3 sm:p-4 border border-gray-300 focus:outline-none focus:border-pri-orange focus:ring-2 focus:ring-pri-orange/20 transition-all duration-200 text-sm sm:text-base"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="arrivalDate" className="mb-2 text-gray-700 text-sm sm:text-base font-medium">
                  Return Date
                </label>
                <input
                  type="date"
                  id="arrivalDate"
                  name="arrivalDate"
                  value={formData.arrivalDate}
                  onChange={handleChange}
                  min={formData.departureDate || today}
                  required
                  className="p-3 sm:p-4 border border-gray-300 focus:outline-none focus:border-pri-orange focus:ring-2 focus:ring-pri-orange/20 transition-all duration-200 text-sm sm:text-base"
                />
              </div>
            </div>
          </div>

          {/* Adults */}
          <div className="form-field flex flex-col">
            <label htmlFor="adults" className="mb-2 text-gray-700 text-sm sm:text-base font-medium">
              Adults
            </label>
            <input
              type="number"
              id="adults"
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              min="1"
              required
              className="p-3 sm:p-4 border border-gray-300 focus:outline-none focus:border-pri-orange focus:ring-2 focus:ring-pri-orange/20 transition-all duration-200 text-sm sm:text-base"
            />
          </div>

          {/* Children */}
          <div className="form-field flex flex-col">
            <label htmlFor="children" className="mb-2 text-gray-700 text-sm sm:text-base font-medium">
              Children
            </label>
            <input
              type="number"
              id="children"
              name="children"
              value={formData.children}
              onChange={handleChange}
              min="0"
              className="p-3 sm:p-4 border border-gray-300 focus:outline-none focus:border-pri-orange focus:ring-2 focus:ring-pri-orange/20 transition-all duration-200 text-sm sm:text-base"
            />
          </div>

          {/* Enquiry - Full Width */}
          <div className="form-field flex flex-col lg:col-span-2">
            <label htmlFor="enquiry" className="mb-2 text-gray-700 text-sm sm:text-base font-medium">
              Additional Requirements
            </label>
            <textarea
              id="enquiry"
              name="enquiry"
              value={formData.enquiry}
              onChange={handleChange}
              rows={4}
              required
              className="p-3 sm:p-4 border border-gray-300 focus:outline-none focus:border-pri-orange focus:ring-2 focus:ring-pri-orange/20 transition-all duration-200 text-sm sm:text-base resize-none"
              placeholder="Tell us about your preferences, special requirements, or any questions you have..."
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <button
            type="submit"
            className="w-full sm:w-auto min-w-[200px] bg-pri-orange text-white py-3 sm:py-4 px-6 sm:px-8 hover:bg-opacity-90 transition-all duration-300 font-medium text-sm sm:text-base shadow-lg hover:shadow-xl"
          >
            Submit Enquiry
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="w-full sm:w-auto min-w-[200px] bg-gray-500 text-white py-3 sm:py-4 px-6 sm:px-8 hover:bg-opacity-90 transition-all duration-300 font-medium text-sm sm:text-base shadow-lg hover:shadow-xl"
          >
            Clear Form
          </button>
        </div>
      </form>
    </div>
  );
} 