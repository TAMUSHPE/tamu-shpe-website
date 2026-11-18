
import VideoBox from './_components/VideoBox';
import CommitteeCards from './_components/CommitteeCards';
import Link from 'next/link';
import Image from 'next/image';

// Temporary collage photos using your committee images.
// Replace these paths with actual group photos whenever available.
const collageImages = [
  '/committees/shpetinas.jpg',
  '/committees/mentorshpe.jpg',
  '/committees/internal.jpg',
  '/committees/external.jpg',
  '/committees/tech.jpg',
  '/committees/profdev.jpg',
  '/committees/leadershpe.jpg',
  '/committees/webdev.jpg',
];

const pointGroups = [
  {
    title: '1 point',
    items: [
      'General Meetings & Events',
      'Academic Socials',
      'Upload an old exam (+1 extra if A)',
      '#WearItWednesday on social media',
      'MemberSHPE Challenge',
    ],
  },
  {
    title: '2 points',
    items: [
      'General Meeting Sign Out',
      'Academic Workshops',
      'Community Service - 2 points/hour',
    ],
  },
  {
    title: 'Other',
    items: [
      'Professional Workshops - 3 points',
      'Elections - 4 points',
    ],
  },
];

export default function Involvement() {
  return (
    <div className="min-h-screen bg-[#FFFFF5]">

      {/* HERO PHOTO COLLAGE */}
      <section className="relative w-full h-[280px] sm:h-[380px] lg:h-[480px] overflow-hidden bg-[#191740]">

        <div
          className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-1"
          aria-hidden="true"
        >
          {collageImages.map((src, index) => (
            <div
              key={index}
              className="bg-[#302947] bg-cover bg-center"
              style={{
                backgroundImage: `url("${src}")`,
              }}
            />
          ))}
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Hero title */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="text-white text-center font-black italic text-5xl sm:text-7xl lg:text-8xl leading-tight drop-shadow-lg">
            We are TAMU
            <br />
            SHPE
          </h1>
        </div>
      </section>

      <main className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-10 pb-20">

        {/* WHY JOIN + VIDEO */}
        <div className="my-8">
          <VideoBox />
        </div>

        {/* MAIN TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.5fr] gap-8 items-start">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-8">

            {/* MEMBERSHIP STEPS */}
            <section className="flex flex-col gap-4">

              <h2 className="text-2xl md:text-3xl font-extrabold text-center text-black">
                MemberSHPE Steps
              </h2>

              {/* National Registration */}
              <div className="bg-[#191740] text-white rounded-lg p-5">
                <h3 className="text-lg font-bold mb-3">
                  SHPE National Registration
                </h3>

                <p className="text-sm mb-4 text-gray-200">
                  Renew each calendar year.
                </p>

                <ol className="list-decimal pl-5 space-y-3 text-sm sm:text-base">
                  <li>
                    Go to the{' '}
                    <Link
                      href="https://www.shpeconnect.org/eweb/DynamicPage.aspx?WebCode=LoginRequired&expires=yes&Site=shpe"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#E86F3C] rounded px-2 py-0.5 font-bold"
                    >
                      SHPE Registration
                    </Link>{' '}
                    site.
                  </li>

                  <li>
                    Select Join/Renew Membership. Make sure to
                    select Region 5 and Texas A&M University
                    as your chapter.
                  </li>

                  <li>
                    Fill out your Account Information and
                    verify your Educational Information.
                  </li>

                  <li>
                    Agree to the Code of Ethics and add
                    the membership to your cart.
                  </li>

                  <li>Pay for your membership.</li>

                  <li>
                    <strong>Screenshot</strong> your payment
                    confirmation.
                  </li>
                </ol>
              </div>

              {/* Chapter Registration */}
              <div className="bg-[#191740] text-white rounded-lg p-5">
                <h3 className="text-lg font-bold mb-3">
                  TAMU Chapter Registration
                </h3>

                <p className="text-sm mb-4 text-gray-200">
                  Renew each academic year.
                </p>

                <ol className="list-decimal pl-5 space-y-3 text-sm sm:text-base">
                  <li>
                    Pay $20 to cover your #TAMUSHPE{' '}
                    <Link
                      href="https://sofctamu.estore.flywire.com/products/20242025-membershpe-shirt--copy-366673"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#E86F3C] rounded px-2 py-0.5 font-bold"
                    >
                      T-shirt
                    </Link>
                    .
                  </li>

                  <li>
                    <strong>Screenshot</strong> your payment
                    confirmation.
                  </li>

                  <li>
                    Fill out our{' '}
                    <Link
                      // Replace with actual Google Form link.
                      href="https://sofctamu.estore.flywire.com/products/20242025-membershpe-shirt--copy-366673"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#E86F3C] rounded px-2 py-0.5 font-bold"
                    >
                      Google Form
                    </Link>
                    . Use a non-TAMU email to access the form.
                  </li>
                </ol>
              </div>

              {/* Screenshots Notice */}
              <div className="bg-[#191740] rounded-lg p-5 text-center">
                <h3 className="text-white text-base sm:text-lg font-extrabold uppercase">
                  All screenshots must be uploaded to the
                  SHPE mobile app!
                </h3>
              </div>

              {/* Congratulations */}
              <div className="bg-[#500000] text-white rounded-lg px-5 py-4 text-center">
                <h3 className="text-2xl font-bold italic">
                  Congratulations!
                </h3>

                <p className="text-sm">
                  You are an official TAMU SHPE Member!
                </p>
              </div>

              {/* TAMU SHPE APP */}
              <Link
                href="https://play.google.com/store/apps/details?id=com.tamu.shpe&hl=en_US"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#191740] rounded-lg p-5 flex items-center gap-5 hover:opacity-90 transition-opacity"
              >
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 shrink-0 bg-white rounded-lg overflow-hidden">
                  <Image
                    src="/logos/shpeicon.svg"
                    alt="TAMU SHPE App"
                    fill
                    sizes="96px"
                    className="object-contain p-2"
                  />
                </div>

                <div className="text-white">
                  <p className="text-lg sm:text-xl font-semibold">
                    Download the
                  </p>

                  <p className="text-xl sm:text-2xl font-bold text-[#FD652F]">
                    TAMU SHPE
                  </p>

                  <p className="text-xl sm:text-2xl font-semibold">
                    Mobile App!
                  </p>

                  <p className="text-xs mt-2 text-gray-300">
                    Available on iOS and Android
                  </p>
                </div>
              </Link>
            </section>

            {/* POINT SYSTEM */}
            <section className="bg-white border border-gray-300 rounded-lg p-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191740] text-center mb-5">
                Point System
              </h2>

              <div className="bg-[#500000] text-white rounded-md px-4 py-3 mb-6">
                <p className="text-sm font-medium text-center">
                  You can gain points by attending general
                  meetings, professional events, and other
                  SHPE activities!
                </p>
              </div>

              <div className="flex flex-col gap-5">
                {pointGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="bg-[#500000] text-white font-bold px-3 py-2 mb-3">
                      {group.title}
                    </h3>

                    <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base text-[#363636]">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5">

            {/* COMMITTEE GRID */}
            <CommitteeCards />

            {/* WHY POINTS */}
            <section className="bg-[#191740] text-white rounded-lg p-5">
              <h2 className="text-[#FD652F] text-xl sm:text-2xl font-bold mb-2">
                Why points?
              </h2>

              <p className="text-sm sm:text-base leading-relaxed">
                Members who are top point earners can be
                eligible for sponsorship to future SHPE
                National Conventions and have the opportunity
                to win various awards at the End of Year
                Banquet!
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
