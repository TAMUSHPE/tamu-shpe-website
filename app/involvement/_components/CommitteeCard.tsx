'use client';
import Image from 'next/image';
import { useState } from 'react';

type Committee = {
  name: string;
  img: string;
  description: string;
};

export default function CommitteeCard(props: Committee) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCommittee, setSelectedCommittee] = useState<Committee | null>(null);

  const openModal = (committee: Committee) => {
    setSelectedCommittee(committee);
    setModalIsOpen(true);
  };

  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setModalIsOpen(false);
    setSelectedCommittee(null);
  };

  return (
    <div className="bg-[#500000] w-52 h-72 pt-2 pb-5 rounded-xl flex flex-col shrink-0 justify-center items-center gap-2 cursor-pointer"onClick={() => openModal(props)}>
      <div className="relative h-full w-[90%]">
        <Image src={props.img} alt={props.name} className="h-full w-full object-cover object-top rounded-lg" fill sizes="(max-width: 768px) 100vw, 208px"/>
      </div>
      <h2 className="text-white text-xl font-semibold text-center">{props.name}</h2>
      
      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 cursor-default">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeModal}></div>
          <div className="flex bg-white rounded-xl shadow-2xl z-10 w-[90%] max-w-4xl max-h-[90vh] overflow-hidden">

            {selectedCommittee && (
              <>
                {/* Image Section*/}
                <div className="hidden md:block relative w-full md:w-2/5 min-h-[400px]">
                  <Image src={selectedCommittee.img} alt={selectedCommittee.name} className="object-cover"fill priority sizes="(max-width: 768px) 100vw, 40vw"/>
                </div>
                
                {/* Text Section */}
                <div className="relative w-full md:w-3/5 p-6 md:p-8 overflow-y-auto ">
                  <button className="absolute top-0 right-0 m-4 px-3 py-1 bg-[#500000] text-white rounded-lg hover:bg-[#300000] transition-colors"onClick={closeModal}>✕</button>
                  <div className="mt-4 space-y-6">
                    <h2 className="text-3xl font-bold text-[#500000]">{selectedCommittee.name}</h2>
                    <div className="prose max-w-none text-gray-700">
                      <p>{selectedCommittee.description}</p>
                    </div>
                    
                    {/* Mobile Image*/}
                    <div className="md:hidden relative w-full h-64 mt-4 rounded-lg overflow-hidden">
                      <Image src={selectedCommittee.img} alt={selectedCommittee.name} className="object-cover" fill/>
                    </div>
                    
                    {/*Committee Details*/}
                    <div className="pt-4 border-t border-gray-200">
                      <h3 className="font-semibold text-lg mb-2">Committee Details</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>📅 Meets #Fill in#</li>
                        <li>📍 #Fill in#</li>
                        <li>👥 Open to all students</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}