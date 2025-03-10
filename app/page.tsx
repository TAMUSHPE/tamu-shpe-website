import Image from 'next/image';
import Link from 'next/link';
import SponsorCarousel from './_components/SponsorCarousel';
import FlickrCarousel from './_components/FlickrCarousel';
import Pillars from './_components/Pillars';
import Calendar from './_components/Calendar';

export default function Home() {
  return (
    <div className="h-full overflow-auto">
      <main className="container mx-auto px-4 md:px-10 grid grid-cols-1 gap-8">
        <div className="grid items-center place-items-center grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          {/* SHPE Logo */}
          <div className="hidden lg:flex w-fit bg-[#F6F6F6] py-5 px-8 lg:h-72 lg:col-span-3">
            <Image src="/vert_logo.svg" alt="tamuSHPE Logo" width={0} height={0} className="w-full h-auto" />
          </div>

          {/* Flickr Carousel */}
          <FlickrCarousel />
          {/* Involvement Card */}
          <div className="h-72 w-full bg-purple-400 lg:col-span-3"></div>
        </div>

        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
          {/* Upcoming Events */}
          <div className="h-52 bg-orange-400"></div>
          {/* Pillars Card */}
          <Pillars />
        </div>

        {/* Sponsors */}
        <div className="w-full">
          <div className="divide-y divide-gray-400 space-y-2.5 ">
            <div className="w-full flex flex-col sm:flex-row justify-between items-center">
              <h2 className="font-medium relative sm:left-5 text-3xl py-2 px-4">Our Sponsors</h2>
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

        <div className="grid grid-cols-8 gap-5 lg:gap-10">
          {/* Points */}
          <div className="h-[70vh] w-full col-span-6 bg-red-400"></div>
          {/* Mercado*/}
          <div className="h-96 w-full col-span-2 bg-yellow-400"></div>
        </div>

        {/* Calendar */}
        <Calendar/>
      </main>
    </div>
  );
}
