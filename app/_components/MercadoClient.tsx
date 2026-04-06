"use client";

import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { Caveat, Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });
const caveat = Caveat({ subsets: ["latin"], weight: ["400", "600", "700"] });

const PAGE_BG = "#FFFFFF";

// Scaled-down card dimensions to fit a ~50% column
const CARD_W = 136; // was 192
const CARD_H = 200; // was 288 (h-72)
const GAP    = 16;  // was 24
const STEP   = CARD_W + GAP;
const DURATION = 300;

interface MercadoItem {
  title: string;
  price: number;
  image: string;
  link: string;
}

function SingleCard({ item }: { item: MercadoItem }) {
  return (
    <section className="w-full col-span-6 flex flex-col items-center gap-4">
      <h2 className={`${roboto.className} text-center text-2xl font-semibold tracking-[0.05em]`}>
        SHPE MERCADO
      </h2>
      <div className="w-44 h-60 border rounded-xl bg-white shadow-lg flex flex-col items-center p-3">
        <Image src={item.image} alt={item.title} width={180} height={180} className="object-contain h-32 w-auto" />
        <p className="mt-2 font-medium text-center text-sm">{item.title}</p>
        <p className="text-gray-600 text-sm">${item.price.toFixed(2)}</p>
        <Link href={item.link} target="_blank"
          className="mt-2 bg-[#050320] text-white px-4 py-1.5 rounded-full text-xs hover:bg-[#18143d]">
          View Item →
        </Link>
      </div>
    </section>
  );
}

export default function MercadoClient({ items }: { items: MercadoItem[] }) {
  if (items.length === 0) return null;

  const baseItems = items.length === 2 ? [...items, items[0]] : items;
  if (baseItems.length === 1) return <SingleCard item={baseItems[0]} />;

  const count = baseItems.length;

  const extended = useMemo(() => {
    const leftClones  = baseItems.slice(-2);
    const rightClones = baseItems.slice(0, 2);
    return [...leftClones, ...baseItems, ...rightClones];
  }, [baseItems]);

  const [position, setPosition]       = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef    = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const moveNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPosition(prev => prev + 1);
  }, [isAnimating]);

  const movePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setPosition(prev => prev - 1);
  }, [isAnimating]);

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(moveNext, 4000);
  }, [moveNext]);

  useEffect(() => {
    resetTimer();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [resetTimer]);

  const handlePrev = () => { movePrev(); resetTimer(); };
  const handleNext = () => { moveNext(); resetTimer(); };

  const handleTransitionEnd = () => {
    const track = trackRef.current;
    if (!track) return;

    let newPosition = position;
    if (position >= count + 2) newPosition = 2;
    if (position <= 1)         newPosition = count + 1;

    if (newPosition !== position) {
      track.style.transition = "none";
      setPosition(newPosition);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          if (trackRef.current)
            trackRef.current.style.transition = `transform ${DURATION}ms cubic-bezier(0.4,0,0.2,1)`;
          setIsAnimating(false);
        })
      );
    } else {
      setIsAnimating(false);
    }
  };

  const translateX = -(position * STEP - 2 * STEP);

  // Card shell uses inline styles for the dynamic dimensions
  const cardShellClass = `${roboto.className} relative flex-shrink-0 rounded-lg border bg-white flex flex-col items-start justify-start overflow-hidden`;
  const cardShellStyle = { width: CARD_W, height: CARD_H, padding: 10 };

  return (
    <section className="w-full col-span-12 lg:col-span-6 flex flex-col items-center gap-1">
      <h2 className={`${roboto.className} text-center text-2xl font-semibold tracking-[0.05em]`}>
        SHPE MERCADO
      </h2>

      {/* Viewport height = card height + vertical padding */}
      <div className="relative w-full overflow-hidden" style={{ height: CARD_H + 48 }}>

        {/* Track */}
        <div
          ref={trackRef}
          onTransitionEnd={handleTransitionEnd}
          style={{
            position:      "absolute",
            top:           0,
            left:          "50%",
            marginLeft:    `${-(2 * STEP + CARD_W / 2)}px`,
            display:       "flex",
            alignItems:    "center",
            gap:           GAP,
            paddingTop:    24,
            paddingBottom: 24,
            transform:     `translate3d(${translateX}px, 0, 0)`,
            transition:    isAnimating
              ? `transform ${DURATION}ms cubic-bezier(0.4,0,0.2,1)`
              : "none",
            willChange: "transform",
          }}
        >
          {extended.map((item, i) => {
            const relative = i - position;
            const isCenter = relative === 0;
            const isLeft   = relative === -1;
            const isRight  = relative === 1;
            const isFar    = Math.abs(relative) >= 2;

            // Far cards: invisible spacers only
            if (isFar) {
              return (
                <div
                  key={`${item.link}-${i}`}
                  className={cardShellClass}
                  style={{ ...cardShellStyle, visibility: "hidden", pointerEvents: "none" }}
                />
              );
            }

            // Center card: link to product
            if (isCenter) {
              return (
                <Link
                  key={`${item.link}-${i}`}
                  href={item.link}
                  target="_blank"
                  className={`${cardShellClass} transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.02]`}
                  style={{ ...cardShellStyle, boxShadow: "0 4px 12px rgba(0,0,0,0.12)" }}
                >
                  <Image src={item.image} alt={item.title} width={180} height={180}
                    className="object-contain w-auto self-center" style={{ height: CARD_H * 0.55 }} />
                  <div className="mt-auto w-full">
                    <p className="font-bold text-xs whitespace-nowrap overflow-hidden text-ellipsis">{item.title}</p>
                    <p className="text-xs font-medium text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </Link>
              );
            }

            // Side cards: clickable, advances carousel
            return (
              <button
                key={`${item.link}-${i}`}
                type="button"
                onClick={isLeft ? handlePrev : handleNext}
                className={`${cardShellClass} cursor-pointer transition-transform duration-200 hover:-translate-y-1 hover:scale-[1.02]`}
                style={{
                  ...cardShellStyle,
                  boxShadow: isLeft
                    ? "4px 0 8px rgba(0,0,0,0.09)"
                    : "-4px 0 8px rgba(0,0,0,0.09)",
                }}
              >
                <Image src={item.image} alt={item.title} width={140} height={140}
                  className="object-contain w-auto self-center" style={{ height: CARD_H * 0.48 }} />
                <div className="mt-auto w-full">
                  <p className="font-bold text-xs whitespace-nowrap overflow-hidden text-ellipsis">{item.title}</p>
                  <p className="text-xs font-medium text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                {/* Light edge fade */}
                <div
                  className="absolute inset-0 pointer-events-none rounded-lg"
                  style={{
                    background: isLeft
                      ? `linear-gradient(to right, ${PAGE_BG} 0%, ${PAGE_BG}99 15%, transparent 60%)`
                      : `linear-gradient(to left,  ${PAGE_BG} 0%, ${PAGE_BG}99 15%, transparent 60%)`,
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* Thin edge masks */}
        <div className="absolute inset-y-0 left-0 w-5 pointer-events-none z-10"
          style={{ background: `linear-gradient(to right, ${PAGE_BG}, transparent)` }} />
        <div className="absolute inset-y-0 right-0 w-5 pointer-events-none z-10"
          style={{ background: `linear-gradient(to left, ${PAGE_BG}, transparent)` }} />

        {/* Arrow buttons */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous item"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-7 h-7 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 shadow-sm hover:bg-white hover:shadow-md active:scale-95 transition-all duration-150"
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button
          type="button"
          onClick={handleNext}
          aria-label="Next item"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-7 h-7 rounded-full border border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 shadow-sm hover:bg-white hover:shadow-md active:scale-95 transition-all duration-150"
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <Link
        href="https://sofctamu.estore.flywire.com/products?storeCatalog=23327"
        target="_blank"
        className={`${caveat.className} -mt-2 rounded-full bg-[#050320] text-white px-8 py-1.5 text-base hover:bg-[#18143d]`}
      >
        Shop →
      </Link>
    </section>
  );
}
