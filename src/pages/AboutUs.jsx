import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import { GrMapLocation } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { SlStar } from "react-icons/sl";
import { IoTimerOutline } from "react-icons/io5";
import { FiGift } from "react-icons/fi";
import hotelhero from '../assets/about.jpg';
import hotel1 from "../assets/Aashiyana.png";
import hotel4 from "../assets/Dhanesh.png";
import hotel5 from "../assets/BEHLAshram.png";
import hotel6 from "../assets/BadriVilleResort.png";
import hotel7 from "../assets/HotelDivine.png";
import hotel8 from "../assets/Neelkanth.png";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      once: true, // Whether animation should happen only once
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-100 ">
      <div className="container mx-auto">
        <div className="relative">
          <img
            src={hotelhero}
            alt="Hotel"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            data-aos="fade-up"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 rounded-lg">
            <h2 className="text-4xl font-bold text-white" data-aos="fade-down">
              About Us
            </h2>
          </div>
        </div>

        <div className="mt-10 text-center">
          <h4 className="text-4xl font-semibold text-gray-700 mb-4" data-aos="fade-up">
            About Us
          </h4>
          <p className="text-gray-600 max-w-2xl mx-auto" data-aos="fade-up">
            Ut condimentum magna ut augue elementum ornare. Fusce posuere massa
            vitae maximus posuere. Mauris sagittis consectetur vulputate.
            Curabitur commodo est quis felis porttitor eleifend. Sed efficitur sem
            mi, et feugiat lorem scelerisque awesome hotel booking website for
            you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition" data-aos="fade-right">
            <GrMapLocation className="text-4xl text-red-500 mb-4" />
            <h1 className="text-xl font-semibold text-gray-700 mb-2">Best Location</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consec adipiscing elit, sed do eiusmod an
              tempor incididunt.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition" data-aos="fade-left">
            <SlCalender className="text-4xl text-blue-500 mb-4" />
            <h1 className="text-xl font-semibold text-gray-700 mb-2">Free Cancellation</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consec adipiscing elit, sed do eiusmod an
              tempor incididunt.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition" data-aos="fade-up">
            <SlStar className="text-4xl text-yellow-500 mb-4" />
            <h1 className="text-xl font-semibold text-gray-700 mb-2">High Rating</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consec adipiscing elit, sed do eiusmod an
              tempor incididunt.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition" data-aos="fade-right">
            <IoTimerOutline className="text-4xl text-green-500 mb-4" />
            <h1 className="text-xl font-semibold text-gray-700 mb-2">Quiet Hours</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consec adipiscing elit, sed do eiusmod an
              tempor incididunt.
            </p>
          </div>
          <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition" data-aos="fade-left">
            <FiGift className="text-4xl text-purple-500 mb-4" />
            <h1 className="text-xl font-semibold text-gray-700 mb-2">Special Offers</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consec adipiscing elit, sed do eiusmod an
              tempor incididunt.
            </p>
          </div>
        </div>
      </div>
      <div className="slider-container mb-16 px-4 mt-3">
        <h2
          className="text-center text-4xl font-extrabold text-gray-800 mb-8"
          data-aos="fade-up"
        >
          Our Hotels
        </h2>
        <Slider {...settings} className="relative">
          <div className="px-2" data-aos="fade-right">
            <img
              src={hotel1}
              alt="Hotel Aashiyana"
              className="w-full h-80 object-contain rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="px-2" data-aos="fade-up">
            <img
              src={hotel4}
              alt="Hotel Dhanesh"
              className="w-full h-80 object-contain rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="px-2" data-aos="fade-left">
            <img
              src={hotel5}
              alt="Hotel BEHLAshram"
              className="w-full h-80 object-contain rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="px-2" data-aos="fade-right">
            <img
              src={hotel6}
              alt="Hotel BadriVille Resort"
              className="w-full h-80 object-contain rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="px-2" data-aos="fade-left">
            <img
              src={hotel8}
              alt="Hotel Neelkanth"
              className="w-full h-80 object-contain rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
          <div className="px-2" data-aos="fade-up">
            <img
              src={hotel7}
              alt="Hotel Divine"
              className="w-full h-80 object-contain rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default AboutUs;
