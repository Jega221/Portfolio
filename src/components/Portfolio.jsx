import React from 'react';

// Import your project images and technology icons
import chatAppImage from '../assets/chatapp.png'; // replace with actual image path
import financeAppImage from '../assets/finance.png'; // replace with actual image path
import reactIcon from '../assets/react_img.png'; 
import tailwindIcon from '../assets/tailwindcss.png';
import cssIcon from '../assets/css.png';

const Portfolio = () => {
  return (
    <div className="py-20" id="Portfolio">
      {/* Padding for the container on left and right */}
      <div className="px-4 md:px-[120px]">
        {/* Portfolio Title */}
        <h2 className="text-green-500 font-semibold text-lg">Portfolio</h2>
        <h3 className="text-2xl font-semibold mt-2">Latest Work</h3>

        {/* Project 1 - Chatapp */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between md:space-x-8">
          {/* Left: Image */}
          <div className="md:w-1/2">
            <img src={chatAppImage} alt="Chatapp project"/>
          </div>

          {/* Right: Description */}
          <div className="md:w-1/2 mt-6 md:mt-0">
            <h4 className="text-xl font-semibold mb-4">Chatapp</h4>
            <p className="text-xl mb-8 leading-[40px] tracking-[0.02em] max-w-[85%] opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            {/* Technology Icons */}
            <div className="flex space-x-4 mt-4">
              <img src={reactIcon} alt="React" className="h-6 w-6" />
              <img src={tailwindIcon} alt="Tailwind CSS" className="h-6 w-6" />
            </div>
          </div>
        </div>

        {/* Project 2 - Finance */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between md:space-x-8">
          {/* Left: Description */}
          <div className="md:w-1/2 order-2 md:order-1 mt-6 md:mt-0">
            <h4 className="text-xl font-semibold mb-4">Finance</h4>
            <p className="text-xl mb-8 leading-[40px] tracking-[0.02em] max-w-[85%] opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            {/* Technology Icons */}
            <div className="flex space-x-4 mt-4">
              <img src={reactIcon} alt="React" className="h-6 w-6" />
              <img src={cssIcon} alt="CSS" className="h-6 w-6" />
            </div>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2 order-1 md:order-2 mt-6 md:mt-0">
            <img src={financeAppImage} alt="Finance project"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
