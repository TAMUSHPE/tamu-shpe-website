
'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

const adjectives = [
  { text: 'greater', color: 'text-[#D23F26]' },
  { text: 'empowering', color: 'text-red-500' },
  { text: 'supportive', color: 'text-green-600' },
  { text: 'inclusive', color: 'text-blue-600' },
  { text: 'innovative', color: 'text-purple-600' },
  { text: 'collaborative', color: 'text-yellow-600' },
  { text: 'dynamic', color: 'text-pink-600' },
  { text: 'motivating', color: 'text-orange-600' },
  { text: 'inspiring', color: 'text-teal-600' },
  { text: 'passionate', color: 'text-indigo-600' },
  { text: 'dedicated', color: 'text-lime-600' },
  { text: 'ambitious', color: 'text-amber-600' },
  { text: 'creative', color: 'text-cyan-600' },
  { text: 'resilient', color: 'text-emerald-600' },
  { text: 'visionary', color: 'text-fuchsia-600' },
  { text: 'enthusiastic', color: 'text-rose-600' },
  { text: 'driven', color: 'text-violet-600' },
];

export default function VideoBox() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % adjectives.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white flex flex-col lg:flex-row items-center gap-6 lg:gap-8">

      {/* LEFT: WHY JOIN TEXT */}
      <div className="w-full lg:w-[36%] flex flex-col justify-center px-2 sm:px-4 py-6 lg:py-10">

        <h2 className="text-[#151515] font-black italic text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5">
          Why Join the
          <br />
          #SHPEfamilia?
        </h2>

        <p className="text-[#444444] text-xl sm:text-2xl lg:text-3xl">
          Be a part of something
        </p>

        <div
          className="min-h-[52px] mt-1"
          aria-live="off"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25 }}
            >
              <span
                className={`${adjectives[currentIndex].color} text-2xl sm:text-3xl lg:text-4xl font-bold`}
              >
                {adjectives[currentIndex].text}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* RIGHT: VIDEO */}
      <div className="w-full lg:w-[64%] aspect-video bg-[#151515] rounded-lg overflow-hidden shadow-sm">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/i4C1Gj9YnD8?si=sCufyKH9L9_6zYsM"
          title="Why Join TAMU SHPE?"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}
