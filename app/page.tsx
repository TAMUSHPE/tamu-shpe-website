import Image from 'next/image';
import Link from 'next/link';
import SponsorCarousel from './_components/SponsorCarousel';
import FlickrCarousel from './_components/FlickrCarousel';
import Pillars from './_components/Pillars';
import Calendar from './_components/Calendar';
import InvolvementBox from './_components/InvolvementBox';
import Mercado from './_components/Mercado';
import WeeklyEvents from './_components/WeeklyEvents';
import PointsTable from './_components/PointsTable';

export default function Home() {
  return (
    <div className="h-full">
      <main className="container mx-auto px-4 md:px-10 grid grid-cols-1 gap-8">
        <div className="grid items-center place-items-center grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          {/* SHPE Logo */}
          <div className="hidden lg:flex w-full bg-[#F6F6F6] py-5 px-8 h-full lg:col-span-3 xl:col-span-2 items-center justify-center">
            <Image src="/logos/vert_logo.svg" alt="tamuSHPE Logo" width={0} height={0} className="h-full w-auto" />
          </div>

          <FlickrCarousel />

          <InvolvementBox />
        </div>

        <div className="relative flex flex-col md:flex-row items-center gap-5 lg:gap-10">
          <WeeklyEvents />

          <Pillars />
        </div>

        {/* Sponsors */}
        <div className="w-full">
          <div className="divide-y divide-gray-400 space-y-2.5 ">
            <div className="w-full flex flex-col sm:flex-row justify-between items-center">
              <h2 className="font-medium relative sm:left-5 text-3xl py-2 pr-4">Our Sponsors</h2>
              <Link
                href="/sponsor"
                className="bg-orange-500 h-fit relative sm:right-5 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded w-fit ml-auto"
              >
                Become a Sponsor
              </Link>
            </div>
            <SponsorCarousel />
          </div>
        </div>

        <div className="grid grid-cols-8 gap-5 lg:gap-10 place-items-center">
          <PointsTable />
          <Mercado />
        </div>

        <Calendar />
      </main>
    </div>
  );
}
