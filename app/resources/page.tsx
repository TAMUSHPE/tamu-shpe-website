import Link from 'next/link';
import Image from 'next/image';

interface ResourceSectionProps {
  title: string;
  description: React.ReactNode;
  color: string;
  image: string;
  link_map: Record<string, string>;
  place_end?: boolean;
}

function ResourceSection({ title, description, color, image, link_map, place_end }: ResourceSectionProps) {
  return (
    <div
      className={`flex ${place_end ? 'flex-col-reverse' : 'flex-col'} w-full md:min-h-[50vh] items-center md:flex-row md:px-32`}
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
        } md:border-t-[12px] w-full h-5/6 p-8 md:min-h-[400px] sm:min-w-96 justify-between items-start gap-4`}
        style={{ borderColor: color }}
      >
        <div className="flex flex-col gap-2">
          <h2 className={`text-2xl sm:text-3xl font-semibold ${place_end && 'text-end'}`} style={{ color: color }}>
            {title}
          </h2>
          <p className={`text-[#363636] text-lg sm:text-xl whitespace-pre-line ${place_end && 'text-end'}`}>{description}</p>
        </div>
        <div className={`${place_end && 'sm:justify-end'} justify-center sm:justify-start flex flex-row w-full flex-wrap gap-2`}>
          {Object.keys(link_map).map((key) => (
            <Link
              href={link_map[key]}
              key={key}
              className="text-white text-center px-5 py-2 font-semibold rounded-md text-md sm:text-lg max-w-72"
              style={{ backgroundColor: color }}
            >
              {key}
            </Link>
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
          priority
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
          'Visit Website': 'https://tech.tamushpe.org/',
        }}
      />
      <ResourceSection
        title="Professional Resources"
        description="Whether it be jobs on campus or a summer internships, opportunities are readily available to those seeking the next step in their career."
        image="/resources/professionalResources.png"
        color="#191740"
        link_map={{
          'Technical Opportunities': 'https://careercenter.tamu.edu/',
          JobsForAggies: 'https://employees.tamu.edu/jobsforaggies/',
          'Undergraduate Research': 'https://launch.tamu.edu/undergraduate-research',
        }}
        place_end
      />
      <ResourceSection
        title="Mental Health"
        description={
          <>
            Living in a virtual world can take a toll on one's mental health. In SHPE, we believe that mental health is an important aspect and should be addressed with utmost importance.
            <br />
            <br />
            TAMU Helpline: 979-845-2700 ---{' '}
            <Link href="https://mentalhealth.tamu.edu/crisis-resources.html" className="underline">
              About the Helpline
            </Link>
          </>
        }
        color="#3C0500"
        image="/resources/mentalHealth.png"
        link_map={{
          'Self Help Resources': 'https://uhs.tamu.edu/mental-health/index.html',
          'Counseling Appointments': 'https://tamuportal.pointnclick.com/',
        }}
      />
    </div>
  );
}
