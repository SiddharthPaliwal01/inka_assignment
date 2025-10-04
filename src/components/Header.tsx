import React, { useState } from 'react';
import logo from '../../images/Logo/Desktop.svg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 text-white pt-4 sm:pt-6 md:pt-8">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="CentralMusic" className="h-5 sm:h-6 md:h-7 lg:h-8" />
          </div>

          {/* Navigation - Hidden on mobile, visible on desktop */}
          <nav className="hidden lg:flex space-x-4 xl:space-x-8 text-xs md:text-sm xl:text-base ml-8 lg:ml-12 flex-1 justify-center">
            <a href="#" className="hover:text-gray-300 transition whitespace-nowrap">Guitars</a>
            <a href="#" className="hover:text-gray-300 transition whitespace-nowrap">Accessories</a>
            <a href="#" className="hover:text-gray-300 transition whitespace-nowrap">Storage</a>
            <a href="#" className="hover:text-gray-300 transition whitespace-nowrap">Lessons</a>
            <a href="#" className="hover:text-gray-300 transition whitespace-nowrap">Repairs</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-3 sm:space-x-4 md:space-x-6">
            {/* Hamburger Menu - Visible on mobile only */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden hover:text-gray-300 transition"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button className="hover:text-gray-300 transition">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </button>
            <button className="hover:text-gray-300 transition">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-sm">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#" className="hover:text-gray-300 transition py-2 border-b border-gray-700">Guitars</a>
              <a href="#" className="hover:text-gray-300 transition py-2 border-b border-gray-700">Accessories</a>
              <a href="#" className="hover:text-gray-300 transition py-2 border-b border-gray-700">Storage</a>
              <a href="#" className="hover:text-gray-300 transition py-2 border-b border-gray-700">Lessons</a>
              <a href="#" className="hover:text-gray-300 transition py-2">Repairs</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
