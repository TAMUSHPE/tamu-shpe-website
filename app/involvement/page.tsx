import VideoBox from './_components/VideoBox';
import Link from 'next/link';
import Image from 'next/image';
import CommitteeCards from './_components/CommitteeCards';

export default function Involvement() {
  return (
    <div className="h-full">
      <main className="px-4 md:px-10 h-full flex flex-col gap-10">
        <VideoBox />
        {/* Steps for MemberSHPE */}
        <div className="bg-[#66AAE0] w-full p-5 flex flex-col">
          <h1 className="text-2xl text-left font-extrabold"> Steps for Membership </h1>
          <h2 className="text-l text-gray-600 text-left">
            {' '}
            To earn <b>points</b> you must be a registered national and chapter member!{' '}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            {/* National Registration Steps */}
            <div className="bg-[#BADEFF] w-full h-full md:col-span-1 text-left p-3 flex flex-col gap-2">
              <h1 className="text-md text-left font-extrabold"> SHPE National Registration </h1>
              <ul className="list-none list-inside text-left text-sm pl-8">
                <li className="-indent-4">
                  {' '}
                  1. Go to the{' '}
                  <span className="box-content bg-[#FD652F] rounded-sm text-white p-0.5 shadow-black shadow-sm hover:transition-shadow hover:shadow-md text-nowrap">
                    <Link href="https://www.shpeconnect.org/eweb/DynamicPage.aspx?WebCode=LoginRequired&expires=yes&Site=shpe">
                      SHPE Registration
                    </Link>
                  </span>{' '}
                  site.
                </li>
                <li className="-indent-4">
                  {' '}
                  2. Go to Join/Renew Membership, make sure to select Region 5 and Texas A&M University as your chapter.{' '}
                </li>
                <li className="-indent-4">
                  {' '}
                  3. Fill out your Account Information and make sure that the Educational Information given to you is
                  correct.{' '}
                </li>
                <li className="-indent-4"> 4. Agree to the Code of Ethics and add the Membership to your cart. </li>
                <li className="-indent-4"> 5. Pay for the membership. </li>
                <li className="-indent-4"> 6.<b>Screenshot</b> payment confirmation.</li>
                <li className="-indent-4 font-extrabold">National membership must be renewed annually!</li>
              </ul>
              
            </div>
            <div className="flex flex-col gap-4">
              {/* Chapter Registration Steps */}
              <div className="bg-[#BADEFF] w-full max-h-min md:col-span-1 text-left p-3 gap-2">
                <h1 className="text-md text-left font-extrabold"> TAMU Chapter Registration </h1>
                <ul className="list-none list-inside text-left text-sm pl-8">
                  <li className="-indent-4">
                    {' '}
                    1. Pay $20 to cover your #TAMUSHPE{' '}
                    <span className="box-content bg-[#FD652F] rounded-sm text-white p-0.5 shadow-black shadow-sm hover:transition-shadow hover:shadow-md text-nowrap">
                      <Link href="https://tamu.estore.flywire.com/products/2024-2025-membershpe-shirt-247722">
                        T-shirt
                      </Link>
                    </span>
                    .{' '}
                  </li>
                  <li className="-indent-4">
                    {' '}
                    2. <b>Screenshot</b> payment confirmation.{' '}
                  </li>
                  <li className="-indent-4">
                    {' '}
                    3. Fill out our{' '}
                    <span className="box-content bg-[#FD652F] rounded-sm text-white p-0.5 shadow-black shadow-sm hover:transition-shadow hover:shadow-md text-nowrap">
                      <Link href="https://docs.google.com/forms/d/e/1FAIpQLScMfQgPIBcOUDLojyf1ytRAUDxqipHNw2ZYNt0ori33Rl3Qzw/viewform">
                        Google Form
                      </Link>
                    </span>{' '}
                    <b>Use non-tamu email to access form.</b>
                  </li>
                  <li className="-indent-4 font-extrabold">Chapter membership must be renewed at the beginning of the school year!</li>
                </ul>
              </div>
              <div className="bg-[#BADEFF] w-full max-h-min md:col-span-1 text-left p-3 gap-2">
                <h1 className='text-center font-extrabold text-2xl'>Screenshots must be uploaded onto the SHPE mobile app!</h1>
              </div>


              {/* Congratulations */}
              <div className="bg-[#D23F26] w-full max-h-min text-center text gap-2 p-2">
                <h1 className="text-xl font-bold text-white">Congratulations!</h1>
                <h3 className="text-sm text-white">You are an official TAMU SHPE Member!</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Why Points */}
        <div className="bg-[#500000] w-full h-[13vh] p-4 flex-1 ">
          <h1 className="text-white font-bold text-2xl pb-2">Why points?</h1>
          <p className="text-white font-semibold text-xl pl-2.5">
            Members who are top point earners can be eligible for sponsorship to future SHPE National Conventions and
            have the opportunity to win various awards at the End of Year Banquet!
          </p>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-16 justify-between items-center">
          {/* SHPE App */}
          <Link
            href="https://play.google.com/store/apps/details?id=com.tamu.shpe&hl=en_US"
            className="flex flex-col bg-[#191740] p-3 my-2 justify-evenly h-52 w-full max-w-[450px] rounded-3xl select-none"
          >
            <div className="flex items-center justify-around">
              <div className="relative h-24 w-24">
                <Image
                  src="/logos/shpeicon.svg"
                  alt="SHPE Icon"
                  className="h-full w-full object-cover object-top rounded-lg"
                  fill
                />
              </div>
              <p className="text-white text-2xl sm:text-3xl font-semibold ">
                Download the
                <br></br>
                <strong className="text-orange-500">TAMU SHPE</strong>
                <br></br>
                Mobile App!
              </p>
            </div>
            <div className="text-white self-center">Now on IOS and Android!</div>
          </Link>

          {/* Points */}
          <div className=" flex flex-col border-black border-2 px-10 py-3 text-[#3C0000]">
            <div className="self-center font-bold text-2xl">Gaining points</div>
            <div className="grid grid-cols-2 gap-y-2  font-semibold ">
              <div className="w-fit">General Meeting & Events - 1 pt</div>
              <div className="w-fit">Academic Socials - 1 pt</div>
              <div className="w-fit">General Meeting Sign Out - 2 pts</div>
              <div className="w-fit">Community Service - 2 pts/hour </div>
              <div className="w-fit">Elections - 4 pts</div>
              <div className="w-fit">Upload old exam - 1 pt + 1 pt if A</div>
              <div className="w-fit">Professional Workshops - 3 pts</div>
              <div className="w-fit">Post your #wearitwednesday on Social Media - 1 pt</div>
              <div className="w-fit">Academic Workshops - 2 pts</div>
              <div className="w-fit">MemberSHPE Challenge - 1 pt</div>
            </div>
          </div>
        </div>
        <CommitteeCards />
      </main>
    </div>
  );
}
