'use client';

import { useEffect, useState } from 'react';
import { FlickrPhoto } from '../api/flickrUtils';
import Image from 'next/image';

export default function WeeklyEventsClient({ photos }: { photos: FlickrPhoto[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPhoto = photos[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 15000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [photos, currentIndex]);

  if (photos.length === 0) {
    return <div>Loading...</div>;
  }

  const photoUrl = `https://live.staticflickr.com/${currentPhoto.server}/${currentPhoto.id}_${currentPhoto.secret}_b.jpg`;

  const numDots = photos.length === 1 ? 0 : Math.min(7, photos.length);

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-fit h-fit relative">
        <Image
          src={photoUrl}
          alt="Flickr Photo"
          width={1440}
          height={1080}
          className="lg:h-full lg:w-auto select-none"
          draggable={false}
        />

        {/* Navigation Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
          {Array.from({ length: numDots }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === index ? 'bg-white w-6' : 'bg-white/50 w-2'
              }`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        {currentIndex > 0 && (
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl drop-shadow"
            onClick={() => setCurrentIndex((prev) => prev - 1)}
          >
            ‹
          </button>
        )}
        {currentIndex < photos.length - 1 && (
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl drop-shadow"
            onClick={() => setCurrentIndex((prev) => prev + 1)}
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
}
