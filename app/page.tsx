import Image from 'next/image';
import Link from 'next/link';
import SponsorCarousel from './_components/SponsorCarousel';
import FlickrCarousel from './_components/FlickrCarousel';
import Pillars from './_components/Pillars';
import Calendar from './_components/Calendar';
import InvolvementBox from './_components/InvolvementBox';

export default function Home() {
  return (
    <div className="h-full overflow-auto">
      <main className="container mx-auto px-4 grid grid-cols-1 gap-8">
        <div className="grid items-center place-items-center grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          {/* SHPE Logo */}
          <div className="hidden lg:flex w-full bg-[#F6F6F6] py-5 px-8 h-full lg:col-span-3 xl:col-span-2 items-center justify-center">
            <Image src="/vert_logo.svg" alt="tamuSHPE Logo" width={0} height={0} className="h-full w-auto" />
          </div>

          <FlickrCarousel />

          <InvolvementBox />
        </div>

        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
          {/* Upcoming Events */}
          <div className="h-52 bg-orange-400"></div>
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

        <div className="grid grid-cols-8 gap-5 lg:gap-10 place-items-center">
          {/* Points */}
          <div className="h-[70vh] w-full col-span-8 md:col-span-6 bg-red-400"></div>
          {/* Mercado*/}
          <div className="place-items-center gap-4 col-span-8 md:col-span-2 h-fit w-full rounded shadow-md shadow-gray-500/50 bg-stone-100 max-w-96">
            <Link href="/" className="text-center">
              <h2 className="text-2xl font-bold py-4">SHPE Mercado</h2>
              <div className="flex md:flex-col flex-row-reverse justify-around">
                <div className="md:w-full h-56 px-4 py-4 md:py-0 place-items-center">
                  <Image src="/gm.svg" alt="Mercado Image" width={0} height={0} className="h-full w-auto" />
                </div>
                <section className="size-auto flex flex-col text-left p-4">
                  <h2 className="text-lg font-bold">2021-2022 MemberSHPE Shirt</h2>
                  <h3 className="text-lg">$30</h3>
                </section>
              </div>
            </Link>
          </div>
        </div>

        <Calendar />
      </main>
    </div>
  );
}
