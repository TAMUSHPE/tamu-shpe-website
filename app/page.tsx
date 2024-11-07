import Image from 'next/image';

export default function Home() {
  return (
    <div className="h-full overflow-auto">
      <main className="pb-5 container pt-5 mx-auto px-4 md:px-10 grid grid-cols-1 gap-8">
        <div className="grid items-center place-items-center grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          {/* SHPE Logo */}
          <div className="hidden lg:flex w-fit bg-[#F6F6F6] py-5 px-8 lg:h-72 lg:col-span-3">
            <Image src="/vert_logo.svg" alt="tamuSHPE Logo" width={0} height={0} className="w-full h-auto" />
          </div>
          {/* Flickr Carousel */}
          <div className="h-64 w-full bg-blue-400 lg:col-span-6"></div>
          {/* Involvement Card */}
          <div className="h-72 w-full bg-purple-400 lg:col-span-3"></div>
        </div>

        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
          {/* Upcoming Events */}
          <div className="h-52 bg-orange-400"></div>
          {/* Pillars Card */}
          <div className="h-48 bg-teal-200"></div>
        </div>

        <div className="h-32 bg-green-500 w-full"></div>

        <div className="grid grid-cols-8 gap-5 lg:gap-10">
          {/* Calendar */}
          <div className="h-[70vh] w-full col-span-6 bg-red-400"></div>
          {/* Mercado*/}
          <div className="h-96 w-full col-span-2 bg-yellow-400"></div>
        </div>

        <div className="h-[80vh] w-full bg-[#500000]"></div>
      </main>
    </div>
  );
}
