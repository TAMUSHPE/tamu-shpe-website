import OfficerCard from './OfficerCard';

export default function OfficerCards() {
  const officers = [
    {
      name: 'Marianne Bautista',
      position: 'President',
      major: 'Industrial Distribution',
      year: '25',
      img: '/officers/president_headshot.jpg',
      quote:
        "Failure isn't the opposite of success - it's part of it.",
      img2: '/officers/president_img2.jpg',
    },
    {
      name: 'Andy Cano-Avila',
      position: 'Vice President',
      major: 'Mechanical Engineering',
      year: '26',
      img: '/officers/vp_headshot.jpg',
      quote:
        "Dont be upset when you have a lot on your plate, your goal was to eat",
      img2: '/officers/vp_img2.jpg',
    },
    {
      name: 'Joelda Alcaraz',
      position: 'Secretary',
      major: 'Civil Engineering',
      year: '27',
      img: '/officers/secretary_headshot.jpg',
      quote:
        "Cada día es una nueva página en tu historia, escribe algo increíble.",
      img2: '/officers/secretary_img2.jpg',
    },
    {
      name: 'Jonathan Rodezno',
      position: 'Treasurer',
      major: 'Industrial Distribution',
      year: '26',
      img: '/officers/treasurer_headshot.jpg',
      quote:
        "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present - Master Oogway",
      img2: '/officers/treasurer_img2.jpg',
    },
    {
      name: 'Alvaro Camacho',
      position: 'Director of Technical Affairs',
      major: 'Electrical Engineering',
      year: '26',
      img: '/officers/tech_headshot.jpg',
      quote:
        "Tell me and I forget, teach me and I may remember, involve me and I learn - Benjamin Franklin",
      img2: '/officers/tech_img2.jpg',
    },
    {
      name: 'Ivan Cardenas',
      position: 'Director of Public Relations',
      major: 'Industrial Distribution',
      year: '27',
      img: '/officers/pr_headshot.jpg',
      quote:
        "If the hurt comes so will the happiness -be patient - Rupi Kaur",
      img2: '/officers/pr_img2.jpg',
    },
    {
      name: 'Anthony Santamaria Galindo',
      position: 'Director of Internal Affairs',
      major: 'Aerospace Engineering',
      year: '27',
      img: '/officers/internal_headshot.jpg',
      quote:
        "Ponte las pilas - momma",
      img2: '/officers/internal_img2.jpg',
    },
    {
      name: 'Alejandra Patlan',
      position: 'Director of External Affairs',
      major: 'Manufacturing Engineering',
      year: '27',
      img: '/officers/external_headshot.jpg',
      quote:
        "Youth is something I never wanna take for granted. I just want to smile and live life. - Tyler, The Creator",
      img2: '/officers/external_img2.jpg',
    },
    {
      name: 'Oscar Rios',
      position: 'Director of Academic Development',
      major: 'Chemical Engineering',
      year: '28',
      img: '/officers/ad_headshot.jpg',
      quote:
        "I believe success is achieved by ordinary people with extraordinary determination. - Zig Ziglar",
      img2: '/officers/ad_img2.jpg',
    },
  ];

  return (
      <div className="flex w-full p-5 gap-5 ">
        {officers.map((officer) => {
          return <OfficerCard key={officer.name} {...officer} />;
        })}
      </div>
  );
}
