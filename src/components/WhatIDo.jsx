import React from 'react';
import laptopImage from '../assets/laptop.png'; // Example image path (replace with your actual image)

const WhatIDo = () => {
  return (
    <div className="py-20" id="WhatIDo">
      <div className="container mx-auto px-4 md:mx-[120px] flex flex-col md:flex-row items-center md:space-x-16">
        {/* Left side: Image */}
        <div className="md:w-1/2">
          <img src={laptopImage} alt="Laptop showing project"/>
        </div>

        {/* Right side: Text */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <h2 className="text-green-500 font-semibold text-lg mb-2">What I do</h2>
          <h3 className="text-2xl font-semibold mb-4">Design to Development</h3>
          <p className="text-xl mb-8 leading-[40px] tracking-[0.02em] max-w-[75%] opacity-80">
            I design beautiful and powerful web applications for businesses. In today's digital world, 
            having a website that delivers seamless user experiences and keeps visitors engaged is 
            crucial for success. Using React, JavaScript, HTML, CSS, and Tailwind CSS, I ensure your 
            website not only looks stunning but also functions flawlessly across all devices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;