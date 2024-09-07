import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hotel from '../assets/shritritham2.avif';

const AboutHotel = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Customize the animation duration
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 lg:p-12 transition-transform duration-500 ease-in-out transform hover:scale-105">
      <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-center gap-6 lg:gap-12 transition-all duration-500 ease-in-out">
        
        {/* Heading */}
        <div 
          className="text-center lg:text-center lg:w-1/3 opacity-100 transition-opacity duration-500 ease-in-out hover:opacity-80"
          data-aos="fade-right" // Apply fade-right animation
        >
          <p className="text-gray-600 text-lg font-semibold">Phata, Kedarnath</p>
          <h3 className="text-4xl font-bold text-gray-800 mt-4">
            Welcome to Shri Tritham Residency.<br />
            A Peaceful Retreat in the Lap of the Himalayas.
          </h3>
        </div>
        
        {/* Image */}
        <div 
          className="lg:w-1/3 transition-transform duration-500 ease-in-out transform hover:scale-110"
          data-aos="zoom-in" // Apply zoom-in animation
        >
          <img 
            src={hotel} 
            alt="Shri Tritham Residency" 
            className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
        
        {/* Paragraph */}
        <div 
          className="text-center lg:text-center lg:w-1/3 space-y-4 opacity-100 transition-opacity duration-500 ease-in-out hover:opacity-80"
          data-aos="fade-left" // Apply fade-left animation
        >
          <p className="text-gray-700">
            Located in Phata, en route to Kedarnath, Shri Tritham Residency offers a serene and comfortable stay amidst the breathtaking beauty of the Himalayas. Experience a peaceful retreat after your spiritual journey to the sacred Kedarnath Temple.
          </p>
          <p className="text-gray-700">
            Our residency provides modern amenities and personalized service to ensure that your stay is both comfortable and memorable. With easy access to helicopter services for Kedarnath, Shri Tritham Residency is the ideal stop for pilgrims seeking rest and rejuvenation.
          </p>
        </div>
      </div>
      <hr className="bg-black" data-aos="fade-up" data-aos-delay="400" />
    </div>
  );
};

export default AboutHotel;
