import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/banner.jpg')" }}>
      {/* Optional overlay for better text contrast */}
      {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
      <div className="flex items-center justify-center h-full">
        <button className="relative z-10 bg-white text-black font-bold py-2 px-4 rounded-md hover:bg-gray-100 text-sm md:text-base lg:text-lg xl:text-xl transition-all duration-300 ease-in-out">
          Let’s Explore
        </button>
      </div>
    </div>
  );
};

export default Banner;
