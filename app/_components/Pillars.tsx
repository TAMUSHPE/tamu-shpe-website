import Image from 'next/image';

const pillars = [
  {
    src: '/academic_pillar.svg',
    title: 'Academic Development',
    description:
      'Providing resources, workshops, and mentorship programs to support academic excellence, promote effective study habits, and encourage a passion for lifelong learning.',
  },
  {
    src: '/chapter_development.svg',
    title: 'Chapter Development',
    description:
      'Building a sense of community, improving internal operations, increasing member engagement, and ensuring the sustainability of the organization through strategic planning and effective communication.',
  },
  {
    src: '/leadership_development.svg',
    title: 'Leadership Development',
    description:
      'Offering training sessions, leadership roles, and opportunities for personal growth to empower students to become effective leaders within the organization and in their future careers.',
  },
  {
    src: '/professional_development.svg',
    title: 'Professional Development',
    description:
      'Equipping members with the skills, resources, and opportunities needed to excel in their careers through workshops, networking events, leadership training, and mentorship programs, fostering growth and success in professional environments.',
  },
  {
    src: '/service_pillar.svg',
    title: 'Service and Outreach',
    description:
      'Inspiring members to give back to their communities by engaging in volunteer opportunities, outreach initiatives, and service projects that promote STEM awareness, empower future generations, and drive positive social impact.',
  },
];

export default function Pillars() {
  return (
    <div className="bg-[#191740] text-[#E8F1F8] w-full flex flex-col h-72">
      <div>
        <h1 className="font-bold text-2xl ml-5 mt-3 mb-1 flex-row-reverse">The Five Pillars</h1>
      </div>
      <div className="space-y-4 flex flex-col w-full ml-2 mb-4 p-2 pt-4 overflow-y-auto scrollbar-hide max-w">
        {pillars.map((pillar, idx) => (
          <div key={idx} className="bg-[#468DC6] w-[97%] rounded p-2 flex flex-row items-center space-x-4">
            <Image src={pillar.src} width={60} height={60} alt="Pillar Img" style={{ height: 60, width: 60 }} />
            <div>
              <h1 className="font-bold text-lg">{pillar.title}</h1>
              <p className="text-sm">{pillar.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
