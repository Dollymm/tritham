import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import review1 from '../assets/review1.webp';
import review2 from '../assets/review4.jpg';
import review3 from '../assets/review3.jpg';

const StarRating = ({ rating }) => {
  const stars = Array(5).fill(false).map((_, index) => index < rating);
  return (
    <div className="flex items-center">
      {stars.map((filled, index) => (
        <span key={index} className={`text-yellow-500 ${filled ? 'text-yellow-500' : 'text-gray-400'}`}>★</span>
      ))}
    </div>
  );
};

const Testiomonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration (in ms)
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    customPaging: i => (
      <div className="slick-dot bg-white w-2.5 h-2.5 rounded-full"></div>
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
    <section
      className="bg-cover bg-center py-12 mt-10"
      style={{ backgroundImage: 'url(https://wp.ditsolution.net/luxury/wp-content/uploads/2022/07/slider1.jpg)' }}
    >
      <div className="container mx-auto text-center">
        <h5 className="text-2xl font-semibold mb-2 text-gray-200" data-aos="fade-up">Testimonials</h5>
        <h3 className="text-3xl font-bold mb-8 text-white" data-aos="fade-up" data-aos-delay="200">What Our Clients Say</h3>
        <Slider {...settings}>
          <div className="shadow-black p-6 rounded-lg shadow-lg max-w-sm bg-black bg-opacity-80 hover:bg-opacity-100 transition duration-300 ease-in-out transform hover:scale-105" data-aos="fade-right">
            <img src={review1} alt="Review 1" className="w-20 h-20 object-cover rounded-full mb-4 mx-auto" />
            <p className="text-white mb-2">LUXURY triston usto fison shjkk skfkkdk ososkks sjhhhjk iudkjdjc</p>
            <StarRating rating={3} />
            <h5 className="font-semibold text-gray-300 mt-2">ANSTA BLOOSOM</h5>
          </div>
          <div className="shadow-black p-6 rounded-lg shadow-lg max-w-sm bg-black bg-opacity-80 hover:bg-opacity-100 transition duration-300 ease-in-out transform hover:scale-105" data-aos="fade-up">
            <img src={review2} alt="Review 2" className="w-20 h-20 object-cover rounded-full mb-4 mx-auto" />
            <p className="text-white mb-2">LUXURY triston usto fison shjkk skfkkdk ososkks sjhhhjk iudkjdjc</p>
            <StarRating rating={5} />
            <h5 className="font-semibold text-gray-300 mt-2">ANSTA BLOOSOM</h5>
          </div>
          <div className="shadow-black p-6 rounded-lg shadow-lg max-w-sm bg-black bg-opacity-80 hover:bg-opacity-100 transition duration-300 ease-in-out transform hover:scale-105" data-aos="fade-left">
            <img src={review3} alt="Review 3" className="w-20 h-20 object-cover rounded-full mb-4 mx-auto" />
            <p className="text-white mb-2">LUXURY triston usto fison shjkk skfkkdk ososkks sjhhhjk iudkjdjc</p>
            <StarRating rating={4} />
            <h5 className="font-semibold text-gray-300 mt-2">ANSTA BLOOSOM</h5>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testiomonial;
