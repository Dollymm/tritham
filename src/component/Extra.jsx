import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LuPhoneCall } from "react-icons/lu";
import serviceImage1 from '../assets/services1.jpg';
import serviceImage2 from '../assets/services2.webp';
import serviceImage3 from '../assets/services3.webp';
import serviceImage4 from '../assets/res2.jpeg'; // Add more images as needed

const Extra = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: i => (
      <div className="slick-dot bg-white w-3 h-3 rounded-full"></div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="flex items-center justify-center py-12 px-4">
      <div className="flex flex-col lg:flex-row rounded-lg overflow-hidden w-full max-w-6xl">
        <div data-aos="fade-right" className="lg:w-1/2 p-6">
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-gray-400">BEST PRICE</h4>
            <h2 className="text-3xl font-bold">Extra Services</h2>
            <p className="mt-2 font-thin">
              We offer a range of premium services to ensure that your stay with us is nothing short of exceptional.
            </p>
            <p className="mt-2">
              Our team is dedicated to providing the highest quality service, tailored to your needs.
            </p>
          </div>
          <div className="flex items-center mt-6">
            <div>
              <LuPhoneCall className="mr-4" style={{ fontSize: '4rem', color: 'gray' }} />
              <p className="text-xl text-gray-500">8890000000</p>
              <p>For more information and bookings</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" className="lg:w-1/2 p-6">
          <Slider {...settings} className="slider">
            <div className="flex flex-col items-center p-4">
              <img src={serviceImage1} alt="Service 1" className="w-full h-48 object-cover mb-4" />
              <h2 className="text-xl font-bold w-full bg-gray-400 px-3 py-2">Room Cleaning</h2>
              <ul className="mt-4 text-sm">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Daily housekeeping service
                </li>
                <li className="flex items-center mt-2">
                  <span className="text-green-500 mr-2">✓</span>
                  High-quality cleaning products
                </li>
                <li className="flex items-center mt-2">
                  <span className="text-green-500 mr-2">✓</span>
                  Eco-friendly practices
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center p-4">
              <img src={serviceImage2} alt="Service 2" className="w-full h-48 object-cover mb-4" />
              <h2 className="text-xl font-bold w-full bg-gray-400 px-3 py-2">Health & safety</h2>
              <ul className="mt-4 text-sm">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Emergency response services
                </li>
                <li className="flex items-center mt-2">
                  <span className="text-green-500 mr-2">✓</span>
                  Emergency response services
                </li>
                <li className="flex items-center mt-2">
                  <span className="text-green-500 mr-2">✓</span>
                  Hygiene protocols for your safety
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center p-4">
              <img src={serviceImage3} alt="Service 3" className="w-full h-48 object-cover mb-4" />
              <h2 className="text-xl font-bold w-full bg-gray-400 px-3 py-2">Room Dining</h2>
              <ul className="mt-4 text-sm">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Personalized dining experiences
                </li>
                <li className="flex items-center mt-2">
                  <span className="text-green-500 mr-2">✓</span>
                  Gourmet menu selections
                </li>
                <li className="flex items-center mt-2">
                  <span className="text-green-500 mr-2">✓</span>
                  Private dining options
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-center p-4">
              <img src={serviceImage4} alt="Service 4" className="w-full h-48 object-cover mb-4" />
              <h2 className="text-xl font-bold w-full bg-gray-400 px-3 py-2">Restaurant Services</h2>
              <ul className="mt-4 text-sm">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Signature dishes prepared by renowned chefs
                </li>
                <li className="flex items-center mt-2">
                  <span className="text-green-500 mr-2">✓</span>
                  Fresh, locally sourced ingredients
                </li>
                <li className="flex items-center mt-2">
                  <span className="text-green-500 mr-2">✓</span>
                  Gourmet dining experience
                </li>
              </ul>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Extra;
