'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function VideoBox() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const adjectives = [
    { text: 'empowering', color: 'text-red-500' },
    { text: 'supportive', color: 'text-green-500' },
    { text: 'inclusive', color: 'text-blue-500' },
    { text: 'innovative', color: 'text-purple-500' },
    { text: 'collaborative', color: 'text-yellow-500' },
    { text: 'dynamic', color: 'text-pink-500' },
    { text: 'motivating', color: 'text-orange-500' },
    { text: 'inspiring', color: 'text-teal-500' },
    { text: 'passionate', color: 'text-indigo-500' },
    { text: 'dedicated', color: 'text-lime-500' },
    { text: 'ambitious', color: 'text-amber-500' },
    { text: 'creative', color: 'text-cyan-500' },
    { text: 'resilient', color: 'text-emerald-500' },
    { text: 'visionary', color: 'text-fuchsia-500' },
    { text: 'enthusiastic', color: 'text-rose-500' },
    { text: 'driven', color: 'text-violet-500' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % adjectives.length);
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className="bg-[#500000] w-full h-[50vh] px-5 sm:px-10 py-10 lg:py-5 flex flex-col lg:flex-row min-h-fit gap-7 sm:gap-10 lg:gap-0">
      <div className="lg:h-full w-full lg:w-1/2 min-w-fit flex flex-col justify-center">
        <h1 className="text-white font-bold text-4xl mb-2 sm:text-6xl sm:mb-5 shrink-0">Why join the</h1>
        <h1 className="text-white font-bold text-4xl mb-3 sm:text-6xl sm:mb-5 shrink-0">#SHPEFamilia?</h1>
        <h2 className="text-white text-2xl sm:text-4xl">Be a part of something</h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <h2 className={`${adjectives[currentIndex].color} text-2xl sm:text-4xl font-semibold`}>
              {adjectives[currentIndex].text}
            </h2>
          </motion.div>
        </AnimatePresence>
      </div>
      <iframe
        className="h-52 sm:h-96 w-full lg:w-3/5 lg:h-full"
        src="https://www.youtube.com/embed/i4C1Gj9YnD8?si=sCufyKH9L9_6zYsM"
      />
    </div>
  );
}
