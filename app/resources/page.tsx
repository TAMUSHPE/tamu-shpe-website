
import Link from 'next/link';
import Image from 'next/image';

interface ResourceSectionProps {
  title: string;
  description: string;
  color: string;
  image: string;
  link_map: Record<string, string>;
  place_end?: boolean;
}

function ResourceSection({
  title,
  description,
  color,
  image,
  link_map,
  place_end = false,
}: ResourceSectionProps) {
  return (
    <div
      className={`flex w-full max-w-6xl mx-auto items-center flex-col ${
        place_end ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      {/* Resource Image */}
      <div
        className={`relative z-10 w-full h-[240px] md:h-[300px] md:w-[36%] shrink-0 ${
          place_end ? 'md:-ml-[8%]' : 'md:-mr-[8%]'
        }`}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 36vw"
          className="object-cover"
        />
      </div>

      {/* Resource Information Card */}
      <div
        className={`flex flex-1 flex-col justify-between gap-6
          w-full min-h-[250px] md:min-h-[270px]
          border-4 bg-white p-6 md:p-8
          ${
            place_end
              ? 'md:pr-[12%] md:items-end md:text-right'
              : 'md:pl-[12%] md:items-start md:text-left'
          }`}
        style={{ borderColor: color }}
      >
        <div className="flex flex-col gap-3">
          <h2
            className="text-2xl md:text-3xl font-bold"
            style={{ color }}
          >
            {title}
          </h2>

          <p className="text-[#363636] text-base md:text-lg">
            {description}
          </p>
        </div>

        {/* Resource Buttons */}
        <div
          className={`flex flex-wrap gap-2 w-full ${
            place_end
              ? 'md:justify-end'
              : 'md:justify-start'
          }`}
        >
          {Object.entries(link_map).map(([label, url]) => (
            <Link
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-center px-4 py-2
                font-semibold rounded-md text-sm
                md:text-base transition-opacity
                hover:opacity-80"
              style={{ backgroundColor: color }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Resources() {
  return (
    <div className="h-full flex flex-col gap-8 bg-[#FFFFF5]">

      {/* ORIGINAL RESOURCES HERO - KEPT */}
      <div className="relative w-full aspect-[21/10] -mt-4 md:-mt-10 rounded-b-3xl overflow-hidden">
        <Image
          src="/resources/resourcesPhotoHeader.png"
          alt="Resources"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-4 left-0 p-6 md:p-10">
          <h1 className="text-6xl md:text-[100px] font-inter text-[#72ABBF] leading-tight font-bold">
            Resources
          </h1>

          <p className="text-base md:text-[52px] font-inter font-bold text-white mt-2">
            A toolkit for success
          </p>
        </div>
      </div>

      {/* ORIGINAL BLUE ACCENT - KEPT */}
      <div className="w-full h-16 bg-[#72ABBF] -mt-14 rounded-b-3xl overflow-hidden" />

      {/* REDESIGNED RESOURCE SECTIONS */}
      <div className="px-4 md:px-10 py-12 flex flex-col gap-12 md:gap-16">

        {/* Tech Affairs */}
        <ResourceSection
          title="Tech Affairs Website"
          description="The Tech Affairs Website provides a user guide for both creating a Personal Website as well as learning how to code in Python."
          color="#500000"
          image="/resources/tech_affairs.png"
          link_map={{
            'Visit Website': 'https://tech.tamushpe.org/',
          }}
        />

        {/* Professional Resources */}
        <ResourceSection
          title="Professional Resources"
          description="Whether it be jobs on campus or summer internships, opportunities are readily available to those seeking the next step in their career."
          color="#191740"
          image="/resources/jobs.png"
          link_map={{
            'Technical Opportunities':
              'https://careercenter.tamu.edu/',
            'JobsForAggies':
              'https://employees.tamu.edu/jobsforaggies/',
            'Undergraduate Research':
              'https://launch.tamu.edu/undergraduate-research',
          }}
          place_end
        />

        {/* Mental Health */}
        <ResourceSection
          title="Mental Health"
          description="Living in a virtual world can take a toll on one's mental health. In SHPE, we believe that mental health is an important aspect and should be addressed with utmost importance. Below are some resources that you may find beneficial. TAMU Helpline: 979-845-2700."
          color="#500000"
          image="/resources/mental_health.png"
          link_map={{
            'Self Help Resources':
              'https://uhs.tamu.edu/mental-health/index.html',
            'TAMU CAPS':
              'https://tamuportal.pointnclick.com/',
          }}
        />

        {/* Academic Resources */}
        <ResourceSection
          title="Academic Resources"
          description="Explore academic support, research opportunities, and resources designed to help students succeed in their coursework and professional development."
          color="#191740"
          image="/resources/jobs.png"
          link_map={{
            'Academic Success Center':
              'https://asc.tamu.edu/',
            'University Libraries':
              'https://library.tamu.edu/',
            'Undergraduate Research':
              'https://launch.tamu.edu/undergraduate-research',
          }}
          place_end
        />

      </div>
    </div>
  );
}
