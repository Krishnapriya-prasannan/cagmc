import React from 'react';

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/pic1.png)' }} // Use the public path
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Welcome to CA Goyal Mangal & Co.</h1>
        <p className="text-lg font-medium mb-6">Transforming Knowledge into Values</p>
        <button className="bg-white bg-opacity-0 text-white font-semibold py-2 px-6 rounded-lg shadow-lg border-2 border-white hover:bg-opacity-50 hover:text-black transition-all duration-300 flex items-center">
          Contact Us
          <span className="ml-2 transform transition-all duration-300 group-hover:ml-4">→</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
