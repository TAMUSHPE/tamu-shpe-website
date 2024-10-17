'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-center w-full p-4 shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1)]">
      <ul className="flex gap-8">
        <li className="shrink-0">
          <Link href="/">
            <Image src="/horiz_logo.svg" alt="tamuSHPE Logo" width={100} height={100} />
          </Link>
        </li>
        <li className={pathname === '/about' ? 'font-bold' : ''}>
          <Link href="/about">About Us</Link>
        </li>
        <li className={pathname === '/involvement' ? 'font-bold' : ''}>
          <Link href="/involvement">Get Involved</Link>
        </li>
        <li className={pathname === '/resources' ? 'font-bold' : ''}>
          <Link href="/resources">Resources</Link>
        </li>
        <li className={pathname === '/sponsor' ? 'font-bold' : ''}>
          <Link href="/sponsor">SponsorSHPE</Link>
        </li>
      </ul>
    </nav>
  );
}
