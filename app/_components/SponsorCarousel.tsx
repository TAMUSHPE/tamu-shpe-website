import Image from 'next/image';

const sponsors = [
  { src: '/caterpillar.svg', alt: 'Caterpillar logo', width: 200, height: 100 },
  { src: '/gm.svg', alt: 'General Motors logo', width: 75, height: 100 },
  { src: '/fluor.svg', alt: 'Fluor logo', width: 200, height: 100 },
  { src: '/pepsico.svg', alt: 'Pepsico logo', width: 200, height: 100 },
  { src: '/lockheedmartin.svg', alt: 'Lockheed Martin logo', width: 300, height: 200 },
  { src: '/proctor.svg', alt: 'Proctor and Gamble logo', width: 100, height: 100 },
  { src: '/pwc.svg', alt: 'PWC logo', width: 100, height: 100 },
  { src: '/rockwell.svg', alt: 'Rockwell logo', width: 200, height: 100 },
  { src: '/google.svg', alt: 'Google logo', width: 200, height: 100 },
  { src: '/exon.svg', alt: 'ExonMobil logo', width: 200, height: 100 },
  { src: '/microsoft.svg', alt: 'Microsoft logo', width: 200, height: 100 },
  { src: '/bp.svg', alt: 'BP logo', width: 100, height: 100 },
  { src: '/accenture.svg', alt: 'Accenture logo', width: 200, height: 100 },
  { src: '/capitol.svg', alt: 'Capital logo', width: 200, height: 100 },
  { src: '/cisco.svg', alt: 'Cisco logo', width: 100, height: 100 },
  { src: '/gold.svg', alt: 'Goldman Sachs logo', width: 175, height: 100 },
  { src: '/technip.svg', alt: 'Technip logo', width: 100, height: 100 },
  { src: '/westerndig.svg', alt: 'Western Digital logo', width: 200, height: 100 },
];

export default function Sponsors() {
  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden group [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infiniteScroll group-hover:paused">
        {sponsors.map((sponsor, index) => (
          <li key={index}>
            <Image src={sponsor.src} alt={sponsor.alt} width={sponsor.width} height={sponsor.height} />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infiniteScroll group-hover:paused"
        aria-hidden="true"
      >
        {sponsors.map((sponsor, index) => (
          <li key={`duplicate-${index}`}>
            <Image src={sponsor.src} alt={sponsor.alt} width={sponsor.width} height={sponsor.height} />
          </li>
        ))}
      </ul>
    </div>
  );
}
