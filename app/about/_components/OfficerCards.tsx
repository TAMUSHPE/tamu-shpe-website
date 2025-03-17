import OfficerCard from './OfficerCard';

export default function OfficerCards() {
  const officers = [
    {
      name: 'Selvin Diaz',
      position: 'President',
      major: 'Civil Engineering',
      year: '25',
      img: '/officers/president_headshot.jpg',
      quote:
        "SHPE empowers me to uplift my community, break barriers, and create opportunities. It's more than a network; it's a familia.",
      img2: '/officers/president_img2.jpg',
    },
    {
      name: 'Sebastian Luna',
      position: 'Vice President',
      major: 'Industrial and Systems Engineering',
      year: '25',
      img: '/officers/vp_headshot.jpg',
      quote:
        "SHPE empowers me to uplift my community, break barriers, and create opportunities. It's more than a network; it's a familia.",
      img2: '/officers/vp_img2.jpg',
    },
    {
      name: 'Gabriela Rivas',
      position: 'Secretary',
      major: 'Industrial and Systems Engineering',
      year: '25',
      img: '/officers/secretary_headshot.jpg',
      quote:
        "SHPE empowers me to uplift my community, break barriers, and create opportunities. It's more than a network; it's a familia.",
      img2: '/officers/secretary_img2.jpg',
    },
    {
      name: 'Andy Cano-Avila',
      position: 'Treasurer',
      major: 'Mechanical Engineering',
      year: '26',
      img: '/officers/treasurer_headshot.jpg',
      quote:
        "SHPE empowers me to uplift my community, break barriers, and create opportunities. It's more than a network; it's a familia.",
      img2: '/officers/treasurer_img2.jpg',
    },
    {
      name: 'Diego Landaeta',
      position: 'Director of Technical Affairs',
      major: 'Computer Science',
      year: '26',
      img: '/officers/tech_headshot.jpg',
      quote:
        "SHPE empowers me to uplift my community, break barriers, and create opportunities. It's more than a network; it's a familia.",
      img2: '/officers/tech_img2.jpg',
    },
    {
      name: 'Daniel Alvarado',
      position: 'Director of Public Relations',
      major: 'Mechatronics',
      year: '26',
      img: '/officers/pr_headshot.jpg',
      quote:
        "SHPE empowers me to uplift my community, break barriers, and create opportunities. It's more than a network; it's a familia.",
      img2: '/officers/pr_img2.jpg',
    },
    {
      name: 'Marianne Bautista',
      position: 'Director of Internal Affairs',
      major: 'Industrial Distribution',
      year: '25',
      img: '/officers/internal_headshot.jpg',
      quote:
        "SHPE empowers me to uplift my community, break barriers, and create opportunities. It's more than a network; it's a familia.",
      img2: '/officers/internal_img2.jpg',
    },
    {
      name: 'Esteban Ortiz',
      position: 'Director of External Affairs',
      major: 'Mechatronics',
      year: '25',
      img: '/officers/external_headshot.jpg',
      quote:
        "SHPE empowers me to uplift my community, break barriers, and create opportunities. It's more than a network; it's a familia.",
      img2: '/officers/external_img2.jpg',
    },
    {
      name: 'Daniel Martinez',
      position: 'Director of Academic Development',
      major: 'Mechanical Engineering',
      year: '25',
      img: '/officers/ad_headshot.jpg',
      quote:
        "SHPE empowers me to uplift my community, break barriers, and create opportunities. It's more than a network; it's a familia.",
      img2: '/officers/ad_img2.jpg',
    },
  ];

  return (
    <div className="h-fit bg-[#FD652F] w-full p-5">
      <h2 className="text-white text-3xl mb-3">Our Executive Board</h2>
      <div className="flex w-full bg-[#D43F27] p-5 overflow-x-scroll overflow-y-hidden gap-5 rounded-lg">
        {officers.map((officer) => {
          return <OfficerCard key={officer.name} {...officer} />;
        })}
      </div>
    </div>
  );
}
