import Image from 'next/image';

export default function CommitteesCards() {
  const commitees = [
    {
      name: 'Academic Development',
      img: '/ad_headshot.jpg',
      description:
        'The Academic Development Committee is responsible for providing resources and opportunities to help members succeed academically.',
    },
  ];

  function CommiteeCard(props: { name: string; img: string; description: string }) {
    return (
      <div className="bg-orange-600 w-52 h-72 pt-2 pb-5 rounded-xl flex flex-col justify-center items-center gap-2">
        <div className="relative h-full w-[90%]">
          <Image src={props.img} alt={props.name} className="h-full w-full object-cover object-top rounded-lg" fill />
        </div>
        <h2 className='text-xl font-semibold text-center'>{props.name}</h2>
      </div>
    );
  }

  return (
    <div className="w-full">
      <h1 className="text-2xl text-left font-semibold"> Check out our Committees! </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {commitees.map((commitee) => (
          <CommiteeCard key={commitee.name} {...commitee} />
        ))}
      </div>
    </div>
  );
}
