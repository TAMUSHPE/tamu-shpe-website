'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import type { FlickrPhoto } from '../api/flickrUtils';

export default function FlickrCarouselClient({ photos }: { photos: FlickrPhoto[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [photos]);

  if (photos.length === 0) {
    return <div>Loading...</div>;
  }

  function FlickrPhoto({ photo, index }: { photo: FlickrPhoto; index: number }) {
    const photoUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_b.jpg`;
    return (
      <motion.div
        key={photo.id}
        className={`relative w-auto flex shrink-0 ${index == currentIndex ? 'h-full' : 'h-3/4'}`}
        initial={{ x: '100%' }}
        animate={{ x: `${(index - currentIndex) * 50}px` }}
        transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
        style={{ aspectRatio: '3 / 2' }}
      >
        <Image
          src={photoUrl}
          alt="Flickr Photo"
          className="h-full object-contain drop-shadow-[0_4px_3px_rgba(0,0,0,.5)] select-none"
          quality={100}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          fill
        />
        <div
          className={`absolute inset-0 ${index < currentIndex && 'bg-gradient-to-l'} ${
            index > currentIndex && 'bg-gradient-to-r'
          } from-transparent to-[#cceaff]`}
        />
      </motion.div>
    );
  }

  return (
    <div className="h-64 w-full bg-[#cceaff] lg:col-span-6 xl:col-span-7 content-center overflow-hidden relative">
      <div className="flex flex-row justify-center items-center h-[90%] w-full -space-x-6">
        <AnimatePresence initial={false}>
          {[-1, 0, 1].map((offset) => {
            const index = (currentIndex + offset + photos.length) % photos.length;
            return <FlickrPhoto key={photos[index].id} photo={photos[index]} index={currentIndex + offset} />;
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
