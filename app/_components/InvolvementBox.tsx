import React from 'react';
import Link from 'next/link';

export default function InvolvementBox() {
  return (
    <div className="w-full h-fit lg:col-span-3 bg-[#3C0000] flex flex-col justify-center items-center p-8">
      {/* Title */}
      <p className="text-[#FFFFFF] text-4xl lg:text-3xl md:text:2xl font-bold mb-4">Leading Aggies in STEM</p>

      {/* Description */}
      <p className="text-[#FFFFFF] lg:text-sm text-left mb-4 overflow-hidden text-ellipsis">
        At the largest SHPE chapter in the nation, we are committed to bridging the gap between Hispanics and STEM by
        enriching our community with resources to help them succeed.
      </p>

      {/* Button */}
      <Link
        href="/involvement"
        className="bg-[#732F2F] text-[#FFFFFF] px-6 py-2 rounded-md hover:bg-[#7A0000]"
      >
        Join Us
      </Link>
    </div>
  );
};