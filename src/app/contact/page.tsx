"use client";

import ContactForm from "@/components/ContactForm";
import { motion } from "motion/react";
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { 
        opacity: 0, 
        y: 20 
    },
    visible: { 
        opacity: 1, 
        y: 0
    }
};

const contactInfo = [
    {
        number: "01",
        title: "General Inquiries",
        content: "For any kind of queries and help, please email our reservation expert team at",
        email: "reservations@buddhisttour.com",
        additionalText: ". They will revert all your queries at the earliest within 12 hours.",
        image: "/buddh_prop/budd_prop_1.png"
    },
    {
        number: "02", 
        title: "Reservations & Planning",
        content: "You can contact us via email at",
        email: "planning@buddhisttour.com",
        additionalText: " for hotel room reservations related enquiries, itinerary planning, excursions, holiday options, rates, etc.",
        image: "/buddh_prop/buddh_prop_2.png"
    },
    {
        number: "03",
        title: "Business & Partnerships", 
        content: "Visit",
        link: "buddhisttour.com",
        additionalText: " for joint promotions, advertising, partnerships, fulfillment role, business relations, banner advertising, membership programs, etc.",
        image: "/buddh_prop/buddh_prop_3.png"
    },
    {
        number: "04",
        title: "Technical Support",
        content: "For any technology related queries and issues contact us via email at",
        email: "info@buddhisttour.com",
        image: "/buddh_prop/budd_prop_4.png"
    }
];
const page = () => {
    return (
      <main className="w-full min-h-screen bg-gradient-to-b from-orange-50/20 via-amber-25 to-yellow-50/20">
        {/* Hero Section */}
        <div className="relative bg-[url('/contact/c1.jpg')] bg-cover bg-center font-bold text-center py-12 sm:py-16 md:py-20 lg:py-24 h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] flex items-center justify-center text-white">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
          <div className="relative z-10 px-4 max-w-4xl mx-auto">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
              style={{ fontFamily: "Times, serif" }}
            >
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto font-normal leading-relaxed">
              Connect with our expert team for personalized Buddhist tour
              experiences and spiritual journeys
            </p>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pri-brown mb-6"
              style={{ fontFamily: "Times, serif" }}
            >
              How Can We Help You?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the best way to reach us based on your needs
            </p>
          </div>

          {/* Contact Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
              >
                {/* Card Content */}
                <div className="p-8 sm:p-10 lg:p-12 relative z-10">
                  {/* Number */}
                  {/* <div className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-200 mb-4" style={{fontFamily: 'Times, serif'}}>
                                    {info.number}
                                </div> */}

                  {/* Title */}
                  <h3
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-6"
                    style={{ fontFamily: "Times, serif" }}
                  >
                    {info.title}
                  </h3>

                  {/* Content */}
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                    {info.content}{" "}
                    {info.email && (
                      <a
                        href={`mailto:${info.email}`}
                        className="text-pri-orange hover:text-pri-brown transition-colors duration-300 font-medium"
                      >
                        {info.email}
                      </a>
                    )}
                    {info.link && (
                      <a
                        href={`https://${info.link}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pri-orange hover:text-pri-brown transition-colors duration-300 font-medium"
                      >
                        {info.link}
                      </a>
                    )}
                    {info.additionalText}
                  </p>
                </div>

                {/* Background Image */}
                <div className="absolute bottom-0 right-0 w-32 sm:w-40 lg:w-48 h-32 sm:h-40 lg:h-48 opacity-20 hover:opacity-30 transition-opacity duration-300">
                  <img
                    src={info.image}
                    alt={info.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-pri-orange rounded-full opacity-60"></div>
                <div className="absolute top-8 right-8 w-1 h-1 bg-pri-orange rounded-full opacity-40"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Contact Components */}
        <ContactForm />
      </main>
    );
}

export default page;