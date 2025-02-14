'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const initialPillars = [
  { id: 1, src : '/academic_pillar.svg', title: 'Academic Development', description: 'Providing resources, workshops, and mentorship programs to support academic excellence, promote effective study habits, and encourage a passion for lifelong learning.' },
  { id: 2, src : '/chapter_development.svg', title: 'Chapter Development', description: 'Building a sense of community, improving internal operations, increasing member engagement, and ensuring the sustainability of the organization through strategic planning and effective communication.' },
  { id: 3,  src : '/leadership_development.svg', title: 'Leadership Development', description: 'Offering training sessions, leadership roles, and opportunities for personal growth to empower students to become effective leaders within the organization and in their future careers.' },
  { id: 4, src : '/professional_development.svg', title: 'Professional Development', description: 'Equipping members with the skills, resources, and opportunities needed to excel in their careers through workshops, networking events, leadership training, and mentorship programs, fostering growth and success in professional environments.' },
  { id: 5,  src : '/service_pillar.svg', title: 'Service and Outreach', description: 'Inspiring members to give back to their communities by engaging in volunteer opportunities, outreach initiatives, and service projects that promote STEM awareness, empower future generations, and drive positive social impact.' },
];

export default function Pillars() {
  const [pillars, setPillars] = useState(initialPillars);


  return (
    <div className="bg-[#191740] ml-10 text-[#E8F1F8] w-[40vw] flex flex-col max-h-[40vh]">
      <div>
        
        <h1 className="font-bold text-3xl ml-5 mt-3 mb-1">The Five Pillars</h1>
      </div>
      {/* Scrollable container with infinite scroll */}
      <div
        className="space-y-4 flex flex-col w-full ml-2 mb-4 p-2 pt-4 overflow-y-auto scrollbar-hide "
      >
        {pillars.map((pillar) => (
          <div key={pillar.id} className="bg-[#468DC6] w-[97%] rounded p-2 flex flex-row space-x-4">
            <Image src={pillar.src} width={60} height={60} alt='pillar'/>
            <div>
              <h1 className='font-bold text-xl'>{pillar.title}</h1>
              <p>{pillar.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
