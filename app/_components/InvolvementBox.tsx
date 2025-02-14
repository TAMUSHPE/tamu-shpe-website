
import React from 'react';

const Box = () => {
  return (
    <div className="w-full h-full bg-[#3C0000] flex flex-col justify-center items-center p-8">
      {/* Title */}
      <p className="text-[#FFFFFF] text-3xl font-bold mb-4">
        Leading Aggies in STEM
      </p>
      
      {/* Description */}
      <p className="text-[#FFFFFF] text-sm text-left mb-4">
        At the largest SHPE chapter in the nation, we are committed to bridging 
        the gap between Hispanics and STEM by enriching our community with 
        resources to help them succeed.
      </p>
      
      {/* Button */}
      <button className="bg-[#732F2F] text-[#FFFFFF] px-6 py-2 rounded-md font-roboto hover:bg-[#7A0000]">
        Join Us!
      </button>
    </div>
  );
};

export default Box;