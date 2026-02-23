import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';

type Sponsor = {
  src: string;
  alt: string;
  width: number;
  height: number;
  dim?: string;
  url: string;
};

/* ===================== PLATINUM ===================== */
const platinumSponsors: Sponsor[] = [
  { src: '/sponsors/caterpillar.svg', alt: 'Caterpillar', width: 300, height: 200, dim: 'brightness-95', url: 'https://www.caterpillar.com' },
  { src: '/sponsors/granite.svg', alt: 'Granite', width: 300, height: 200, dim: 'brightness-95', url: 'https://www.graniteconstruction.com' },
  { src: '/sponsors/rtx.svg', alt: 'RTX', width: 300, height: 200, dim: 'brightness-105', url: 'https://www.rtx.com' },
  { src: '/sponsors/honeywell.svg', alt: 'Honeywell', width: 200, height: 150, dim: 'brightness-90', url: 'https://www.honeywell.com' },
  { src: '/sponsors/chevron.svg', alt: 'Chevron', width: 200, height: 150, dim: 'brightness-90', url: 'https://www.chevron.com' },
  { src: '/sponsors/capitol.svg', alt: 'Capital One', width: 200, height: 150, dim: 'brightness-110', url: 'https://www.capitalone.com' },
];

/* ===================== GOLD ===================== */
const goldSponsors: Sponsor[] = [
  { src: '/sponsors/gm.svg', alt: 'General Motors', width: 100, height: 100, dim: 'brightness-95', url: 'https://www.gm.com' },
  { src: '/sponsors/pepsico.svg', alt: 'PepsiCo', width: 200, height: 100, dim: 'brightness-105', url: 'https://www.pepsico.com' },
  { src: '/sponsors/bankofamerica.svg', alt: 'Bank of America', width: 220, height: 100, dim: 'brightness-90', url: 'https://www.bankofamerica.com' },
  { src: '/sponsors/roblox.svg', alt: 'Roblox', width: 160, height: 100, dim: 'brightness-110', url: 'https://www.roblox.com' },
  { src: '/sponsors/deloitte.svg', alt: 'Deloitte', width: 200, height: 100, dim: 'brightness-105', url: 'https://www.deloitte.com' },
  { src: '/sponsors/oxy.svg', alt: 'Occidental Petroleum', width: 180, height: 100, dim: 'brightness-90', url: 'https://www.oxy.com' },
  { src: '/sponsors/fluor.svg', alt: 'Fluor', width: 200, height: 100, dim: 'brightness-95', url: 'https://www.fluor.com' },
  { src: '/sponsors/accenture.svg', alt: 'Accenture', width: 200, height: 100, dim: 'brightness-105', url: 'https://www.accenture.com' },
];

/* ===================== BRONZE ===================== */
const bronzeSponsors: Sponsor[] = [
  { src: '/sponsors/phillips66.svg', alt: 'Phillips 66', width: 200, height: 100, dim: 'brightness-95', url: 'https://www.phillips66.com' },
  { src: '/sponsors/visa.svg', alt: 'Visa', width: 200, height: 100, dim: 'brightness-110', url: 'https://www.visa.com' },
  { src: '/sponsors/medtronic.svg', alt: 'Medtronic', width: 220, height: 100, dim: 'brightness-95', url: 'https://www.medtronic.com' },
  { src: '/sponsors/boeing.svg', alt: 'Boeing', width: 220, height: 100, dim: 'brightness-90', url: 'https://www.boeing.com' },
  { src: '/sponsors/texasinstruments.svg', alt: 'Texas Instruments', width: 220, height: 100, dim: 'brightness-105', url: 'https://www.ti.com' },
  { src: '/sponsors/apple.svg', alt: 'Apple', width: 120, height: 100, dim: 'brightness-110', url: 'https://www.apple.com' },
  { src: '/sponsors/papedawson.svg', alt: 'Pape-Dawson Engineers', width: 220, height: 100, dim: 'brightness-95', url: 'https://www.pape-dawson.com' },
  { src: '/sponsors/williams.svg', alt: 'Williams', width: 200, height: 200, dim: 'brightness-95', url: 'https://www.williams.com' },
  { src: '/sponsors/jameshardie.svg', alt: 'James Hardie', width: 220, height: 100, dim: 'brightness-95', url: 'https://www.jameshardie.com' },
  { src: '/sponsors/navistar.svg', alt: 'Navistar', width: 220, height: 100, dim: 'brightness-95', url: 'https://www.navistar.com' },
  { src: '/sponsors/garver.svg', alt: 'Garver', width: 200, height: 100, dim: 'brightness-95', url: 'https://www.garverusa.com' },
  { src: '/sponsors/cdmsmith.svg', alt: 'CDM Smith', width: 220, height: 100, dim: 'brightness-95', url: 'https://www.cdmsmith.com' },
];

/* ===================== HELPERS ===================== */
function chunkIntoRows(items: Sponsor[], size = 4) {
  const rows: Sponsor[][] = [];
  for (let i = 0; i < items.length; i += size) rows.push(items.slice(i, i + size));
  return rows;
}

/* ✅ RESIZABLE LOGO */
function SponsorLogo({
  sponsor,
  boxW,
  boxH,
}: {
  sponsor: Sponsor;
  boxW: number;
  boxH: number;
}) {
  const dim = sponsor.dim ?? 'brightness-100';

  return (
    <Link
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex justify-center"
    >
      <div style={{ width: boxW, height: boxH }} className="relative">
        <Image
          src={sponsor.src}
          alt={sponsor.alt}
          fill
          sizes={`${boxW}px`}
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
            'group-hover:-translate-y-0.5',
            'cursor-pointer',
          ].join(' ')}
        />
      </div>
    </Link>
  );
}

function SponsorRows({
  items,
  perRow = 4,
  boxW,
  boxH,
}: {
  items: Sponsor[];
  perRow?: number;
  boxW: number;
  boxH: number;
}) {
  return (
    <div className="flex flex-col gap-10">
      {chunkIntoRows(items, perRow).map((row, i) => (
        <div key={i} className="flex justify-center gap-12 flex-wrap">
          {row.map((s, j) => (
            <SponsorLogo key={j} sponsor={s} boxW={boxW} boxH={boxH} />
          ))}
        </div>
      ))}
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mb-24">
      <h3 className="text-3xl font-semibold mb-10">{title}</h3>
      {children}
    </div>
  );
}

/* ===================== COMPONENT ===================== */
export default function SponsorshipTiers() {
  return (
    <div
      className="mt-24 text-center"
      style={{ fontFamily: '"Sorts Mill Goudy", serif' }} // ⭐ applies to EVERYTHING (including top title)
    >
      <h2 className="text-[70px] font-bold mb-20">
        A huge thanks to <br /> our sponsors
      </h2>

      <Section title="Platinum Sponsors">
        <SponsorRows items={platinumSponsors} perRow={3} boxW={360} boxH={170} />
      </Section>

      <Section title="Gold Sponsors">
        <SponsorRows items={goldSponsors} boxW={230} boxH={120} />
      </Section>

      <Section title="Bronze Sponsors">
        <SponsorRows items={bronzeSponsors} boxW={180} boxH={105} />
      </Section>

      {/* ===================== CTA SECTION ===================== */}
      <div className="mt-10 py-20 text-center flex flex-col items-center bg-white">
        <h2 className="text-[48px] tracking-wide font-semibold uppercase">
          INTERESTED IN BECOMING A SPONSOR?
        </h2>

        <p className="mt-6 text-xl leading-relaxed max-w-xl">
          Learn how supporting TAMU <br /> SHPE will benefit you!
        </p>

        <Link
          href="https://tamushpe.org/sponsor" // add link later
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
