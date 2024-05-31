import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isInternshipOpen, setIsInternshipOpen] = useState(false);

  const toggleInternshipMenu = () => {
    setIsInternshipOpen(!isInternshipOpen);
  };

  return (
    <div>
      <nav className="navbar absolute pl-6 pr-6 top-10 w-full z-50">
        <div className="flex items-center justify-between">
          <div className="logo flex items-center">
            <img src="Logo.png" alt="Logo loading" className="h-10 w-30" />
          </div>

          <div className="hidden md:flex items-center space-x-7 text-sm md:text-sm lg:text-xl text-white">
            <Link to="/" className="hover:underline decoration-yellow-500 underline-offset-8">Home</Link>
            <Link to="/attributes" className="hover:underline decoration-yellow-500 underline-offset-8">Our Attributes</Link>
            <div className="relative">
              <button
                onClick={toggleInternshipMenu}
                className="hover:underline decoration-yellow-500 underline-offset-8"
              >
                <Link to="/internship">

                Internship
                </Link>
              </button>
              {isInternshipOpen && (
                <div className="absolute mt-2 bg-gray-800 rounded shadow-lg z-50 text-sm flex-col grid-cols-4 gap-4 p-3">
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-700 text-white">Wordpress Development</Link>
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-700 text-white">Figma Designing</Link>
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-700 text-white">Web Development</Link>
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-700 text-white">Python Development</Link>
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-700 text-white">Android Development</Link>
                  <Link to="#" className="block px-4 py-2 hover:bg-gray-700 text-white">Flutter Development</Link>
                </div>
              )}
            </div>
            <Link to="/about" className="hover:underline decoration-yellow-500 underline-offset-8">About Us</Link>
          </div>

          <div className="hidden md:flex items-center space-x-12 text-sm md:text-sm lg:text-xl">
            <button className="font-semibold text-gray-500">
              <Link to="/signup" className="hover:underline decoration-yellow-500 underline-offset-8">Login</Link>
            </button>
            <button className="text-textBlack font-semibold">
              <Link to="/login" className="bg-customYellow p-3 px-6 rounded-md z-50">Sign Up</Link>
            </button>
          </div>

          <div className="md:hidden z-50">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-gray-800 mt-4 rounded-lg shadow-lg p-4 z-50 bg-black">
            <div className="flex flex-col space-y-3 md:text-xl text-white">
              <Link to="/" className="hover:underline decoration-yellow-500 underline-offset-8">Home</Link>
              <Link to="/attributes" className="hover:underline decoration-yellow-500 underline-offset-8">Our Attributes</Link>
              <div className="relative">
                <button
                  onClick={toggleInternshipMenu}
                  className="hover:underline decoration-yellow-500 underline-offset-8"
                >
                  Internship
                </button>
                {isInternshipOpen && (
                  <div className="mt-2 bg-gray-800 rounded shadow-lg z-50 text-sm flex flex-col space-y-2 p-3">
                    <Link to="#" className="block px-4 py-2 hover:bg-gray-700 text-white">Wordpress Development</Link>
                    <Link to="#" className="block px-4 py-2 hover:bg-gray-700 text-white">Figma Designing</Link>
                    <Link to="#" className="block px-4 py-2 hover:bg-gray-700 text-white">Web Development</Link>
                    <Link to="#" className="block px-4 py-2 hover:bg-gray-700 text-white">Python Development</Link>
                    <Link to="#" className="block px-4 py-2 hover:bg-gray-700 text-white">Android Development</Link>
                    <Link to="#" className="block px-4 py-2 hover:bg-gray-700 text-white">Flutter Development</Link>
                  </div>
                )}
              </div>
              <Link to="/about" className="hover:underline decoration-yellow-500 underline-offset-8">About Us</Link>
              <button className="font-semibold text-gray-500">
                <Link  className="hover:underline decoration-yellow-500 underline-offset-8">Login</Link>
              </button>
              <button className="text-textBlack font-semibold">
                <Link  className="bg-customYellow  p-2 md:p-3 md:px-6 rounded-md ">Sign Up</Link>
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
