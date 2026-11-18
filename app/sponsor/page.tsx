
import Link from 'next/link';

export default function Sponsor() {
  return (
    <div className="h-full overflow-auto bg-[#FFFFF5]">
      <main>
        {/* ORIGINAL SPONSOR BANNER */}
        <div className="flex flex-col lg:flex-row justify-between mx-4 md:mx-10">
          <div className="bg-[url(/newSponsorCover.jpg)] bg-center bg-cover h-[82vh] w-full rounded-3xl overflow-hidden transition ease-in-out">
            <div className="w-full h-full flex flex-col items-center justify-center bg-[#191740]/65 px-5">
              <h1 className="text-white text-4xl sm:text-6xl lg:text-7xl text-center font-semibold">
                TAMU SHPE Sponsors
              </h1>

              <p className="text-white text-lg sm:text-2xl lg:text-3xl text-center max-w-2xl mx-auto mt-6">
                Our TAMU SHPE familia is deeply grateful to our
                incredible sponsors whose generous support
                empowers the next generation of Hispanic
                engineers. Your belief in our mission inspires
                us every day and helps us build a stronger,
                more inclusive future in STEM.
              </p>
            </div>
          </div>
        </div>

        {/* SPONSORSHIP CONTENT */}
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.1fr] gap-8 items-start">

            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-4">

              {/* Join Our Mission */}
              <div className="border-4 border-[#4A150F] bg-white px-6 py-8 text-center text-[#4A150F]">
                <h2 className="text-3xl font-bold mb-6">
                  Join Our Mission!
                </h2>

                <div className="flex flex-col gap-7 text-lg md:text-xl font-medium">
                  <p>
                    We're on the lookout for dynamic,
                    innovative companies to join our
                    #SHPEfamilia!
                  </p>

                  <p>
                    Through engaging socials and insightful
                    meetings, there are countless opportunities
                    for your company to connect and grow with us.
                  </p>

                  <p>
                    Let's build a brighter future together!
                  </p>
                </div>
              </div>

              {/* Proposal Card */}
              <div className="flex flex-col items-center justify-center bg-[#191740] px-8 py-7 text-center text-white">
                <p className="text-xl font-medium mb-4">
                  Take a look at our SponsorSHPE proposal
                  packet below to learn where you fit into
                  TAMU SHPE
                </p>

                <Link
                  href="/pdf/Sponsorship 2024-2025.pdf"
                  className="rounded-lg bg-[#E86F3C] px-10 py-2 text-white font-medium hover:bg-[#D85B2C] transition-colors"
                >
                  Our Proposal
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="border-4 border-[#4A150F] bg-white p-5 md:p-6 flex flex-col gap-8">

              {/* Become a Sponsor */}
              <div className="bg-[#191740] text-white px-7 py-8 md:px-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Want to become a Sponsor?
                </h2>

                <p className="text-base md:text-lg">
                  Contact our Vice President, Sebastian Luna,
                  at tamushpe@gmail.com. Event and meeting
                  reservations are prioritized by sponsorship
                  level, then on a first-come, first-served
                  basis, and financial contribution amount.
                  Reservations will be made only after payment
                  is received and confirmed.
                </p>
              </div>

              {/* Benefits */}
              <div className="bg-[#E86F3C] text-white px-7 py-8 md:px-10">
                <h2 className="text-3xl font-bold text-center mb-3">
                  Benefits
                </h2>

                <ul className="list-disc list-outside pl-5 text-base md:text-lg space-y-1">
                  <li>Access to Member Resumes</li>
                  <li>Host a Technical Workshop</li>
                  <li>Host General Meetings</li>
                  <li>Host Company Tours</li>
                  <li>Promotion through our email</li>
                  <li>Participate as a Professional Mentor</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
