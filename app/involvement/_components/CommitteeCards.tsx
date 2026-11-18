
'use client';

import Image from 'next/image';
import { useState } from 'react';

interface Committee {
  name: string;
  img: string;
}

const committees: Committee[] = [
  { name: 'SHPEtinas', img: '/committees/shpetinas.jpg' },
  { name: 'MentorSHPE', img: '/committees/mentorshpe.jpg' },
  { name: 'Public Relations', img: '/committees/pr.jpg' },
  { name: 'Internal Affairs', img: '/committees/internal.jpg' },
  { name: 'Treasurer', img: '/committees/treasurer.jpg' },
  { name: 'External Affairs', img: '/committees/external.jpg' },
  { name: 'Technical Affairs', img: '/committees/tech.jpg' },
  { name: 'Scholastic', img: '/committees/scholastic.jpg' },
  { name: 'Secretary', img: '/committees/secretary.jpg' },
  { name: 'LeaderSHPE', img: '/committees/leadershpe.jpg' },
  {
    name: 'Professional Development',
    img: '/committees/profdev.jpg',
  },
  { name: 'Web Development', img: '/committees/webdev.jpg' },
  { name: 'App Development', img: '/committees/appdev.jpg' },
];

const faceStyle = {
  backfaceVisibility: 'hidden' as const,
  WebkitBackfaceVisibility: 'hidden' as const,
};

function CommitteeCard({
  committee,
}: {
  committee: Committee;
}) {
  const [flipped, setFlipped] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((prev) => !prev)}
      aria-label={`${committee.name}: ${
        flipped ? 'Show front' : 'Show description'
      }`}
      aria-pressed={flipped}
      className="relative block w-full aspect-[352/427] cursor-pointer rounded-[10%] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#72ABBF]"
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
          className="absolute inset-0 bg-[#191740] rounded-[10%] p-[4.5%]"
          style={faceStyle}
          aria-hidden={flipped}
        >
          {/* SILVER INNER BORDER */}
          <div className="w-full h-full border-[3px] sm:border-[4px] border-[#D1D1D1] rounded-[11%] flex flex-col items-center overflow-hidden">

            {/* COMMITTEE PHOTO */}
            <div className="relative w-[78%] aspect-[244/198] mt-[10%] shrink-0 overflow-hidden rounded-[12%] bg-[#303052]">
              {!imageFailed ? (
                <Image
                  src={committee.img}
                  alt={committee.name}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 300px"
                  className="object-cover object-center"
                  onError={() => setImageFailed(true)}
                />
              ) : (
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                  <span className="text-lg sm:text-2xl font-bold">
                    SHPE
                  </span>
                  <span className="text-[10px] sm:text-xs">
                    Texas A&M
                  </span>
                </div>
              )}
            </div>

            {/* COMMITTEE NAME */}
            <div className="w-[90%] flex-1 min-w-0 min-h-0 flex items-center justify-center overflow-hidden">
              <h3
                className="text-white text-center font-extrabold text-[clamp(0.7rem,1.4vw,1.5rem)] leading-tight max-w-full whitespace-normal [overflow-wrap:anywhere]"
              >
                {committee.name}
              </h3>
            </div>
          </div>
        </div>

        {/* BACK OF CARD */}
        <div
          className="absolute inset-0 bg-[#191740] rounded-[10%] p-[4.5%]"
          style={{
            ...faceStyle,
            transform: 'rotateY(180deg)',
          }}
          aria-hidden={!flipped}
        >
          {/* SILVER INNER BORDER */}
          <div className="w-full h-full border-[3px] sm:border-[4px] border-[#D1D1D1] rounded-[11%] flex flex-col items-center justify-center p-[8%] gap-3 overflow-hidden">

            {/* BACK HEADING */}
            <h3 className="text-white text-center font-extrabold text-[clamp(0.65rem,1.15vw,1.125rem)] leading-tight max-w-full whitespace-normal [overflow-wrap:anywhere]">
              {committee.name}
            </h3>

            {/* DIVIDER */}
            <div className="w-3/4 h-[2px] bg-[#D1D1D1] shrink-0" />

            {/* PLACEHOLDER DESCRIPTION */}
            <p className="text-white text-center text-[clamp(0.6rem,1vw,0.875rem)] leading-snug [overflow-wrap:anywhere]">
              This is placeholder text for the committee
              description. Learn more about our activities,
              projects, events, and opportunities!
            </p>

            {/* FLIP INSTRUCTION */}
            <p className="text-[#D1D1D1] text-[clamp(0.55rem,0.9vw,0.75rem)] text-center">
              Click to flip back
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function CommitteeCards() {
  return (
    <section className="w-full bg-white border-4 border-[#191740] rounded-xl p-4 sm:p-6">

      {/* SECTION HEADING */}
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-black text-[#191740] uppercase">
          Get to Know Our Committees!
        </h2>

        <p className="text-sm sm:text-base italic text-[#363636] mt-1">
          Click to flip a card and learn more!
        </p>
      </div>

      {/* COMMITTEE GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5">
        {committees.map((committee) => (
          <CommitteeCard
            key={committee.name}
            committee={committee}
          />
        ))}
      </div>
    </section>
  );
}
