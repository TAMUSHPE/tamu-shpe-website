'use client';

import Image from 'next/image';

type NewsletterBoxProps = {
  signupUrl: string;
};

export default function NewsletterBox({ signupUrl }: NewsletterBoxProps) {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-2xl border-4 border-black bg-white shadow-lg">
      {/* Header */}
      <div className="bg-black py-6 text-center">
        <h2 className="text-4xl font-extrabold text-white">
          Join Our Newsletter!
        </h2>
      </div>

      {/* Image */}
      <div className="p-6">
        <div className="overflow-hidden rounded-xl">
          <Image
            src="/SHPE_NEWSLETTER.png"
            alt="SHPE Newsletter"
            width={900}
            height={700}
            className="h-auto w-full"
            priority
          />
        </div>

        {/* Sign Up Button */}
        <div className="mt-8 flex justify-center">
          <a
            href={signupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-black px-16 py-4 text-3xl font-bold text-white shadow-md hover:opacity-90"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
}