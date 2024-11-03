import React from 'react';

// Import the images for the tech stack icons
import jsIcon from '../assets/javascript_img.png';
import reactIcon from '../assets/react_img.png';
import tailwindIcon from '../assets/tailwindcss.png';
import htmlIcon from '../assets/html.png';
import cssIcon from '../assets/css.png';
import Git from '../assets/git.png';

const TechStack = () => {
  return (
    <div className="py-10">
      {/* Use the same margin as Hero */}
      <div className="ml-10 md:mx-[130px] flex items-center space-x-4">
        <h3 className="text-lg font-semibold">Tech Stack |</h3>
        
        {/* Icons */}
        <img src={jsIcon} alt="JavaScript" className="h-8 w-8" />
        <img src={reactIcon} alt="React" className="h-8 w-8" />
        <img src={tailwindIcon} alt="Tailwind CSS" className="h-8 w-8" />
        <img src={htmlIcon} alt="HTML" className="h-8 w-8" />
        <img src={cssIcon} alt="CSS" className="h-8 w-8" />
        <img src={Git} alt="GIT" className="h-8 w-8" />
      </div>
    </div>
  );
};

export default TechStack;