
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface OfficerCardProps {
  name: string;
  position: string;
  major: string;
  year: string;
  img: string;
  bio: string;
  quote: string;
  linkedin: string;
  linktree: string;
  email: string;
  location: string;
}

const faceStyle = {
  backfaceVisibility: 'hidden' as const,
  WebkitBackfaceVisibility: 'hidden' as const,
};

export default function OfficerCard({
  name,
  position,
  img,
  bio,
  quote,
  linkedin,
  linktree,
  email,
  location,
}: OfficerCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const longName = name.length > 19;
  const longPosition = position.length > 27;
  const longBio = bio.length > 270;

  return (
    <div
      className="relative w-full h-[405px] sm:h-[415px] rounded-[32px]"
      style={{ perspective: '1200px' }}
    >
      {/* 3D FLIP CONTAINER */}
      <div
        className="relative w-full h-full transition-transform duration-700 ease-in-out motion-reduce:transition-none"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped
            ? 'rotateY(-180deg)'
            : 'rotateY(0deg)',
        }}
      >
        {/* FRONT OF CARD */}
        <div
          className="absolute inset-0 bg-black rounded-[32px] p-[10px]"
          style={{
            ...faceStyle,
            pointerEvents: flipped ? 'none' : 'auto',
          }}
          aria-hidden={flipped}
        >
          {/* SILVER INNER BORDER */}
          <div className="w-full h-full border-[3px] border-[#D1D1D1] rounded-[30px] px-2 pt-3 pb-2 flex flex-col items-center text-white overflow-hidden">

            {/* PHOTO AND INFORMATION */}
            <button
              type="button"
              disabled={flipped}
              onClick={() => setFlipped(true)}
              aria-label={`Flip ${name}'s card to see biography`}
              className="w-full flex-1 min-h-0 flex flex-col items-center text-center cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-white rounded-lg"
            >
              {/* PHOTO FILLS AVAILABLE SPACE */}
              <div className="relative w-[85%] max-w-[190px] flex-1 min-h-0 rounded-[9px] overflow-hidden bg-[#292943]">
                {!imageFailed ? (
                  <Image
                    src={img}
                    alt={`${name} headshot`}
                    fill
                    sizes="(max-width: 640px) 190px, 190px"
                    className="object-cover object-top"
                    onError={() => setImageFailed(true)}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                    <span className="text-2xl font-bold">
                      SHPE
                    </span>
                    <span className="text-xs">
                      Officer Photo
                    </span>
                  </div>
                )}
              </div>

              {/* CENTERED OFFICER NAME */}
              <h3
                className={`w-full mt-3 px-1 shrink-0 font-bold text-white text-center leading-tight [overflow-wrap:anywhere] ${
                  longName
                    ? 'text-[15px] xl:text-[17px]'
                    : 'text-[18px] xl:text-[20px]'
                }`}
              >
                {name}
              </h3>

              {/* CENTERED OFFICER POSITION */}
              <p
                className={`w-full mt-1 px-1 shrink-0 text-white text-center leading-tight [overflow-wrap:anywhere] ${
                  longPosition
                    ? 'text-[12px] xl:text-[13px]'
                    : 'text-[14px] xl:text-[15px]'
                }`}
              >
                {position}
              </p>
            </button>

            {/* CENTERED SOCIAL LINKS */}
            <div className="flex items-center justify-center gap-3 mt-3 mb-1 shrink-0">

              {/* LINKEDIN */}
              <Link
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={flipped ? -1 : 0}
                aria-label={`${name}'s LinkedIn`}
                className="w-8 h-8 rounded-full bg-[#E5E5E5] text-black flex items-center justify-center text-xs font-extrabold hover:bg-[#72ABBF] transition-colors"
              >
                in
              </Link>

              {/* LINKTREE */}
              <Link
                href={linktree}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={flipped ? -1 : 0}
                aria-label={`${name}'s Linktree`}
                className="w-8 h-8 rounded-full bg-[#E5E5E5] text-black flex items-center justify-center hover:bg-[#72ABBF] transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M10.4 2h3.2v5.2l3.6-3.6 2.3 2.3-4.2 4.2h5.7v3.2h-5.7l4.2 4.2-2.3 2.3-3.6-3.6V22h-3.2v-5.8l-3.6 3.6-2.3-2.3 4.2-4.2H3v-3.2h5.7L4.5 5.9l2.3-2.3 3.6 3.6V2z" />
                </svg>
              </Link>

              {/* EMAIL */}
              <Link
                href={`mailto:${email}`}
                tabIndex={flipped ? -1 : 0}
                aria-label={`Email ${name}`}
                className="w-8 h-8 rounded-full bg-[#E5E5E5] text-black flex items-center justify-center hover:bg-[#72ABBF] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                  aria-hidden="true"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 7L2 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* BACK OF CARD */}
        <div
          className="absolute inset-0 bg-black rounded-[32px] p-[10px]"
          style={{
            ...faceStyle,
            transform: 'rotateY(180deg)',
            pointerEvents: flipped ? 'auto' : 'none',
          }}
          aria-hidden={!flipped}
        >
          <button
            type="button"
            disabled={!flipped}
            onClick={() => setFlipped(false)}
            aria-label={`Flip ${name}'s card back to photo`}
            className="w-full h-full border-[3px] border-[#D1D1D1] rounded-[30px] flex flex-col items-center justify-between text-white text-center px-3 py-4 gap-3 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            {/* LOCATION */}
            <div className="w-full flex flex-col items-center gap-1 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#A3A3A3"
                className="w-8 h-8"
                aria-hidden="true"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>

              <p className="text-white italic text-[11px]">
                {location}
              </p>
            </div>

            {/* BIOGRAPHY */}
            <div className="w-full flex-1 min-h-0 flex flex-col justify-center">
              <p
                className={`text-white font-bold text-center [overflow-wrap:anywhere] ${
                  longBio
                    ? 'text-[10px] xl:text-[11px] leading-[1.3]'
                    : 'text-[11px] xl:text-[12px] leading-[1.35]'
                }`}
              >
                {bio}
              </p>
            </div>

            {/* QUOTE */}
            <div className="w-full shrink-0">
              <p className="text-white font-light text-[10px] xl:text-[11px] leading-snug [overflow-wrap:anywhere]">
                {quote}
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
