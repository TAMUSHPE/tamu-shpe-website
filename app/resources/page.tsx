'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface ResourceSectionProps {
  title: string;
  description: string;
  color: string;
  image: string;
  link_map: Record<string, string>;
  place_end?: boolean;
}

function ResourceSection({ title, description, color, image, link_map, place_end }: ResourceSectionProps) {
  const router = useRouter();

  return (
    <div
      className={`flex ${place_end ? 'flex-col-reverse' : 'flex-col'} w-full md:min-h-[50vh] items-center md:flex-row`}
    >
      {!place_end && (
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="w-full h-[300px] md:min-h-[300px] md:h-full md:w-1/2 object-cover"
        />
      )}
      <div
        className={`flex flex-col border-[12px] border-t-0 ${
          place_end ? 'md:border-r-0' : 'md:border-l-0'
        } md:border-t-[12px] w-full h-5/6 p-8 md:min-h-fit min-w-96 justify-between items-start gap-4`}
        style={{ borderColor: color }}
      >
        <div className="flex flex-col gap-2">
          <h2 className={`text-3xl ${place_end && 'text-end'}`} style={{ color: color }}>
            {' '}
            {title}{' '}
          </h2>
          <p className={`text-[#363636] text-lg ${place_end && 'text-end'}`}>{description}</p>
        </div>
        <div className={`${place_end && 'justify-end'} flex flex-row w-full flex-wrap gap-2`}>
          {Object.keys(link_map).map((key) => (
            <button
              key={key}
              onClick={() => router.push(link_map[key])}
              className="text-white px-5 py-2 font-semibold rounded-md text-lg max-w-72"
              style={{ backgroundColor: color }}
            >
              {key}
            </button>
          ))}
        </div>
      </div>
      {place_end && (
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="w-full h-[300px] md:min-h-[300px] md:h-full object-cover md:w-1/2"
        />
      )}
    </div>
  );
}

export default function Resources() {
  return (
    <div className="px-4 md:px-10 h-full flex flex-col gap-10">
      <ResourceSection
        title="Tech Affairs Website"
        description="The Tech Affairs Website provides a user guide for both creating a Personal Website as well as learning how to code in Python."
        color="#500000"
        image="/resources/tech_affairs.png"
        link_map={{
          'Tech Affairs Website': 'https://tech.tamushpe.org/',
        }}
      />
      <ResourceSection
        title="Job Opportunities"
        description="Whether it be jobs on campus or a summer internships, opportunities are readily available to those seeking the next step in their career."
        image="/resources/jobs.png"
        color="#D33A02"
        link_map={{
          'Technical Opportunities': 'https://careercenter.tamu.edu/',
          JobsForAggies: 'https://employees.tamu.edu/jobsforaggies/',
          'Undergraduate Research': 'https://launch.tamu.edu/undergraduate-research',
        }}
        place_end
      />
      <ResourceSection
        title="Mental Health"
        description="Living in a virtual world can take a toll on one's mental health.
           In SHPE, we believe that mental health is an important aspect and should be addressed with utmost importance.
           TAMU Helpline: 979-845-2700 --- About the Helpline"
        color="#60a5fa"
        image="/resources/mental_health.png"
        link_map={{
          'Self Help Resources': 'https://uhs.tamu.edu/mental-health/index.html',
          'Counseling Appointments': 'https://tamuportal.pointnclick.com/',
        }}
      />
    </div>
  );
}
