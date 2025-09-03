'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        enquiry: ''
    });



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
            enquiry: ''
        });
    };

    return (
        <div className="w-full min-h-screen p-4 sm:p-6 md:p-8 lg:p-12 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col items-center justify-center">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="gap-6 flex flex-col items-center justify-center text-center mb-12 sm:mb-16 lg:mb-20"
            >
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="uppercase text-sm sm:text-base md:text-lg text-pri-brown tracking-wider font-medium"
                >
                    Reach Out and Connect
                </motion.p>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-pri-brown leading-tight"
                >
                    Let's Stay in Touch
                </motion.h2>
            </motion.div>
            
            <motion.form 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                onSubmit={handleSubmit} 
                className="w-full max-w-4xl space-y-8"
            >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="relative group"
                    >
                        <label htmlFor="name" className="block mb-3 text-gray-700 text-sm font-semibold tracking-wide uppercase">Full Name</label>
                        <div className="relative">
                            <input 
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter your full name"
                                className="w-full p-4 border-0 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-pri-orange transition-all duration-300 text-sm sm:text-base placeholder-gray-400"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pri-orange transition-all duration-300 group-focus-within:w-full"></div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="relative group"
                    >
                        <label htmlFor="mobile" className="block mb-3 text-gray-700 text-sm font-semibold tracking-wide uppercase">Mobile Number</label>
                        <div className="relative">
                            <input 
                                type="tel"
                                id="mobile"
                                value={formData.mobile}
                                onChange={handleInputChange}
                                required
                                pattern="[0-9]{10}"
                                placeholder="Enter 10-digit mobile number"
                                className="w-full p-4 border-0 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-pri-orange transition-all duration-300 text-sm sm:text-base placeholder-gray-400"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pri-orange transition-all duration-300 group-focus-within:w-full"></div>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="relative group md:col-span-2"
                    >
                        <label htmlFor="email" className="block mb-3 text-gray-700 text-sm font-semibold tracking-wide uppercase">Email Address</label>
                        <div className="relative">
                            <input 
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                placeholder="Enter your email address"
                                className="w-full p-4 border-0 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-pri-orange transition-all duration-300 text-sm sm:text-base placeholder-gray-400"
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pri-orange transition-all duration-300 group-focus-within:w-full"></div>
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="relative group"
                >
                    <label htmlFor="enquiry" className="block mb-3 text-gray-700 text-sm font-semibold tracking-wide uppercase">Additional Requirements</label>
                    <div className="relative">
                        <textarea
                            id="enquiry"
                            value={formData.enquiry}
                            onChange={handleInputChange}
                            rows={5}
                            required
                            placeholder="Tell us about your preferences, special requirements, or any questions you have..."
                            className="w-full p-4 border-0 border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-pri-orange transition-all duration-300 text-sm sm:text-base resize-none placeholder-gray-400"
                        ></textarea>
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-pri-orange transition-all duration-300 group-focus-within:w-full"></div>
                    </div>
                </motion.div>

                {/* Unique submit button design */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                    className="flex justify-center pt-8"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="relative overflow-hidden bg-pri-orange text-white py-4 px-12 font-semibold text-sm sm:text-base transition-all duration-300 group"
                    >
                        <span className="relative z-10 tracking-wider uppercase">Send Message</span>
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-500"
                            initial={{ x: "-100%" }}
                            whileHover={{ x: "0%" }}
                            transition={{ duration: 0.3 }}
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    </motion.button>
                </motion.div>
            </motion.form>
        </div>
    )
}

export default ContactForm;
