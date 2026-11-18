// ============================================================
// OFFICER DATA — edit this file each semester.
//
// PHOTOS: put each photo in public/officers/ named after the role,
// e.g. public/officers/president.jpg  (must be .jpg).
// Easiest way:  scripts/add-officer-photo.sh president ~/Downloads/new.png
// The `photo` value below must match that filename (without .jpg).
// ============================================================

export interface Officer {
  name: string;
  position: string;
  major: string;
  year: string;
  photo: string; // filename in public/officers/ without ".jpg"
  bio: string;
  quote: string;
  linkedin: string;
  linktree: string;
  email: string;
  location: string;
}
 // Created to make uploading and changing pictures in the future easier. 
 //When uploading new Officer Fotos into /public/officers
 //The name of the picture determines where it ends up
export const officers: Officer[] = [
  {
    name: 'Alvaro Camacho',
    position: 'President',
    major: 'Electrical Engineering',
    year: '27',
    photo: 'president',
    bio: "Howdy! My name is Alvaro Camacho and I am a Senior Electrical Engineering major from Katy Texas! In my free time I like to play and watch futbol, play video games, golf, or salsa dance! Feel free to talk to me about all sorts of sports and music! I love talking about new things!",
    quote: `"Tell me and I forget, teach me and I may remember, involve me and I learn" - Benjamin Franklin`,
    linkedin: 'https://www.linkedin.com/in/alvaro-jose-camacho-02b921296/',
    linktree: 'https://linktr.ee/alvaro.j.camacho.h?utm_source=qr_code', 
    email: 'alvarojcamacho0718@tamu.edu',
    location: 'Katy ,TX',
  },
  {
    name: 'Alejandra Patlan',
    position: 'Vice President',
    major: 'Manufacturing and Mechanical Engineering',
    year: '27',
    photo: 'vice-president',
    bio: "Howdy! Super excited to help our members grow this year and have more wonderful memories with the rest of SHPE.",
    quote: `Everything is achievable if you put your mind on it `,
    linkedin: 'https://www.linkedin.com/in/andy-cano-avila/',
    linktree: 'https://linktr.ee/ale.patlan?utm_source=qr_code',
    email: 'ale_nat_patlan13@tamu.edu',
    location: 'McAllen, TX',
  },
  {
    name: 'Lupita Cruz',
    position: 'Secretary',
    major: 'Manufacturing and Mechanical Engineering',
    year: '27',
    photo: 'secretary',
    bio: "Howdy!! My name is Lupita Cruz, and I'm a Senior Manufacturing and Mechanical Engineering major from Houston, Texas! I love a good pensive walk, playlists, and coffee. Super excited for this year, please don't hesitate to say hi! ",
    quote: `"Life doesn't always reward you immediately for working hard. Have grit." - Kay Chung`,
    linkedin: 'https://www.linkedin.com/in/lupita-cruz-6a39472a5/',
    linktree: 'https://linktr.ee/lupitacruzsecretary?utm_source=qr_code',
    email: 'Lc777@tamu.edu',
    location: 'Houston, TX',
  },
  {
    name: 'Teyuris Mata Altuve',
    position: 'Treasurer',
    major: 'Industrial Distribution',
    year: '27',
    photo: 'treasurer',
    bio: "Howdy! My name is Teyuris Mata Altuve, and I'm a Senior Industrial Distribution major from Katy,TX! In my free time, I love salsa dancing, swimming, meeting new people, and traveling to new places with my friends and family.",
    quote: `"Son unos soles, nunca se apaguen ☀️"`,
    linkedin: 'https://www.linkedin.com/in/teyuris-mata',
    linktree: 'https://linktr.ee/teyuris21?utm_source=qr_code',
    email: 'teyuris21@tamu.edu',
    location: 'Katy, TX',
  },
  {
    name: 'Sara Carrero',
    position: 'Director of Technical Affairs',
    major: 'Biomedical Engineering',
    year: '27',
    photo: 'technical-affairs',
    bio: "Howdy! My name is Sara Carrero and I am a Biomedical Engineering major in the class of '27. I was born in Bogota, Colombia, but moved to the Houston area when I was 8 years old. I love reading, going to coffee shops, and learning new fun facts. So excited for this year!",
    quote: `"Sometimes the best way to solve your own problems is to help someone else." - Uncle Iroh`,
    linkedin: 'https://www.linkedin.com/in/sara-carrero-',
    linktree: 'https://linktr.ee/saricarrero',
    email: 'saracarrero@tamu.edu',
    location: 'Houston, TX',
  },
  {
    name: 'Carlos Davila-Campos',
    position: 'Director of Public Relations',
    major: 'Architectural Engineering',
    year: '27',
    photo: 'public-relations',
    bio: "Howdy! My name is Carlos Davila-Campos and I study Architectural Engineering and Industrial Design. I was born in Venezuela but raised in Texas. I’m into rock climbing, sports, and music.",
    quote: `"The coolest thing is when you don't care about being cool"`,
    linkedin: 'https://www.linkedin.com/in/carlos-davila-campos',
    linktree: 'https://linktr.ee/carlosdavilacampos',
    email: 'carlosed3005@tamu.edu',
    location: 'Katy, TX',
  },
  {
    name: 'Santiago Carrasco',
    position: 'Director of Internal Affairs',
    major: 'Aerospace Engineering',
    year: '27',
    photo: 'internal-affairs',
    bio: "Howdy! My name is Santiago Carrasco, I'm an Aerospace Engineering major in the class of '27! I was born in Caracas, Venezuela. In my free time I enjoy reading, watching TV, and playing soccer.",
    quote: `"Pressure is a privilege."`,
    linkedin: 'https://www.linkedin.com/in/carrasco-santiago/',
    linktree: 'https://linktr.ee/santiagocarrasco?utm_source=qr_code',
    email: 'santiagocarrasco1809@tamu.edu',
    location: 'Frisco, TX',
  },
  {
    name: 'Daniel Mendez',
    position: 'Director of External Affairs',
    major: 'Mechanical Engineering',
    year: '28',
    photo: 'external-affairs',
    bio: "Howdy! My name is Daniel Mendez, and I am a Junior Mechanical Engineer from Houston, Texas! I love to stay informed on societal issues, play sports, eat, and do anything with the lovely people around me. However, my favorite thing to do is be giving and helpful to those around me, so feel free to come talk to me! Here for ya, always :)",
    quote: `“People hate their own art because it looks like they made it. They think if they get better, it will stop looking like they made it. A better person made it. But there's no level of skill beyond which you stop being you. You hate the most valuable thing about your art.” - Elicia Donze`,
    linkedin: 'https://www.linkedin.com/in/danielmdz-career',
    linktree: 'https://linktr.ee/danielmendez?utm_source=qr_code',
    email: 'danielmdz@tamu.edu',
    location: 'Houston, TX',
  },
  {
    name: 'Karyme Perez',
    position: 'Director of Academic Development',
    major: 'Chemical Engineering',
    year: '28',
    photo: 'academic-development',
    bio: "Howdy! My name is Karyme Perez and I am a Senior Construction Science major from Fort Worth Texas! In my free time I like to watch anime, play volleyball and pickleball, and just hang out with my friends. I'm excited to meet everyone this year, so feel free to reach out to me anytime!",
    quote: `"No two paths will ever look the same. The beauty in that is everyone decides their own future and what success and growth mean to them.:"`,
    linkedin: 'https://www.linkedin.com/in/karyme-perez',
    linktree: 'https://linktr.ee/karymepb?utm_source=qr_code',
    email: 'Karymepb@tamu.edu',
    location: 'Fort Worth, TX',
  },
];
