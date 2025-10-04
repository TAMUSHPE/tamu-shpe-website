'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function OfficerCard(props: {
  name: string;
  position: string;
  major: string;
  year: string;
  img: string;
  bio: string;
  quote: string;
  linkedin:string;
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsFlipped(!isFlipped);
      setTimeout(() => setIsAnimating(false), 1000);
    }
  }

  return (
    <div onClick={handleFlip} className="cursor-pointer h-96 w-[289px] rounded-3xl  shrink-0" style={{ perspective: '1000px' }}>
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
          className="absolute inset-0 px-3 py-4 w-full h-full flex flex-col items-center justify-between text-center gap-2  rounded-3xl overflow-hidden shadow-[6px_7px_5px_0px_rgba(0,_0,_0,_0.25)]"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className = "h-full w-full bg-black border border-white border-[3px] rounded-xl flex flex-col items-center justify-center gap-2 p-3">
            <div className="relative w-36 h-56 items-start">
              <Image src={props.img} alt={props.name} className="h-full w-full object-cover object-top rounded-lg" fill />
            </div>
            <div className="flex flex-col justify-center items-center w-full">
              <h3 className="text-white text-lg font-bold">{props.name}</h3>
              <p className="text-white content-center text-sm ">{props.position}</p>
              <div className="flex w-full mt-2 justify-around">
                <a href= {props.linkedin} target = "_blank" className=" w-10 h-10 flex items-center justify-center bg-gray-500 text-white rounded-full hover:bg-gray-600 transition">
                  <Image src = "/logos/icons8-linkedin-49.png" alt = "Linkedin" width = {30} height = {30}/>
                </a>
              </div> 
            </div>
          </div>
        </div>

        {/* Card Back */}
        <div
          className="absolute inset-0 px-3 py-4 h-full w-full flex flex-col items-center justify-center text-center bg-black rounded-3xl shadow-[6px_7px_5px_rgba(0,0,0,0.25)]"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        > 
          <div className = "h-full w-full bg-black border border-white border-[3px] rounded-xl flex flex-col items-center justify-center p-3">
            <h2 className = "text-white text-2xl font-bold">{props.name}</h2>
            <p className = "text-white text-[11px] font-semibold mb-5">{props.major} '{props.year}</p>
            <p className  = "text-white text-[11px] mb-2">{props.bio}</p>
            <p className="text-white text-gray-500 text-[10px] mb-2">{props.quote}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
