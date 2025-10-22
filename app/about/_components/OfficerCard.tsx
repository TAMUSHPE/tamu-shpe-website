'use client';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useState } from 'react';
import emailjs from '@emailjs/browser'

export default function OfficerCard(props: {
  name: string;
  position: string;
  major: string;
  year: string;
  img: string;
  bio: string;
  quote: string;
  linkedin: string;
  linktree: string;
  email: string;
  location: string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsFlipped(!isFlipped);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  }

  return (
    <>
      <div onClick={handleFlip} className="cursor-pointer h-96 w-[290px] rounded-3xl  shrink-0" style={{ perspective: '1000px' }}>
        <motion.div
          className="w-full h-full bg-[#000000] shrink-0 rounded-3xl "
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.5, animationDirection: 'normal' }}
          onAnimationComplete={() => setIsAnimating(false)}
          style={{ transition: 'transform 0.6s', transformStyle: 'preserve-3d' }}
        >
          {/* Card Front */}
          <div
            className="bg-black absolute inset-0 px-3 py-4 w-full h-full flex flex-col items-center justify-between text-center gap-2 rounded-3xl overflow-hidden shadow-[6px_7px_5px_0px_rgba(0,_0,_0,_0.25)]"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="h-full w-full bg-black border border-white border-[3.5px] rounded-3xl flex flex-col items-center justify-center gap-2 p-1 bg-black">
              <div className="relative w-36 h-56 items-start">
                <Image src={props.img} alt={props.name} className="h-full w-full object-cover object-top rounded-lg" fill />
              </div>
              <div className="flex flex-col justify-center items-center w-full">
                <h3 className="text-white text-lg font-bold">{props.name}</h3>
                <p className="text-white content-center text-m ">{props.position}</p>
                <div className="flex w-full mt-2 justify-center gap-2">
                  <a href={props.linkedin} target="_blank" className=" w-9 h-9 flex items-center justify-center bg-white text-white rounded-full hover:bg-gray-500 transition">
                    <Image src="/logos/black_linkedin.png" alt="Linkedin" width={20} height={20} />
                  </a>
                  <a href={props.linktree} target="_blank" className=" w-9 h-9 flex items-center justify-center bg-white text-white rounded-full hover:bg-gray-500 transition">
                    <Image src="/logos/black_linktree.png" alt="Linktree" width={20} height={20} />
                  </a>

                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${props.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 flex items-center justify-center bg-white rounded-full hover:bg-gray-500 transition"
                  >
                    <Image src="/logos/black_mail.png" alt="Mail" width={20} height={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card Back */}
          <div
            className=" bg-black absolute inset-0 px-3 py-4 h-full w-full flex flex-col items-center justify-center text-center bg-black rounded-3xl shadow-[6px_7px_5px_rgba(0,0,0,0.25)]"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <div className=" bg-black h-full w-full bg-black border border-white border-[3px] rounded-xl flex flex-col items-center justify-between p-2">
              <div className="mt-4 flex flex-col items-center">
                <Image src="/logos/location.png" alt="location" width={30} height={30} />
                <p className="text-white text-[8px] font-semibold">{props.location}</p>
              </div>
              <div className="">
                <p className="text-white text-[13px] mb-6 font-bold">{props.bio}</p>
              </div>
              <div>
                <p className="text-slate-300 text-[13px]">{props.quote}</p>
              </div>
            </div>
          </div>
        </motion.div >
      </div >
    </>
  );
}
