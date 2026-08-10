import Link from 'next/link';

export default function Sponsor() {
  return (
    <div className="h-full overflow-auto">
      <main>
        <div className="flex flex-col lg:flex-row justify-between mx-4 md:mx-10">
          {/* Title Card */}
          <div className="bg-[url(/newSponsorCover.jpg)] bg-center bg-cover h-[82vh] lg:w-full sm:w-4/5 w-full ease-in-out transition rounded-3xl overflow-hidden">
            <div className="w-full h-full content-center bg-[#191740] bg-opacity-65">
              <h1 className="text-white text-7xl text-center w-3/4 m-auto font-semibold">TAMU SHPE Sponsors</h1>
              <p className="text-white text-lg sm:text-3xl text-center max-w-2xl m-auto mt-6">
                Our TAMU SHPE familia is deeply grateful to our incredible sponsors whose generous support empowers the next generation of Hispanic engineers. Your belief in our mission inspires us every day and helps us build a stronger, more inclusive future in STEM.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-around items-center flex-col lg:flex-row my-10 gap-10">
          {/* Benefits Card */}
          <div className="bg-[#FD652F] text-white w-[90%] lg:w-[40vw] px-9 py-7">
            <h2 className="text-xl sm:text-3xl text-center pb-3 font-semibold">Benefits of Becoming a Sponsor</h2>
            <ul className="flex flex-col list-disc list-inside text-lg sm:text-2xl w-fit m-auto gap-2">
              <li>Access to Member Resumes</li>
              <li>Host a Technical Workshop</li>
              <li>Host General Meetings</li>
              <li>Host Company Tours</li>
              <li>Promotion through our email</li>
              <li>Participate as a Professional Mentor</li>
            </ul>
          </div>
          {/* Proposal Card */}
          <div className="flex flex-col bg-[#191740] w-[90%] lg:w-[35vw] text-white p-8 font-medium justify-center items-center gap-4">
            <p className="text-3xl text-center">
              Take a look at our SponsorSHPE proposal packet below to learn where you fit into TAMU SHPE
            </p>
            <Link
              href="/pdf/Sponsorship 2024-2025.pdf"
              className="bg-[#1870B8] w-fit text-2xl px-8 py-2 rounded-xl"
            >
              Our Proposal
            </Link>
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
