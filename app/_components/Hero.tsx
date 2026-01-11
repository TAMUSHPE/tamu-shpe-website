import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className='relative w-full -mt-5 lg:-mt-16 overflow-hidden h-[40vh] sm:h-[80vh] md:h-screen'>
            {/* Adding the background photo to the hero section*/}
            <Image
                src='/Hero_bg.jpg'
                alt='tamu shpe background'
                fill
                className='object-cover'
                priority
            />

            {/* Black Gradiaent front left to right */}
            <div className='absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50' />

            {/* Content inside of the hero box */}
            <div className='relative z-10 flex flex-col h-full justify-center ml-24'>
                <div className='w-60 h-auto p-2'> 
                    <Image
                        src='/SHPE_Chapter_Logo_Vertical.svg'
                        alt='SHPE Chapter Logo'
                        width={234}
                        height={421}
                        className='w-full mb-2'
                    />

                    <div className='flex flex-col gap-2'>
                        <Link href='/about' className='bg-[#380001] text-white rounded-lg border border-white font-roboto font-bold text-2xl py-1 text-center'> About </Link>
                        <Link href='/involvement' className='bg-[#380001] text-white rounded-lg border border-white font-roboto font-bold text-2xl py-1 text-center'> Join Us! </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
