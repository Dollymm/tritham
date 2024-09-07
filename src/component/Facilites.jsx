import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoFastFoodOutline } from "react-icons/io5";
import { GiDetour, GiBroom } from "react-icons/gi"; // Added a new icon for housekeeping
import { FaWifi, FaSwimmingPool } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa"; // Added WiFi and Swimming Pool icons

import guptkasi from '../assets/guptakashi.jpg';
import kedar from '../assets/services3.webp';
import rudra from '../assets/rudraPrag.jpg';
import res from '../assets/restaurent.jpeg'
import shri from '../assets/shritritham.avif';
import { ImPodcast } from 'react-icons/im';

const Facilities = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const facilitiesData = [
    {
      icon: <IoFastFoodOutline size={40} />,
      title: "Complementary Breakfast",
      description: "Start your day with a free breakfast. Choose from a variety of fresh, delicious options.",
      image: kedar
    },
    {
      icon: <GiDetour size={40} />,
      title: "Tour Guide",
      description: "Explore the wonders of Uttarakhand with our experienced local tour guide.",
      image: guptkasi
    },
    {
      icon: <FaTaxi size={40} />,
      title: "Taxi Services",
      description: "Need transportation? Our reliable taxi service is available 24/7 to take you wherever you need.",
      image: rudra
    },
    {
      icon: <FaWifi size={40} />,
      title: "Free WiFi",
      description: "Stay connected with high-speed internet access available throughout the hotel.",
      image: shri
    },
    {
      icon: <FaSwimmingPool size={40} />,
      title: "Restaurant",
      description: "Take a dip and relax in our luxurious outdoor Restaurant with stunning views.",
      image: res
    },
    {
      icon: <GiBroom size={40} />,
      title: "Daily Housekeeping",
      description: "We provide daily housekeeping to ensure your room stays fresh and clean throughout your stay.",
      image: guptkasi
    }
  ];

  return (
    <div className="p-6 lg:p-12 bg-gray-100">
      {/* Headings */}
      <div className="text-center mb-12" data-aos="fade-down">
        <p className="text-sm lg:text-base text-gray-600 font-semibold mb-2">Hotel Facilities</p>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Luxury Amenities to Enhance Your Stay</h2>
        <p className="text-sm lg:text-base text-gray-600 font-semibold">Indulge in the finest services that cater to your every need, making your stay truly unforgettable.</p>
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilitiesData.map((facility, index) => (
          <div
            key={index}
            className="relative p-6 bg-white rounded-lg shadow-lg group overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100} // Adds a slight delay for each item
          >
            {/* Icon and Text */}
            <div className="text-center">
              <div className="text-gray-800 mb-6 flex justify-center" data-aos="zoom-in">
                {facility.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2" data-aos="fade-right">{facility.title}</h3>
              <p className="text-sm text-gray-500 mb-4" data-aos="fade-left">{facility.description}</p>
            </div>

            {/* Hover Image and Additional Content */}
            <div className="absolute inset-0 bg-gray-900 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover rounded-lg transform scale-110 transition-transform duration-500"
                data-aos="zoom-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-lg font-semibold">{facility.title}</h3>
                <p className="text-sm">{facility.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
