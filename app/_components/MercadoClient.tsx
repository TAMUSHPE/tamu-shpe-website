'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface MercadoItem {
  title: string;
  price: number;
  image: string;
  link: string;
}

export default function MercadoClient({ items }: { items: MercadoItem[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000); // Change item every 5 seconds

    return () => clearInterval(interval);
  }, [items]);

  if (items.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="place-items-center gap-4 col-span-8 md:col-span-2 h-fit w-full rounded shadow-md shadow-gray-500/50 bg-stone-100 max-w-96 text-center">
      <h2 className="text-2xl font-bold py-4">SHPE Mercado</h2>
      <motion.div
        key={`item-${currentIndex}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
        <Link href={items[currentIndex].link}>
          <div className="flex md:flex-col flex-row-reverse justify-around">
            <div className="md:w-full h-56 pr-4 py-4 md:p-0 place-items-center">
              <Image
                src={items[currentIndex]?.image}
                alt="Mercado Image"
                width={1440}
                height={1080}
                className="h-full w-auto rounded-sm"
              />
            </div>
            <section className="size-auto flex flex-col text-left p-4">
              <h2 className="text-lg font-bold">{items[currentIndex]?.title ?? 'NO TITLE'}</h2>
              <h3 className="text-lg">${items[currentIndex]?.price ?? '0'}</h3>
            </section>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
