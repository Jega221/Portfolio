import React from 'react';
import Image from '../assets/image.png';
import X from '../assets/x.png';
import G from '../assets/g.png';
import TechStack from './TechStack';  // Import the TechStack component

function Hero() {
  return (
    <section className="py-20 " id="home">
      {/* Container with equal margins of 70px on both sides */}
      <div className="container mx-auto px-4 md:mx-[120px] flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-5xl font-semibold mb-6 leading-[70px]">
            Hi, I'm Jega, Web Designer and React Developer
          </h2>
          <p className="text-xl mb-8 leading-[40px] tracking-[0.02em] max-w-[85%] opacity-80">
            I design and build beautiful websites for businesses around the globe. If you need a modern powerful website, send me an email.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/Jega221" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
    
              <img src={G} alt="GitHub" className="w-8 h-8" />
            
            </a>
            <a href="https://x.com/jegabig" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
              <img src={X} alt="Twitter" className="w-7 h-7" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <img src={Image} alt="Jega" className="rounded-full w-full max-w-md mx-auto" />
        
        </div>
      </div>

      {/* Add TechStack component below with matching margins */}
      <TechStack />
    </section>
  );
}

export default Hero;