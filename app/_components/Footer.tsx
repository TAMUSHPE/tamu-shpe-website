import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const socialLinks = [
    { path: 'https://www.facebook.com/tamushpe5/', icon: '/socials/facebook-icon.svg', label: 'Facebook' },
    { path: 'https://x.com/tamushpe?lang=en', icon: '/socials/x-icon.svg', label: 'X' },
    { path: 'https://www.instagram.com/tamushpe/?hl=en', icon: '/socials/Insta-icon.svg', label: 'Instagram' },
    { path: 'https://www.snapchat.com/add/tamushpe', icon: '/socials/snapchat-icon.svg', label: 'Snapchat' },
    {
      path: 'https://www.youtube.com/channel/UCebsLGRRglWj459ueGDTzug',
      icon: '/socials/youtube-icon.svg',
      label: 'Youtube',
    },
    { path: 'https://www.linkedin.com/company/tamushpe/', icon: '/socials/linkedin-icon.svg', label: 'LinkedIn' },
    { path: 'https://www.flickr.com/photos/143848472@N03/', icon: '/socials/flickr-icon.svg', label: 'Flickr' },
  ];

  return (
    <footer className="bg-[#191740] text-white py-8">
      {/* Large and Medium Screen Layout */}
      <div className="hidden sm:flex sm:flex-row sm:justify-between sm:items-start px-6">
        {/* Left Section */}
        <div className="mb-6 sm:w-1/3 text-sm font-roboto lg:text-left sm:text-center pr-10 pb-12 lg:pl-40">
          <p>
            <span className="font-bold text-blue-400">Email:</span>{' '}
            <a href="mailto:tamushpe@gmail.com" className="text-blue-400 hover:text-blue-300">
              tamushpe@gmail.com
            </a>
          </p>
          <p>
            <span className="font-bold text-blue-400">Office Hours:</span> Monday-Thursday |
          </p>
          <p>ZACH 450-P1 | 10 a.m. - 2 p.m.</p>
        </div>

        {/* Center Section */}
        <div className="mb-6 sm:w-1/3">
          <Link href="/">
            <Image
              src="/logos/SHPE_logo_horiz_TexasA&M.svg"
              alt="SHPE Logo"
              width={500}
              height={150}
              className="mx-auto"
            />
          </Link>
          {/* Social Links */}
          <div className="border-t border-[#468DC6] mt-6 pt-4">
            <ul className="flex justify-center gap-6 flex-wrap">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} target="_blank" rel="noopener noreferrer" className="flex shrink-0">
                    <Image
                      src={link.icon}
                      alt={`${link.label} Icon`}
                      width={30}
                      height={30}
                      className="hover:opacity-80 transition-opacity duration-200"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="mb-6 sm:w-1/3 text-sm font-roboto lg:text-right sm:text-center lg:pl-12 lg:pb-12 lg:pr-40">
          <p>
            <span className="font-bold text-blue-400">Mailing Address:</span>
          </p>
          <p>TAMU SHPE</p>
          <p>Zachry Engineering Education Complex</p>
          <p>Suite 450-P1</p>
          <p>3127 Texas A&M University</p>
          <p>College Station, Texas 77843-3127</p>
        </div>
      </div>

      {/* Small Screen Layout */}
      <div className="flex flex-col items-center sm:hidden px-6">
        {/* Logo */}
        <Link href="/">
          <Image src="/SHPE_logo_horiz_TexasA&M.svg" alt="SHPE Logo" width={300} height={90} className="mx-auto mb-4" />
        </Link>

        {/* Social Links */}
        <ul className="flex justify-center gap-6 mb-6 flex-wrap">
          {socialLinks.map((link, index) => (
            <li key={index} className="flex shrink-0">
              <Link href={link.path} target="_blank" rel="noopener noreferrer">
                <Image
                  src={link.icon}
                  alt={`${link.label} Icon`}
                  width={30}
                  height={30}
                  className="hover:opacity-80 transition-opacity duration-200"
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row justify-between w-full text-sm font-roboto text-center sm:text-left">
          {/* Email Section */}
          <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
            <p>
              <span className="font-bold text-blue-400">Email:</span>{' '}
              <a href="mailto:tamushpe@gmail.com" className="text-blue-400 hover:text-blue-300">
                tamushpe@gmail.com
              </a>
            </p>
            <p>Monday - Thursday | 10 a.m. - 2 p.m.</p>
            <p>ZACH 450-P1</p>
          </div>

          {/* Mailing Address Section */}
          <div className="w-full sm:w-1/2">
            <p>
              <span className="font-bold text-blue-400">Mailing Address:</span>
            </p>
            <p>TAMU SHPE</p>
            <p>Zachry Engineering Education Complex</p>
            <p>Suite 450-P1</p>
            <p>3127 Texas A&M University</p>
            <p>College Station, Texas 77843</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
