import OfficerCards from './_components/OfficerCards';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="h-full overflow-auto">
      <main className="container mx-auto px-4 md:px-10 grid grid-cols-1 gap-8">
        {/* Chapter Focus */}
        <div className="grid items-center place-items-center gap-4 md:gap-0 md:grid-cols-12">
          <div
            className="
          flex flex-col h-fit w-full p-5 gap-3 border-8 border-[#732F2F] md:col-span-7"
          >
            <section>
              <h2 className="text-3xl pb-2 text-[#500000]">Our Mission</h2>
              <p className="text-lg">
                Enhance opportunities for personal and professional growth through social and academic responsibilities
                while holding true to the Aggie spirit.
              </p>
            </section>
            <section>
              <h2 className="text-3xl pb-2 text-[#500000]">Our Vision</h2>
              <p className="text-lg">Lead and Prepare all Aggies in their Profession.</p>
            </section>
          </div>
          <div className="relative h-72 w-full items-start md:col-span-4 md:col-start-9">
            <Image src="/about/chapter.jpg" alt="Chapter Focus" className="h-full w-full object-cover" fill priority/>
          </div>
        </div>

        {/* National Focus */}
        <div className="grid items-center place-items-center gap-4 md:gap-0 md:grid-cols-12">
          <div className="relative h-72 w-full items-start md:col-span-4">
            <Image src="/about/national.jpg" alt="Chapter Focus" className="h-full w-full object-cover" fill priority/>
          </div>
          <div className="flex flex-col h-fit w-full p-5 gap-3 border-8 border-[#D33A02] md:col-span-7 md:col-start-6">
            <section>
              <h2 className="text-3xl pb-2 text-[#FD652F]">National Mission</h2>
              <p className="text-lg">
                SHPE changes lives by empowering the Hispanic community to realize its fullest potential and to impact
                the world through STEM awareness, access, support, and development.
              </p>
            </section>
            <section>
              <h2 className="text-3xl pb-2 text-[#FD652F]">National Vision</h2>
              <p className="text-lg">
                SHPE envisions a world where Hispanics are highly valued and influential as leading innovators,
                scientists, mathematicians, and engineers.
              </p>
            </section>
          </div>
        </div>

        {/* History */}
        <div className="flex flex-col gap-3 h-fit p-7 bg-[#A1D4FD] w-full">
          <h2 className="text-3xl text-[#FD652F]">History</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <p className="text-lg">
              The Society of Hispanic Professional Engineers (SHPE) was founded in Los Angeles, California, in 1974 by a
              group of engineers employed by the city of Los Angeles. Their objective was to form a national
              organization of professional engineers to serve as role models in the Hispanic community.
            </p>
            <p className="text-lg">
              The Texas A&M University Chapter of SHPE was founded in 1994 to create an organization where Hispanic
              engineers could come together. Over the years, we have nurtured a diverse group of students, united in our
              heritage and our studies. Members become part of the #SHPEfamilia while participating in activities that
              help them to grow personally, and professionally.
            </p>
          </div>
          <Link
            href="/pdf/TAMU SHPE Constitution 25-26.pdf"
            target="_blank"
            className="text-lg rounded-xl place-self-end bg-[#732F2F] text-white px-8 py-3"
          >
            Bylaws & Constitution
          </Link>
        </div>

        <OfficerCards />
      </main>
    </div>
  );
}
