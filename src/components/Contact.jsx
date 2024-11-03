import React from 'react';

const Contact = () => {
  return (
    <div className="py-20" id="Contact">
      <div className="container mx-auto px-4 text-center"> {/* Removed text-center class */}
        <h3 className="text-2xl font-semibold mt-2">Want to Work?</h3>
        <p className="text-gray-900 dark:text-gray-300 mt-4 max-w-2xl mx-auto max-w-[40%] opacity-80"> {/* Removed text-center class */}
          If you need a modern, powerful website for your business or project, feel free to contact me directly via email.
          <br />
          You can email me at: 
          <a href="asjega11@gmail.com" className="text-green-500 hover:underline ml-1">
          asjega11@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;