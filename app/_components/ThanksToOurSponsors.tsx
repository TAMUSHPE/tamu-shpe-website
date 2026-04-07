import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

type Sponsor = {
  src: string;
  alt: string;
  slotW: number;
  slotH: number;
  logoScale?: number;
  dim?: string;
  url: string;
};

/* ===================== PLATINUM ===================== */
const platinumSponsors: Sponsor[] = [
  { src: '/sponsors/caterpillar.svg', alt: 'Caterpillar', slotW: 360, slotH: 180, logoScale: 1, dim: 'brightness-95', url: 'https://www.caterpillar.com' },
  { src: '/sponsors/granite.svg', alt: 'Granite', slotW: 360, slotH: 180, logoScale: 1.50, dim: 'brightness-95', url: 'https://www.graniteconstruction.com' },
  { src: '/sponsors/rtx.svg', alt: 'RTX', slotW: 360, slotH: 180, logoScale: 0.80, dim: 'brightness-105', url: 'https://www.rtx.com' },
  { src: '/sponsors/honeywell.svg', alt: 'Honeywell', slotW: 300, slotH: 160, logoScale: 1.5 , dim: 'brightness-90', url: 'https://www.honeywell.com' },
  { src: '/sponsors/chevron.svg', alt: 'Chevron', slotW: 440, slotH: 160, logoScale: 1.1, dim: 'brightness-90', url: 'https://www.chevron.com' },
  { src: '/sponsors/capitol.svg', alt: 'Capital One', slotW: 300, slotH: 160, logoScale: 1.1, dim: 'brightness-110', url: 'https://www.capitalone.com' },
];

/* ===================== GOLD ===================== */
const goldSponsors: Sponsor[] = [
  { src: '/sponsors/gm.svg', alt: 'General Motors', slotW: 240, slotH: 120, logoScale: 0.9, dim: 'brightness-95', url: 'https://www.gm.com' },
  { src: '/sponsors/pepsico.svg', alt: 'PepsiCo', slotW: 260, slotH: 140, logoScale: 0.9, dim: 'brightness-105', url: 'https://www.pepsico.com' },
  { src: '/sponsors/bankofamerica.svg', alt: 'Bank of America', slotW: 300, slotH: 180, logoScale: 1, dim: 'brightness-90', url: 'https://www.bankofamerica.com' },
  { src: '/sponsors/roblox.svg', alt: 'Roblox', slotW: 240, slotH: 140, logoScale: 0.9, dim: 'brightness-110', url: 'https://www.roblox.com' },
  { src: '/sponsors/deloitte.svg', alt: 'Deloitte', slotW: 260, slotH: 140, logoScale: 0.9, dim: 'brightness-105', url: 'https://www.deloitte.com' },
  { src: '/sponsors/oxy.svg', alt: 'Occidental Petroleum', slotW: 260, slotH: 140, logoScale: 0.9, dim: 'brightness-90', url: 'https://www.oxy.com' },
  { src: '/sponsors/fluor.svg', alt: 'Fluor', slotW: 260, slotH: 140, logoScale: 0.9, dim: 'brightness-95', url: 'https://www.fluor.com' },
  { src: '/sponsors/accenture.svg', alt: 'Accenture', slotW: 260, slotH: 140, logoScale: 0.9, dim: 'brightness-105', url: 'https://www.accenture.com' },
];

/* ===================== BRONZE ===================== */
const bronzeSponsors: Sponsor[] = [
  { src: '/sponsors/phillips66.svg', alt: 'Phillips 66', slotW: 220, slotH: 120, logoScale: 1, dim: 'brightness-95', url: 'https://www.phillips66.com' },
  { src: '/sponsors/visa.svg', alt: 'Visa', slotW: 220, slotH: 120, logoScale: 0.9, dim: 'brightness-110', url: 'https://www.visa.com' },
  { src: '/sponsors/medtronic.svg', alt: 'Medtronic', slotW: 240, slotH: 120, logoScale: 0.9, dim: 'brightness-95', url: 'https://www.medtronic.com' },
  { src: '/sponsors/boeing.svg', alt: 'Boeing', slotW: 240, slotH: 120, logoScale: 0.9, dim: 'brightness-90', url: 'https://www.boeing.com' },
  { src: '/sponsors/texasinstruments.svg', alt: 'Texas Instruments', slotW: 240, slotH: 120, logoScale: 1.3, dim: 'brightness-105', url: 'https://www.ti.com' },
  { src: '/sponsors/apple.svg', alt: 'Apple', slotW: 200, slotH: 120, logoScale: 0.9, dim: 'brightness-110', url: 'https://www.apple.com' },
  { src: '/sponsors/papedawson.svg', alt: 'Pape-Dawson Engineers', slotW: 240, slotH: 120, logoScale: 0.9, dim: 'brightness-95', url: 'https://www.pape-dawson.com' },
  { src: '/sponsors/williams.svg', alt: 'Williams', slotW: 220, slotH: 180, logoScale: 0.9, dim: 'brightness-95', url: 'https://www.williams.com' },
  { src: '/sponsors/jameshardie.svg', alt: 'James Hardie', slotW: 240, slotH: 120, logoScale: 0.9, dim: 'brightness-95', url: 'https://www.jameshardie.com' },
  { src: '/sponsors/navistar.svg', alt: 'Navistar', slotW: 240, slotH: 120, logoScale: 0.9, dim: 'brightness-95', url: 'https://www.navistar.com' },
  { src: '/sponsors/garver.svg', alt: 'Garver', slotW: 220, slotH: 120, logoScale: 0.9, dim: 'brightness-95', url: 'https://www.garverusa.com' },
  { src: '/sponsors/cdmsmith.svg', alt: 'CDM Smith', slotW: 240, slotH: 120, logoScale: 0.9, dim: 'brightness-95', url: 'https://www.cdmsmith.com' },
];

/* ===================== HELPERS ===================== */
function chunkIntoRows(items: Sponsor[], size = 4) {
  const rows: Sponsor[][] = [];
  for (let i = 0; i < items.length; i += size) rows.push(items.slice(i, i + size));
  return rows;
}

/* ===================== LOGO ===================== */
function SponsorLogo({ sponsor }: { sponsor: Sponsor }) {
  const dim = sponsor.dim ?? 'brightness-100';
  const scale = sponsor.logoScale ?? 1;

  return (
    <Link
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex justify-center"
    >
      <div
        style={{ width: sponsor.slotW, height: sponsor.slotH }}
        className="relative flex items-center justify-center"
      >
        <div
          style={{ transform: `scale(${scale})` }}
          className="relative w-full h-full transition duration-200 ease-out group-hover:scale-110"
        >
          <Image
            src={sponsor.src}
            alt={sponsor.alt}
            fill
            sizes={`${sponsor.slotW}px`}
            className={[
              'object-contain',
              'grayscale',
              dim,
              'contrast-125',
              'transition',
              'duration-200',
              'ease-out',
              'group-hover:grayscale-0',
              'group-hover:brightness-100',
              'group-hover:contrast-100',
              'cursor-pointer',
            ].join(' ')}
          />
        </div>
      </div>
    </Link>
  );
}

function SponsorRows({
  items,
  perRow = 4,
}: {
  items: Sponsor[];
  perRow?: number;
}) {
  return (
    <div className="flex flex-col gap-10">
      {chunkIntoRows(items, perRow).map((row, i) => (
        <div key={i} className="flex justify-center gap-12 flex-wrap">
          {row.map((s, j) => (
            <SponsorLogo key={j} sponsor={s} />
          ))}
        </div>
      ))}
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  let colorClass = "";

  if (title === "Platinum Sponsors") {
    colorClass =
      "bg-gradient-to-r from-gray-700 via-gray-300 to-gray-700 bg-clip-text text-transparent";
  } else if (title === "Gold Sponsors") {
    colorClass =
      "bg-gradient-to-r from-yellow-700 via-yellow-400 via-amber-200 to-yellow-700 bg-clip-text text-transparent";
  } else if (title === "Bronze Sponsors") {
    colorClass =
      "bg-gradient-to-r from-amber-800 via-amber-400 to-amber-800 bg-clip-text text-transparent";
  }

  return (
    <div className="mb-24">
      <h3 className={`text-5xl tracking-wide font-semibold mb-10 ${colorClass}`}>
        {title}
      </h3>
      {children}
    </div>
  );
}

/* ===================== COMPONENT ===================== */
export default function SponsorshipTiers() {
  return (
    <div
      className="mt-24 text-center"
      style={{ fontFamily: '"Sorts Mill Goudy", serif' }}
    >
      <h2 className="text-[70px] font-bold mb-20">
        A huge thanks to <br /> our sponsors
      </h2>

      <Section title="Platinum Sponsors">
        <SponsorRows items={platinumSponsors} perRow={3} />
      </Section>

      <Section title="Gold Sponsors">
        <SponsorRows items={goldSponsors} />
      </Section>

      <Section title="Bronze Sponsors">
        <SponsorRows items={bronzeSponsors} />
      </Section>

      <div className="mt-10 py-20 text-center flex flex-col items-center bg-white">
        <h2 className="text-[48px] tracking-wide font-semibold uppercase">
          INTERESTED IN BECOMING A SPONSOR?
        </h2>

        <p className="mt-6 text-xl leading-relaxed max-w-xl">
          Learn how supporting TAMU <br /> SHPE will benefit you!
        </p>

        <Link
          href="https://tamushpe.org/sponsor"
          className="mt-10 px-10 py-4 rounded-xl bg-[#1c1a3a] text-white text-lg
                     shadow-md transition duration-200 ease-out
                     hover:-translate-y-0.5 hover:shadow-lg"
        >
          Sponsor →
        </Link>
      </div>
    </div>
  );
}