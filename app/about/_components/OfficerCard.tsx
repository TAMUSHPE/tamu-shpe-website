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
  quote: string;
  img2: string;
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
    <div onClick={handleFlip} className="cursor-pointer h-96 w-60 rounded-xl shrink-0" style={{ perspective: '1000px' }}>
      <motion.div
        className="w-full h-full bg-[#000000] shrink-0 rounded-xl "
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 360 }}
        transition={{ duration: 0.5, animationDirection: 'normal' }}
        onAnimationComplete={() => setIsAnimating(false)}
        style={{ transition: 'transform 0.6s', transformStyle: 'preserve-3d' }}
      >
        {/* Card Front */}
        <div
          className="px-3 py-4 w-full h-full absolute flex flex-col items-center justify-between text-center gap-2 shadow-[6px_7px_5px_0px_rgba(0,_0,_0,_0.25)] rounded-xl"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className = "h-full w-full bg-black border border-white rounded-xl flex flex-col items-center justify-center gap-2 p-3">
              <p className="text-white content-center">{props.position}</p>
            <div className="relative w-36 h-56 items-start">
              <Image src={props.img} alt={props.name} className="h-full w-full object-cover object-top rounded-lg" fill />
            </div>
            <div className="flex flex-col justify-center items-center w-full">
              <h3 className="text-white text-xl">{props.name}</h3>
              <p className="text-white text-sm">
                {props.major} {props.year}&apos;
              </p>
            </div>
          </div>
        </div>

        {/* Card Back */}
        <div
          className="w-full h-full absolute flex flex-col items-center justify-center text-center shadow-[6px_7px_5px_0px_rgba(0,_0,_0,_0.25)] rounded-xl"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <div className="relative h-[95%] w-[90%]">
            <Image src={props.img2} alt={props.name} className="h-full w-full object-cover object-top rounded-lg" fill />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
