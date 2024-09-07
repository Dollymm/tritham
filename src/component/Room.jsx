import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import room1 from '../assets/room3.jpeg';
import room2 from '../assets/room1.jpeg';
import room3 from '../assets/room4.jpeg';
import room4 from '../assets/roomimg1.webp';

const Room = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Customize the animation duration
      once: true, // Animation occurs only once
    });
  }, []);

  return (
    <div className="p-4 lg:p-8">
      {/* Heading Section */}
      <div className="text-center mb-6" data-aos="fade-down">
        <p className="text-md text-gray-600 font-semibold">THE LUXURY HOTEL</p>
        <h1 className="text-3xl font-bold text-gray-800 mt-1">Rooms & Suites</h1>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* First Image (Full width) */}
        <div 
          className="lg:col-span-2 relative group"
          data-aos="zoom-in" // Apply zoom-in animation
        >
          <img 
            src={room1} 
            alt="Room 1" 
            className="w-full h-60 lg:h-72 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
            <p className="text-white text-lg font-semibold">Deluxe Room - King Size Bed</p>
          </div>
        </div>

        {/* Second Image (Rectangle) */}
        <div 
          className="lg:row-span-2 relative group"
          data-aos="fade-right" // Apply fade-right animation
        >
          <img 
            src={room2} 
            alt="Room 2" 
            className="w-full h-60 lg:h-full object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
            <p className="text-white text-lg font-semibold">Executive Suite - Ocean View</p>
          </div>
        </div>

        {/* Third Image */}
        <div 
          className="relative group"
          data-aos="fade-up" // Apply fade-up animation
        >
          <img 
            src={room3} 
            alt="Room 3" 
            className="w-full h-28 lg:h-36 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
            <p className="text-white text-md font-semibold">Junior Suite - Garden View</p>
          </div>
        </div>

        {/* Fourth Image */}
        <div 
          className="relative group"
          data-aos="fade-left" // Apply fade-left animation
        >
          <img 
            src={room4} 
            alt="Room 4" 
            className="w-full h-28 lg:h-36 object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
            <p className="text-white text-md font-semibold">Standard Room - Twin Bed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Room;
