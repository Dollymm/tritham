import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import hotel from '../assets/tri.jpeg';
import AboutHotel from '../component/AboutHotel';
import Room from '../component/Room';
import Facilities from '../component/Facilites';
import VideoPage from '../component/VideoPage';
import Offers from '../component/Offers';
import Extra from '../component/Extra';
import Testiomonial from '../component/Testiomonial';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // You can adjust the duration of the animations
    });
  }, []);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={hotel}
            alt="Hotel Background"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="bg-opacity-60 rounded-lg shadow-lg max-w-4xl mx-auto text-center text-white p-6 shadow-black"
            data-aos="fade-up"  // Apply AOS animation here
          >
            {/* <h4 className="text-2xl font-bold mb-2" data-aos="fade-down" data-aos-delay="200">
              Welcome to Shri Tritham Residency
            </h4> */}
            <h1 className="text-5xl mb-4" data-aos="fade-up" data-aos-delay="400">
              Your Gateway to Luxury in the Mountains
              <hr className="w-full mt-3 mx-auto border-b-2 border-white" />
            </h1>
            <p className="text-xl mb-3" data-aos="fade-in" data-aos-delay="600">
              Nestled in the serene path of Shri Kedarnath, enjoy unparalleled luxury and comfort amidst breathtaking surroundings.
            </p>
            <button 
              className="bg-yellow-700 px-3 py-3 rounded-md text-white hover:bg-[#506093] hover:text-white"
              data-aos="zoom-in" data-aos-delay="800"
            >
              Explore Rooms & Suites
            </button>
          </div>
        </div>
      </div>

      <AboutHotel />
      <Room />
      <Facilities />
      <VideoPage />
      <Offers />
      <Extra />
      <Testiomonial />
    </>
  );
};

export default Home;
