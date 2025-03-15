import Image from 'next/image';

export default function OfficerCards() {
  const officers = [
    {
      name: 'Selvin Diaz',
      position: 'President',
      major: 'Civil Engineering',
      year: '25',
      img: '/president_headshot.jpg',
      quote:
        "SHPE empowers me to uplift my community, break barriers, and create opportunities. It's more than a network; it's a familia.",
    },
    {
      name: 'Sebastian Luna',
      position: 'Vice President',
      major: 'Industrial and Systems Engineering',
      year: '25',
      img: '/vp_headshot.jpg',
      quote:
        "SHPE empowers me to uplift my community, break barriers, and create opportunities. It's more than a network; it's a familia.",
    },
    {
      name: 'Gabriela Rivas',
      position: 'Secretary',
      major: 'Industrial and Systems Engineering',
      year: '25',
      img: '/secretary_headshot.jpg',
      quote:
        "SHPE empowers me to uplift my community, break barriers, and create opportunities. It's more than a network; it's a familia.",
    },
    {
      name: 'Andy Cano-Avila',
      position: 'Treasurer',
      major: 'Mechanical Engineering',
      year: '26',
      img: '/treasurer_headshot.jpg',
      quote:
        "SHPE empowers me to uplift my community, break barriers, and create opportunities. It's more than a network; it's a familia.",
    },
    {
      name: 'Diego Landaeta',
      position: 'Director of Technical Affairs',
      major: 'Computer Science',
      year: '26',
      img: '/tech_headshot.jpg',
      quote:
        "SHPE empowers me to uplift my community, break barriers, and create opportunities. It's more than a network; it's a familia.",
    },
    {
      name: 'Daniel Alvarado',
      position: 'Director of Public Relations',
      major: 'Mechatronics',
      year: '26',
      img: '/pr_headshot.jpg',
      quote:
        "SHPE empowers me to uplift my community, break barriers, and create opportunities. It's more than a network; it's a familia.",
    },
    {
      name: 'Marianne Bautista',
      position: 'Director of Internal Affairs',
      major: 'Industrial Distribution',
      year: '25',
      img: '/internal_headshot.jpg',
      quote:
        "SHPE empowers me to uplift my community, break barriers, and create opportunities. It's more than a network; it's a familia.",
    },
    {
      name: 'Esteban Ortiz',
      position: 'Director of External Affairs',
      major: 'Mechatronics',
      year: '25',
      img: '/external_headshot.jpg',
      quote:
        "SHPE empowers me to uplift my community, break barriers, and create opportunities. It's more than a network; it's a familia.",
    },
    {
      name: 'Daniel Martinez',
      position: 'Director of Academic Development',
      major: 'Mechanical Engineering',
      year: '25',
      img: '/ad_headshot.jpg',
      quote:
        "SHPE empowers me to uplift my community, break barriers, and create opportunities. It's more than a network; it's a familia.",
    },
  ];

  function OfficerCard(props: {
    name: string;
    position: string;
    major: string;
    year: string;
    img: string;
    quote: string;
  }) {
    return (
      <div className="flex flex-col text-center items-center gap-2 bg-[#1870B8] p-3 w-56 h-80 rounded-xl justify-evenly shrink-0">
        <p className="text-white h-14 content-center">{props.position}</p>
        <div className="relative w-32 h-48 items-start">
          <Image src={props.img} alt={props.name} className="h-full w-full object-cover object-top" fill />
        </div>
        <div className="flex flex-col justify-center items-center h-20 w-full">
          <h3 className="text-white text-xl">{props.name}</h3>
          <p className="text-white text-sm">
            {props.major} {props.year}&apos;
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-fit bg-[#FD652F] w-full p-5">
      <h2 className="text-white text-3xl mb-3">Our Executive Board</h2>
      <div className="flex w-full bg-[#D43F27] p-5 overflow-x-scroll gap-5">
        {officers.map((officer) => {
          return (
            <OfficerCard
              key={officer.name}
              name={officer.name}
              position={officer.position}
              major={officer.major}
              year={officer.year}
              img={officer.img}
              quote={officer.quote}
            />
          );
        })}
      </div>
    </div>
  );
}
