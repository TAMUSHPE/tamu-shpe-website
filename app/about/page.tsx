import OfficerCards from './_components/OfficerCards';
import Image from 'next/image';
import Link from 'next/link';

const pillars = [
  {
    title: 'Academic Development',
    description:
      'Providing resources, workshops, and mentorship programs to support academic excellence, promote effective study habits, and encourage a passion for lifelong learning.',
  },
  {
    title: 'Chapter Development',
    description:
      'Building a sense of community, improving internal operations, increasing member engagement, and ensuring the sustainability of the organization through strategic planning and effective communication.',
  },
  {
    title: 'Leadership Development',
    description:
      'Offering training sessions, leadership roles, and opportunities for personal growth to empower students to become effective leaders within the organization and in their future careers.',
  },
  {
    title: 'Professional Development',
    description:
      'Equipping members with the skills, resources, and opportunities needed to excel in their careers through workshops, networking events, leadership training, and mentorship programs.',
  },
  {
    title: 'Service and Outreach',
    description:
      'Inspiring members to give back through volunteer opportunities, outreach initiatives, and service projects that promote STEM awareness and empower future generations.',
  },
];

function PillarCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-black/95 rounded-[24px] p-2 h-full shadow-xl">
      <div
        className="
          h-full min-h-[310px] sm:min-h-[350px]
          rounded-[19px] border-2 border-[#D1D1D1]
          px-3 py-6 flex flex-col items-center
          text-center gap-5 text-white
        "
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 shrink-0 text-[#D1D1D1]"
          aria-hidden="true"
        >
          <path d="m2 10 10-5 10 5-10 5-10-5Z" />
          <path d="M6 12v5c3.5 3 8.5 3 12 0v-5" />
          <path d="M22 10v7" />
        </svg>

        <h3
          className="
            font-bold uppercase text-sm sm:text-base
            leading-snug min-h-[44px]
            flex items-center justify-center
          "
        >
          {title}
        </h3>

        <p className="text-xs sm:text-sm leading-relaxed text-white/95">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <div className="min-h-screen bg-[#F6F5EE]">
      <main>
        {/* FIVE PILLARS SECTION */}
        <section
          className="
            relative isolate overflow-hidden
            bg-[#0f0c18] py-10 md:py-14
          "
        >
          {/* ANIMATED BACKGROUND */}
          <div
            className="
              absolute inset-0 z-0
              pointer-events-none overflow-hidden
            "
            aria-hidden="true"
          >
            <div className="pillar-blob pillar-blob-one" />
            <div className="pillar-blob pillar-blob-two" />
            <div className="pillar-blob pillar-blob-three" />
            <div className="pillar-blob pillar-blob-four" />

            {/* stronger dark overlays */}
            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.18)_65%,rgba(0,0,0,0.32)_100%)]" />
          </div>

          <div
            className="
              relative z-10 max-w-[1500px]
              mx-auto px-4 sm:px-6 lg:px-10
            "
          >
            {/* HEADER */}
            <div
              className="
                bg-black/95 rounded-[24px]
                px-5 py-3 mb-5 shadow-xl
              "
            >
              <div
                className="
                  border-2 border-[#D1D1D1]
                  rounded-[18px] py-3 px-4
                "
              >
                <h1
                  className="
                    text-white text-3xl sm:text-4xl
                    lg:text-5xl font-extrabold
                    uppercase text-center
                  "
                >
                  The Five Pillars
                </h1>
              </div>
            </div>

            {/* FIVE PILLAR CARDS */}
            <div
              className="
                grid grid-cols-1
                min-[450px]:grid-cols-2
                md:grid-cols-3 lg:grid-cols-5
                gap-4 lg:gap-5
              "
            >
              {pillars.map((pillar) => (
                <PillarCard key={pillar.title} {...pillar} />
              ))}
            </div>
          </div>
        </section>

        {/* EXECUTIVE BOARD PHOTO BANNER */}
        <section
          className="
            relative w-full h-[300px]
            sm:h-[380px] lg:h-[450px]
            overflow-hidden bg-[#191740]
          "
        >
          <Image
            src="/about/chapter.jpg"
            alt="TAMU SHPE Executive Board"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-black/70
              via-black/20
              to-transparent
            "
          />

          <div
            className="
              absolute inset-0 flex flex-col
              items-center justify-end
              pb-8 md:pb-12 px-4
            "
          >
            <h2
              className="
                text-white text-center italic
                font-extrabold text-5xl
                sm:text-7xl lg:text-[100px]
                tracking-tight leading-tight
                drop-shadow-lg
              "
            >
              Executive Board
            </h2>

            <p
              className="
                text-white text-2xl
                sm:text-3xl lg:text-4xl
                font-bold italic
              "
            >
              2025 - 2026
            </p>
          </div>
        </section>

        {/* OFFICER CARDS */}
        <section className="bg-[#FFFFF5] py-8">
          <div
            className="
              max-w-[1500px] mx-auto
              px-4 sm:px-6 lg:px-8
            "
          >
            <OfficerCards />
          </div>
        </section>

        {/* HISTORY SECTION */}
        <section className="bg-[#FFFFF5] pb-24 pt-2">
          <div
            className="
              max-w-[1500px] mx-auto
              px-4 sm:px-6 lg:px-10
              grid grid-cols-1 lg:grid-cols-2
              gap-8 lg:gap-16 items-start
            "
          >
            {/* CHAPTER HISTORY */}
            <div className="bg-[#191740] rounded-[22px] p-2">
              <div
                className="
                  bg-[#54546D]
                  border-2 border-[#D1D1D1]
                  rounded-[17px] p-6
                  min-h-[300px]
                  flex flex-col justify-between
                "
              >
                <div>
                  <h2 className="text-white text-3xl font-bold mb-5">
                    Chapter History
                  </h2>

                  <p className="text-white text-base sm:text-lg leading-relaxed">
                    The Texas A&amp;M University Chapter of SHPE
                    was founded in 1994 to create an
                    organization where Hispanic engineers
                    could come together. Over the years,
                    we have nurtured a diverse group of
                    students, united in our heritage and
                    our studies. Members become part of
                    the #SHPEfamilia while participating
                    in activities that help them grow
                    personally and professionally.
                  </p>
                </div>

                <div className="flex justify-between items-end mt-6 gap-4">
                  <Link
                    href="/pdf/TAMU SHPE Constitution 25-26.pdf"
                    target="_blank"
                    className="
                      bg-[#191740] text-white
                      px-5 py-3 rounded-lg
                      text-sm font-semibold
                      hover:bg-[#34325F]
                      transition
                    "
                  >
                    Chapter Constitution
                  </Link>

                  <Image
                    src="/logos/shpeicon.svg"
                    alt="SHPE Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>

            {/* NATIONAL HISTORY */}
            <div className="bg-[#191740] rounded-[22px] p-2">
              <div
                className="
                  bg-[#54546D]
                  border-2 border-[#D1D1D1]
                  rounded-[17px] p-6
                  min-h-[300px]
                  flex flex-col justify-between
                "
              >
                <div>
                  <h2 className="text-white text-3xl font-bold mb-5">
                    National History
                  </h2>

                  <p className="text-white text-base sm:text-lg leading-relaxed">
                    The Society of Hispanic Professional
                    Engineers (SHPE) was founded in
                    Los Angeles, California, in 1974
                    by a group of engineers employed
                    by the city of Los Angeles.
                    Their objective was to form a
                    national organization of professional
                    engineers to serve as role models
                    in the Hispanic community.
                  </p>
                </div>

                <div className="flex justify-between items-end mt-6 gap-4">
                  <Link
                    href="https://shpe.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      bg-[#191740] text-white
                      px-5 py-3 rounded-lg
                      text-sm font-semibold
                      hover:bg-[#34325F]
                      transition
                    "
                  >
                    Learn More About SHPE
                  </Link>

                  <Image
                    src="/logos/shpeicon.svg"
                    alt="SHPE Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .pillar-blob {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px) saturate(110%);
          will-change: transform, opacity;
          mix-blend-mode: screen;
        }

        /* deep maroon */
        .pillar-blob-one {
          width: 90%;
          height: 160%;
          top: -30%;
          left: -35%;
          background: radial-gradient(
            circle,
            rgba(95, 8, 32, 0.9) 0%,
            rgba(58, 8, 22, 0.72) 42%,
            rgba(20, 4, 10, 0.12) 72%,
            transparent 82%
          );
          animation: pillar-sway-one 16s ease-in-out infinite alternate;
        }

        /* deep purple */
        .pillar-blob-two {
          width: 90%;
          height: 160%;
          top: -30%;
          right: -35%;
          background: radial-gradient(
            circle,
            rgba(54, 22, 92, 0.82) 0%,
            rgba(30, 14, 58, 0.68) 42%,
            rgba(10, 6, 22, 0.12) 72%,
            transparent 82%
          );
          animation: pillar-sway-two 20s ease-in-out infinite alternate;
        }

        /* dark navy */
        .pillar-blob-three {
          width: 90%;
          height: 150%;
          bottom: -50%;
          left: 5%;
          background: radial-gradient(
            circle,
            rgba(18, 30, 92, 0.78) 0%,
            rgba(10, 18, 58, 0.64) 42%,
            rgba(4, 8, 22, 0.1) 72%,
            transparent 82%
          );
          animation: pillar-sway-three 24s ease-in-out infinite alternate;
        }

        /* dark wine glow */
        .pillar-blob-four {
          width: 70%;
          height: 130%;
          top: -10%;
          left: 20%;
          background: radial-gradient(
            circle,
            rgba(74, 12, 34, 0.58) 0%,
            rgba(38, 8, 20, 0.42) 45%,
            rgba(14, 4, 10, 0.08) 70%,
            transparent 80%
          );
          animation: pillar-sway-four 28s ease-in-out infinite alternate;
        }

        @keyframes pillar-sway-one {
          0% {
            transform: translate3d(-25%, -10%, 0) scale(0.95) rotate(-8deg);
            opacity: 0.72;
          }
          25% {
            transform: translate3d(5%, 15%, 0) scale(1.12) rotate(4deg);
            opacity: 0.84;
          }
          50% {
            transform: translate3d(30%, -10%, 0) scale(1.24) rotate(8deg);
            opacity: 0.88;
          }
          75% {
            transform: translate3d(50%, 15%, 0) scale(1.1) rotate(-4deg);
            opacity: 0.82;
          }
          100% {
            transform: translate3d(70%, -10%, 0) scale(1.02) rotate(-8deg);
            opacity: 0.74;
          }
        }

        @keyframes pillar-sway-two {
          0% {
            transform: translate3d(25%, 10%, 0) scale(1) rotate(8deg);
            opacity: 0.7;
          }
          25% {
            transform: translate3d(-5%, -15%, 0) scale(1.1) rotate(-4deg);
            opacity: 0.82;
          }
          50% {
            transform: translate3d(-30%, 15%, 0) scale(1.22) rotate(-8deg);
            opacity: 0.86;
          }
          75% {
            transform: translate3d(-50%, -10%, 0) scale(1.1) rotate(4deg);
            opacity: 0.8;
          }
          100% {
            transform: translate3d(-70%, 10%, 0) scale(1.02) rotate(8deg);
            opacity: 0.72;
          }
        }

        @keyframes pillar-sway-three {
          0% {
            transform: translate3d(-40%, 25%, 0) scale(1);
            opacity: 0.58;
          }
          25% {
            transform: translate3d(-10%, -10%, 0) scale(1.14);
            opacity: 0.7;
          }
          50% {
            transform: translate3d(20%, -30%, 0) scale(1.28);
            opacity: 0.8;
          }
          75% {
            transform: translate3d(40%, 0%, 0) scale(1.14);
            opacity: 0.68;
          }
          100% {
            transform: translate3d(60%, 25%, 0) scale(1);
            opacity: 0.6;
          }
        }

        @keyframes pillar-sway-four {
          0% {
            transform: translate3d(-35%, -20%, 0) scale(0.9);
            opacity: 0.48;
          }
          50% {
            transform: translate3d(30%, 20%, 0) scale(1.25);
            opacity: 0.64;
          }
          100% {
            transform: translate3d(-15%, -10%, 0) scale(1.05);
            opacity: 0.5;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pillar-blob {
            animation: none !important;
            will-change: auto;
          }
        }
      `}</style>
    </div>
  );
}