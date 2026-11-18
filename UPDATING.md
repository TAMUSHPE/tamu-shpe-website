# Updating the Website

A "where do I change X?" guide for whoever maintains the site next.
For first-time setup (installing, env keys), see `README.md`.

All paths below are relative to the project root (`tamu-shpe-website-dev/`).
Run the site locally with `npm run dev` and open the address it prints
(usually http://localhost:3000). If a change doesn't show up, hard-refresh with Ctrl+Shift+R.

---

## Officers (About page)

- **Data:** `app/about/_data/officers.ts` — name, position, major, year, bio, quote,
  LinkedIn, Linktree, email, location. Cards appear in the same order as the list.
- **Photos:** `public/officers/<role>.jpg`, named after the role, not the person
  (`president.jpg`, `vice-president.jpg`, `secretary.jpg`, `treasurer.jpg`,
  `technical-affairs.jpg`, `public-relations.jpg`, `internal-affairs.jpg`,
  `external-affairs.jpg`, `academic-development.jpg`).
- The `photo` field in `officers.ts` is the filename without `.jpg`.

**Swap a photo:** from the project root run

```bash
scripts/add-officer-photo.sh president ~/Downloads/new-photo.png
```

It resizes the image, fixes phone-photo rotation, converts to `.jpg`, and saves it as
`public/officers/president.jpg`. Nothing in the code needs to change.
(Requires ImageMagick: the `magick` command.) You can also just drop a `.jpg` with the
right name into `public/officers/` by hand; the script only keeps file sizes small.

**LinkedIn links** must start with `https://`, or the link may break.

## Committees (Get Involved page)

- **Data:** `app/involvement/_data/committees.ts` — name, photo, description, active.
  Cards appear in list order. The comment at the top of the file repeats these steps.
- **Photos:** `public/committees/<committee>.jpg`. The `photo` field is the filename
  without `.jpg`. A committee with no photo shows a "SHPE" placeholder.
- **Description:** shown on the back of the card. If left empty, generic placeholder
  text is shown. Very long text may overflow the card, so flip it in the browser to check.

**Add a committee:** add an entry to the list with `active: true`.

**Dissolve a temporary/event committee:** set `active: false`. It disappears from the
site (and the photo collage) but stays in the file so you can bring it back later by
setting `active: true`. Don't delete it unless it will never return.

The collage at the top of the Get Involved page uses the list `collageSlugs` in
`app/involvement/page.tsx`. Only committees that are active *and* listed there appear in it.

## Home page

| What | Where |
|---|---|
| Hero banner image | `public/Hero_bg.jpg`, used in `app/_components/Hero.tsx` |
| Photo carousel | Flickr album ID in `app/_components/FlickrCarousel.tsx` |
| Weekly events photos | Flickr album ID in `app/_components/WeeklyEvents.tsx` |
| Five pillars text | `pillars` array in `app/_components/Pillars.tsx` |
| Sponsor logo strip | list at the top of `app/_components/SponsorCarousel.tsx`; SVGs in `public/sponsors/` |
| Points leaderboard | `app/_components/PointsTable.tsx`; data code in `app/api/firebaseUtils.ts` |
| Calendar | `app/_components/Calendar.tsx` (Google Calendar ID is in that file) |

To change a Flickr album, replace the album ID string with the new album's ID.

## Other pages

| Page | File | Notes |
|---|---|---|
| About | `app/about/page.tsx` | pillars text and national SHPE section |
| Get Involved | `app/involvement/page.tsx` | membership steps, `pointGroups` (points rules), app link; the intro video is in `app/involvement/_components/VideoBox.tsx` (YouTube embed) |
| Resources | `app/resources/page.tsx` | |
| Sponsor | `app/sponsor/page.tsx` | PDFs live in `public/pdf/` |
| Navbar links | `app/_components/Navbar.tsx` | `routeMap` array |
| Footer / social links | `app/_components/Footer.tsx` | icons in `public/socials/` |

## Things to review every year

- Sponsorship PDF in `public/pdf/` (currently "Sponsorship 2024-2025.pdf") and the
  constitution PDF, plus any links that point to them.
- Membership shirt links in `app/involvement/page.tsx` (they point to the 2024-2025 shirt).
- Leaderboard school-year dates and month columns (`app/api/firebaseUtils.ts` and
  `app/_components/PointsTable.tsx`).
- Sponsor logos in `public/sponsors/` and the list in `SponsorCarousel.tsx`.

## Environment keys

The Flickr photos, calendar and leaderboard need keys in a `.env.local` file in the
project root (never commit this file). The four variable names are listed in `README.md`.
Get the values from the previous maintainer or the SHPE Google/Flickr/Firebase accounts.
Without them those sections will be empty.

## Before publishing changes

```bash
npx tsc --noEmit   # catches typos in the data files
npm run build      # confirms the whole site builds
```

The site is hosted on Netlify (see `README.md`).
