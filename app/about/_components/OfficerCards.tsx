import OfficerCard from './OfficerCard';
import { officers } from '../_data/officers';

export default function OfficerCards() {
  return (
    <div className="w-full max-w-[1450px] mx-auto mb-8">
      <div className="flex flex-wrap justify-center gap-4">
        {officers.map(({ photo, ...officer }) => (
          <div
            key={officer.position}
            className="
              w-full
              max-w-[270px]
              sm:w-[calc((100%_-_1rem)/2)]
              md:w-[calc((100%_-_2rem)/3)]
              lg:w-[calc((100%_-_4rem)/5)]
              min-w-0
            "
          >
            <OfficerCard {...officer} img={`/officers/${photo}.jpg`} />
          </div>
        ))}
      </div>
    </div>
  );
}
