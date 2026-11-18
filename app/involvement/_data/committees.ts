// ============================================================
// COMMITTEE DATA — edit this file each semester.
//
// TO CHANGE A DESCRIPTION: edit the `description` text below.
//   (If it is left empty, the card shows generic placeholder text.)
//
// TO CHANGE A PHOTO: put a .jpg in public/committees/ named after the
//   committee, e.g. public/committees/public-relations.jpg
//   The `photo` value below must match the filename (without .jpg).
//
// TO ADD / REMOVE / REORDER: add, delete, or move an entry in the list.
//   Cards appear on the site in the same order as this list.
//
// TEMPORARY / EVENT COMMITTEES: add the committee like any other, and when
//   it is dissolved set `active: false` instead of deleting it. It is hidden
//   from the site but stays here so you can bring it back next year
//   (set it back to `active: true`).
//   A committee with no photo yet is fine - the card shows a SHPE placeholder.
// ============================================================

export interface Committee {
  name: string;
  photo: string; // filename in public/committees/ without ".jpg"
  description: string; // text on the back of the card
  active: boolean; // true = shown on the site, false = hidden (kept here so it can be brought back)
}

export const committees: Committee[] = [
  { name: 'SHPEtinas', photo: 'shpetinas', description: 'Our committee of Latinas in SHPE! Here we plan, discuss, and develop any of our upcoming SHPEtinas events. If you want to have a say in what happens during our events, come out and support! Anyone and everyone is welcome to be a SHPEtina!', active: true },
  { name: 'MentorSHPE', photo: 'mentorshpe', description: '', active: true },
  { name: 'Public Relations', photo: 'public-relations', description: 'Help run TAMU SHPE’s social medias and take photos at events!', active: true },
  { name: 'Internal Affairs', photo: 'internal-affairs', description: 'The internal affairs committee helps to plan all the social, volunteering, and athletics events. Focusing on harboring the sense of community within SHPE making sure that every member feels welcome and accepted.', active: true },
  { name: 'Treasurer', photo: 'treasurer', description: 'Plan financial literacy workshops and fundraising events ', active: true },
  { name: 'External Affairs', photo: 'external-affairs', description: 'The External Affairs Committee exists to help plan and test activities for events while also growing volunteer skills and their bonds together!', active: true },
  { name: 'Technical Affairs', photo: 'technical-affairs', description: '', active: true },
  { name: 'Scholastic', photo: 'scholastic', description: 'Helps plan MentorSHPE events & Scholastic events, both in organizing and execution. They also help with the weekly MentorSHPE slides that are sent out to pairs. Lastly, they help find academic resources for the members.', active: true },
  { name: 'Secretary', photo: 'secretary', description: 'Secretary Committee is in charge of decorations such as the Photo Frame, event props, & banners. As well as the end of year scrapbook. ', active: true },
  { name: 'LeaderSHPE', photo: 'leadershpe', description: 'The perfect place to learn, develop, and practice your leadership skills. In the Fall, we focus on teaching and developing your leadership skills. In the Spring, we begin our "Officer for a Day Initiative" where we will be shadowing all 9 officers to see what it is like to be in their shoes for one day. This committee is open to anyone and everyone, with a focus on those who are interested in running for a SHPE officer position.', active: true },
  { name: 'Professional Development', photo: 'professional-development', description: '', active: true },
  {name: 'Web Development',photo: 'web-development',description:'Builds and maintains the tamuSHPE website. Members learn modern web development with React and Next.js while keeping our events, officers, and resources up to date.',active: true,},
  {name: 'App Development',photo: 'app-development',description:'Builds and maintains the tamuSHPE mobile app, where members check in to events and track their points. Members gain hands-on experience developing and shipping a real app.',active: true,},
];

// Missing descriptions for MentorSHPE, Technical Affairs, and Professional Development

export const committeePhotoPath = (photo: string) => `/committees/${photo}.jpg`;
