import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { IoLogoYoutube } from "react-icons/io5";
const Footer = () => {
  return (
    <div className="bg-black text-white py-10 mt-9">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-12">
        
        {/* Luxury Section */}
        <div>
          <h1 className="text-2xl font-bold mb-4">LUXURY</h1>
          <p className="text-gray-400">
            Quisque pretium fermentum quam, sit amet cursus ante sollicitudin vel. Morbi consequat risus consequat, porttitor orci sit amet, iaculis nisl.
          </p>
          <div className="mt-4 flex gap-3 text-3xl">
          <FaInstagramSquare className='text-orange-800' />
          <CiFacebook className='text-blue-400' />
          <IoLogoYoutube className='text-red-900' />
          </div>
        </div>
        
        {/* General Links Section */}
        <div>
          <h1 className="text-2xl font-bold mb-4">General</h1>
          <ul className="text-gray-400 space-y-2">
            <li className="hover:text-white"><span className="mr-2">→</span>Home</li>
            <li className="hover:text-white"><span className="mr-2">→</span>About</li>
            <li className="hover:text-white"><span className="mr-2">→</span>Accommodation</li>
            <li className="hover:text-white"><span className="mr-2">→</span>Services</li>
          </ul>
        </div>
        
        {/* Contact Us Section */}
        <div>
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-400">
            Shop 2 & 3, Second Floor, Surya Complex<br />
            Ranipur More, Haridwar, Uttarakhand<br />
            Pin Code – 249401
          </p>
          <p className="text-gray-400 mt-4">salesinfo@traveltonirvana.com</p>
          <p className="text-gray-400 mt-2">9258126088, 9258126089, 9389301916</p>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
