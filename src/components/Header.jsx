import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="px-4 md:px-[120px] py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-semibold">Jega</h1>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger icon */}
          <span className="material-icons">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>

        {/* Navigation Links */}
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mt-4 md:mt-0">
            <li>
              <a
                href="#home"
                className="text-lg font-regular hover:text-blue-500 dark:hover:text-blue-400"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#WhatIDo"
                className="text-lg font-regular hover:text-blue-500 dark:hover:text-blue-400"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Portfolio"
                className="text-lg font-regular hover:text-blue-500 dark:hover:text-blue-400"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="text-lg font-regular hover:text-blue-500 dark:hover:text-blue-400"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
