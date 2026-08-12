import Link from 'next/link';

export default function Sponsor() {
  return (
    <div className="h-full overflow-auto">
      <main>
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Title Card */}
          <div className="bg-[url(/sponsor_cover.jpg)] bg-center bg-cover h-[45vh] lg:w-[55%] sm:w-4/5 w-full ease-in-out transition">
            <div className="w-full h-full content-center bg-[#500000] bg-opacity-65">
              <h1 className="text-white text-6xl text-center w-5/6 m-auto">Interested in Sponsoring TAMU SHPE?</h1>
            </div>
          </div>
          {/* Description Card */}
          <div className="border-4 border-[#3C0000] h-fit w-4/5 lg:w-2/5 mt-14 self-end content-center">
            <p className="text-[#732F2F] text-center text-3xl p-7">
              We&apos;re on the lookout for dynamic, innovative companies to join our #SHPEfamilia! With engaging
              socials and insightful meetings, there are countless opportunities for your company to connect and grow
              with us. Let&apos;s build a brighter future together!
            </p>
          </div>
        </div>

        <div className="flex justify-around items-center flex-col lg:flex-row my-10 gap-19">
          {/* Benefits Card */}
          <div className="border-8 border-[#3C0000] text-white w-[90%] lg:w-[40vw] px-9 py-7 flex flex-col gap-4">
            <h1 className="text-[#732F2F] text-center text-4xl font-semibold">Join Our Mission!</h1>
            <p className="text-[#732F2F] text-center text-xl font-medium ">
              We're on the lookout for dynamic, innovative companies to join our #SHPEfamilia!
            </p>
            <p className="text-[#732F2F] text-center text-xl font-medium ">
              Through engaging socials and insightful meetings, there are countless opportunities for your company to connect and grow with us.
            </p>
            <p className="text-[#732F2F] text-center text-xl font-medium ">
              Let's build a brighter future together!
            </p>
          </div>
        </div>

        {/* How-To Card */}
        <div className="bg-[#D3E5F4] w-[90%] lg:w-4/5 mx-auto py-3 px-5">
          <h2 className="text-xl font-semibold text-[#1870B8]">How to become a Sponsor?</h2>
          <p className="font-medium">
            Contact our Vice President, Sebastian Luna, at tamushpe@gmail.com. Event and meeting reservations are
            prioritized by sponsorship level, then on a firstcome, first-served basis, and financial contribution
            amount. Reservations will be made only after payment is received and confirmed.
          </p>
        </div>
      </main>
    </div>
  );
}
