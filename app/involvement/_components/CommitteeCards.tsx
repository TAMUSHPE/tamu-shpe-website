import Image from 'next/image';

export default function CommitteesCards() {
  const commitees = [
    {
      name: 'SHPEtinas',
      img: '/committees/shpetinas.jpg',
      description: 'The SHPEtinas Committee is dedicated to empowering and supporting Latinas in STEM.',
    },
    {
      name: 'MentorSHPE',
      img: '/committees/mentorshpe.jpg',
      description: 'The MentorSHPE Committee is responsible for connecting underclassmen with upperclassmen members.',
    },
    {
      name: 'Public Relations',
      img: '/committees/pr.jpg',
      description: 'The Public Relations Committee is responsible for promoting SHPE and its events.',
    },
    {
      name: 'Internal Affairs',
      img: '/committees/internal.jpg',
      description: 'The Internal Affairs Committee is responsible for planning social events and member bonding.',
    },
    {
      name: 'Treasurer',
      img: '/committees/treasurer.jpg',
      description: 'The Treasurer Committee is responsible for managing our finances and budget.',
    },
    {
      name: 'External Affairs',
      img: '/committees/external.jpg',
      description: 'The External Affairs Committee is responsible for volunteering and outreach events.',
    },
    {
      name: 'Technical Affairs',
      img: '/committees/tech.jpg',
      description:
        'The Technical Affairs Committee is responsible for providing technical workshops and resources to members.',
    },
    {
      name: 'Scholastic',
      img: '/committees/scholastic.jpg',
      description:
        'The Scholastic Committee is responsible for providing resources and opportunities to help members succeed academically.',
    },
    {
      name: 'Secretary',
      img: '/committees/secretary.jpg',
      description: 'The Secretary Committee is responsible for taking notes and keeping records of meetings.',
    },
    {
      name: 'LeaderSHPE',
      img: '/committees/leadershpe.jpg',
      description: 'The LeaderSHPE Committee is responsible for developing leadership skills in members.',
    },
    {
      name: 'Professional Development',
      img: '/committees/profdev.jpg',
      description:
        'The Professional Development Committee is responsible for connecting members with professional opportunities.',
    },
    {
      name: 'Web Development',
      img: '/committees/webdev.jpg',
      description:
        'The Web Development Committee is responsible for maintaining and updating our website and digital resources.',
    },
    {
      name: 'App Development',
      img: '/committees/appdev.jpg',
      description: 'The App Development Committee is responsible for developing and maintaining our mobile app.',
    },
  ];

  function CommiteeCard(props: { name: string; img: string; description: string }) {
    return (
      <div className="bg-orange-600 w-52 h-72 pt-2 pb-5 rounded-xl flex flex-col shrink-0 justify-center items-center gap-2">
        <div className="relative h-full w-[90%]">
          <Image src={props.img} alt={props.name} className="h-full w-full object-cover object-top rounded-lg" fill />
        </div>
        <h2 className="text-xl font-semibold text-center">{props.name}</h2>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h1 className="text-2xl text-left font-semibold mb-5"> Check out our Committees! </h1>
      <div className="flex flex-row flex-wrap gap-8">
        {commitees.map((commitee) => (
          <CommiteeCard key={commitee.name} {...commitee} />
        ))}
      </div>
    </div>
  );
}
