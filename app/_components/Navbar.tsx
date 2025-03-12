'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const routeMap = [
    { path: '/about', label: 'About Us' },
    { path: '/involvement', label: 'Get Involved' },
    { path: '/resources', label: 'Resources' },
    { path: '/sponsor', label: 'SponsorSHPE' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white flex items-center justify-between w-full px-4 h-16 shadow-md">
      {/* logo */}
      <div className="flex items-center pr-8 shrink-0 h-3/5">
        <Link href="/" className='h-full'>
          <Image src="/horiz_logo.svg" alt="tamuSHPE Logo" width={1440} height={1080} className="h-full w-auto" />
        </Link>
      </div>

      {/* normal tabs */}
      <div className="flex items-center justify-between w-full h-full overflow-hidden">
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } sm:flex flex-1 sm:justify-start gap-8 absolute sm:static top-14 right-2 bg-white sm:w-auto sm:bg-transparent p-4 sm:p-0`}
        >
          {routeMap.map((route, index) => {
            return (
              <li key={index} className="relative group min-w-[100px] text-center">
                <Link
                  href={route.path}
                  className={`${
                    pathname === route.path ? 'font-bold' : ''
                  } transition-all duration-200 flex justify-center`}
                >
                  {route.label}
                </Link>
                <span className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 h-[2px] bg-[#500000] w-0 group-hover:w-full transition-all duration-300"></span>
              </li>
            );
          })}
        </ul>
      </div>

      {/* dropdown tabs */}
      <div className="flex items-center sm:hidden">
        <button className="text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✕' : '☰'}
        </button>
        {isOpen && (
          <div className="absolute top-10 right-2 bg-white shadow-lg rounded-md p-4 z-50">
            <ul className="flex flex-col gap-4">
              {routeMap.map((route, index) => {
                return (
                  <li key={index} className="relative group min-w-[110px] text-center">
                    <Link
                      href={route.path}
                      className={`${
                        pathname === route.path ? 'font-bold' : ''
                      } transition-all duration-200 flex justify-center`}
                    >
                      {route.label}
                    </Link>
                    <span className="absolute bottom-[-4px] left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-[#500000] group-hover:w-full transition-all duration-300"></span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
