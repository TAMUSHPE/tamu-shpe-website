'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



export default function Sponsors() {
  const pathname = usePathname();

  return (
    
      <div className="divide-y divide-gray-400 space-y-2.5 ">
        
        <div className='w-full flex justify-between items-center'>
          
          <h2 className='font-bold  relative text-gray-49 left-3 left-5 text-3xl py-2 px-4'>Our Sponsors</h2>
          <Link href="/sponsor">
            <button className="bg-orange-500 relative right-5 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded">
              Become a Sponsor
            </button>
          </Link>

        </div>

        <div className="w-full inline-flex flex-nowrap overflow-hidden overflow-hidden group [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] ">
          <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infiniteScroll group-hover:paused'>
            <li>
              <Image src='/caterpillar.svg'  alt="caterpillar logo" width={200} height={100}/>
            </li>
            <li>
              <Image src='/gm.svg'  alt="General Motors logo" width={75} height={100}/>
            </li>
            <li>
              <Image src='/fluor.svg'  alt="Fluor logo" width={200} height={100}/>
            </li>
            <li>
              <Image src='/pepsico.svg'  alt="Pepsico logo" width={200} height={100}/>        
            </li>
            <li>
              <Image src='/lockheedmartin.svg'  alt="Lockheed logo" width={300} height={200}/>
            </li>
            <li>
              <Image src='/proctor.svg'  alt="Proctor and Gamble logo" width={100} height={100}/>
            </li>
            <li>
              <Image src='/pwc.svg'  alt="PWC logo" width={100} height={100}/>
            </li>
            <li>
              <Image src='/rockwell.svg'  alt="Rockwell logo" width={200} height={100}/>
            </li>
            <li>
              <Image src='/google.svg'  alt="google logo" width={200} height={100}/>
            </li>
            <li>
              <Image src='/exon.svg'  alt="Exonmobil logo" width={200} height={100}/>
            </li>
            <li>
              <Image src='/mircosoft.svg'  alt="Microsoft logo" width={200} height={100}/>
            </li>
            <li>
              <Image src='/bp.svg'  alt="BP logo" width={100} height={100}/>
            </li>
            <li>
              <Image src='/accenture.svg'  alt="accenture logo" width={200} height={100}/>
            </li>
            <li>
              <Image src='/capitol.svg'  alt="capital logo" width={200} height={100}/>
            </li>
            <li>
              <Image src='/cisco.svg'  alt="cisco logo" width={100} height={100}/>
            </li>
            <li>
              <Image src='/gold.svg'  alt="goldman sachs logo" width={175} height={100}/>
            </li>
            <li>
              <Image src='/technip.svg'  alt="technip logo" width={100} height={100}/>
            </li>
            <li>
              <Image src='/westerndig.svg'  alt="western digital logo" width={200} height={100}/>
            </li>

          </ul>
          <ul className='flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infiniteScroll group-hover:paused' aria-hidden="true">
            <li>
              <Image src='/caterpillar.svg'  alt="caterpillar logo" width={200} height={100}/>
            </li>
            <li>
              <Image src='/gm.svg'  alt="General Motors logo" width={75} height={100}/>
            </li>
            <li>
              <Image src='/fluor.svg'  alt="Fluor logo" width={200} height={100}/>
            </li>
            <li>
              <Image src='/pepsico.svg'  alt="Pepsico logo" width={200} height={100}/>        
            </li>
            <li>
              <Image src='/lockheedmartin.svg'  alt="Lockheed logo" width={300} height={200}/>
            </li>
            <li>
              <Image src='/proctor.svg'  alt="Proctor logo" width={100} height={100}/>
            </li>
            <li>
              <Image src='/pwc.svg'  alt="PWC logo" width={100} height={100}/>
            </li>
            <li>
              <Image src='/rockwell.svg'  alt="Rockwell logo" width={200} height={100}/>
            </li>
            <li>
              <Image src='/google.svg'  alt="google logo" width={200} height={100}/>
            </li>
            <li>
              <Image src='/exon.svg'  alt="Exon Mobil logo" width={200} height={100}/>
            </li>
            <li>
              <Image src='/mircosoft.svg'  alt="Microsoft logo" width={200} height={100}/>
            </li>
            <li>
              <Image src='/bp.svg'  alt="BP logo" width={100} height={100}/>
            </li>
            <li>
              <Image src='/accenture.svg'  alt="accenture logo" width={200} height={100}/>
            </li>
            <li>
              <Image src='/capitol.svg'  alt="capital logo" width={200} height={100}/>
            </li>
            <li>
              <Image src='/cisco.svg'  alt="cisco logo" width={100} height={100}/>
            </li>
            <li>
              <Image src='/gold.svg'  alt="goldman sachs logo" width={175} height={100}/>
            </li>
            <li>
              <Image src='/technip.svg'  alt="technip logo" width={100} height={100}/>
            </li>
            <li>
              <Image src='/westerndig.svg'  alt="western digital logo" width={200} height={100}/>
            </li>
          </ul>
        </div>  
      </div>
  );
}
