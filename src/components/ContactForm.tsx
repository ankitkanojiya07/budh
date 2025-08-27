'use client';

import { useEffect, useRef, useState, FormEvent } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const ContactForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        departure: '',
        arrival: '',
        adult: 1,
        children: 0,
        enquiry: ''
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
                toggleActions: 'play none none none', // Changed to only play once
                once: true // Added to ensure it only plays once
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
                    toggleActions: 'play none none none', // Changed to only play once
                    once: true // Added to ensure it only plays once
                }
            });
        });
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    const handleClear = () => {
        setFormData({
            name: '',
            mobile: '',
            email: '',
            departure: '',
            arrival: '',
            adult: 1,
            children: 0,
            enquiry: ''
        });
        formRef.current?.reset();
    };

    const today = new Date().toISOString().split('T')[0];

    return (
        <div className="w-full min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col items-center justify-center bg-gray-50">
            <div ref={headerRef} className="gap-4 flex flex-col items-center justify-center text-center mb-8 sm:mb-12 lg:mb-16">
                <p className="uppercase  text-sm sm:text-base md:text-lg text-pri-brown tracking-wider">Reach Out and connect</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  font-bold text-pri-brown">Let's Stay in Touch</h2>
                <p className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] text-center text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl">Your bridge to meaningful communication and personalized assistance, we're here to listen and assist you</p>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className="w-full max-w-4xl space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-field flex flex-col">
                        <label htmlFor="name" className="mb-2 text-gray-700 text-sm sm:text-base font-medium">Full Name</label>
                        <input 
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your full name"
                            className="p-3 sm:p-4 border border-gray-300 focus:outline-none focus:border-pri-orange focus:ring-2 focus:ring-pri-orange/20 transition-all duration-200 text-sm sm:text-base"
                        />
                    </div>

                    <div className="form-field flex flex-col">
                        <label htmlFor="mobile" className="mb-2 text-gray-700 text-sm sm:text-base font-medium">Mobile Number</label>
                        <input 
                            type="tel"
                            id="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            required
                            pattern="[0-9]{10}"
                            placeholder="Enter 10-digit mobile number"
                            className="p-3 sm:p-4 border border-gray-300 focus:outline-none focus:border-pri-orange focus:ring-2 focus:ring-pri-orange/20 transition-all duration-200 text-sm sm:text-base"
                        />
                    </div>

                    <div className="form-field flex flex-col md:col-span-2">
                        <label htmlFor="email" className="mb-2 text-gray-700 text-sm sm:text-base font-medium">Email Address</label>
                        <input 
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your email address"
                            className="p-3 sm:p-4 border border-gray-300 focus:outline-none focus:border-pri-orange focus:ring-2 focus:ring-pri-orange/20 transition-all duration-200 text-sm sm:text-base"
                        />
                    </div>



                    <div className="form-field flex flex-col">
                        <label htmlFor="adult" className="mb-2 text-gray-700 text-sm sm:text-base font-medium">Adults</label>
                        <input 
                            type="number"
                            id="adult"
                            value={formData.adult}
                            onChange={handleInputChange}
                            min="1"
                            required
                            className="p-3 sm:p-4 border border-gray-300 focus:outline-none focus:border-pri-orange focus:ring-2 focus:ring-pri-orange/20 transition-all duration-200 text-sm sm:text-base"
                        />
                    </div>

                    <div className="form-field flex flex-col">
                        <label htmlFor="children" className="mb-2 text-gray-700 text-sm sm:text-base font-medium">Children</label>
                        <input 
                            type="number"
                            id="children"
                            value={formData.children}
                            onChange={handleInputChange}
                            min="0"
                            className="p-3 sm:p-4 border border-gray-300 focus:outline-none focus:border-pri-orange focus:ring-2 focus:ring-pri-orange/20 transition-all duration-200 text-sm sm:text-base"
                        />
                    </div>
                </div>

                {/* Date Fields - Always in a row */}
                <div className="form-field">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col">
                            <label htmlFor="departure" className="mb-2 text-gray-700 text-sm sm:text-base font-medium">Departure Date</label>
                            <input 
                                type="date"
                                id="departure"
                                value={formData.departure}
                                onChange={handleInputChange}
                                min={today}
                                required
                                className="p-3 sm:p-4 border border-gray-300 focus:outline-none focus:border-pri-orange focus:ring-2 focus:ring-pri-orange/20 transition-all duration-200 text-sm sm:text-base"
                            />
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="arrival" className="mb-2 text-gray-700 text-sm sm:text-base font-medium">Return Date</label>
                            <input 
                                type="date"
                                id="arrival"
                                value={formData.arrival}
                                onChange={handleInputChange}
                                min={formData.departure || today}
                                required
                                className="p-3 sm:p-4 border border-gray-300 focus:outline-none focus:border-pri-orange focus:ring-2 focus:ring-pri-orange/20 transition-all duration-200 text-sm sm:text-base"
                            />
                        </div>
                    </div>
                </div>

                <div className="form-field flex flex-col">
                    <label htmlFor="enquiry" className="mb-2 text-gray-700 text-sm sm:text-base font-medium">Additional Requirements</label>
                    <textarea
                        id="enquiry"
                        value={formData.enquiry}
                        onChange={handleInputChange}
                        rows={4}
                        required
                        placeholder="Tell us about your preferences, special requirements, or any questions you have..."
                        className="p-3 sm:p-4 border border-gray-300 focus:outline-none focus:border-pri-orange focus:ring-2 focus:ring-pri-orange/20 transition-all duration-200 text-sm sm:text-base resize-none"
                    ></textarea>
                </div>

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
    )
}

export default ContactForm;
