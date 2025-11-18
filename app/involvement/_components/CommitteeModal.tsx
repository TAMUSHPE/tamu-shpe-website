'use client';
import { X } from 'lucide-react';
import React, { useEffect } from 'react';

export default function CommitteeModal({ open, onClose, committee }: any) {
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open || !committee) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop (lighter blur) */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-all duration-300"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-50 mx-4 w-full max-w-6xl overflow-hidden rounded-lg bg-white shadow-2xl transition-all duration-300 md:h-[75vh]">
        {/* Square close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-md bg-[#500000] text-white hover:bg-[#6a0000] transition"
        >
          <X className="h-5 w-5" strokeWidth={3.5}/> {/*x logo */}
        </button>

        <div className="grid h-full md:grid-cols-[38%_62%]">
          {/* Left image */}
          <div className="h-full">
            <img
              src={committee.img}
              alt={committee.name}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right content */}
          <div className="flex h-full flex-col justify-center p-8">
            {/* Title with maroon, thick underline under text only */}
            <h2
              className="inline-block pb-1 text-2xl font-extrabold"
              style={{
                textDecoration: 'underline',
                textDecorationColor: '#500000',
                textDecorationThickness: '3px',
                textUnderlineOffset: '7px',
              }}
            >
              {committee.name}
            </h2>

            {/* Description */}
            <p className="mb-4 text-sm leading-relaxed text-gray-700">
              {committee.description}
            </p>

            {/* Divider */}
            <hr className="mb-3 border-t-2 border-gray-600" />

            {/* Committee details */}
            <h3 className="mb-2 text-md font-bold">Committee Details</h3>
            <div className="space-y-2 text-sm">
              <div>📅 <b>Meets:</b> {committee.meets ?? 'TBD'}</div>
              <div>📍 <b>Location:</b> {committee.location ?? 'TBD'}</div>
              <div>🔓 <b>Open to:</b> {committee.openTo ?? 'TBD'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}




