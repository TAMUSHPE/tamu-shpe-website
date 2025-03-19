# TAMU SHPE Website

This is the official website for the [Society of Hispanic Professional Engineers](https://shpe.org/)' Texas A&M University chapter built using Next.js, React, Typescript, and Firebase. The website showcases events, announcements, sponsors, and membership information for the organization.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup & Installation](#setup--installation)
- [License](#license)

## Features

- Responsive design for desktop, tablet, and mobile devices
- Dynamic event calendar
- Search and filtering functionality for dynamic content
- Interactive forms for membership sign-ups and contact
- SEO and performance optimized with Next.js

## Technologies Used

- **Framework**: [Next.js](https://nextjs.org/)
- **Frontend**: [React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/)
- **Backend/Database**: [Firebase Firestore](https://firebase.google.com/)
- **Hosting**: [Netlify](https://www.netlify.com/)
- **Styling**: CSS Modules, [TailwindCSS](https://tailwindcss.com/), [Motion](https://motion.dev/)

## Setup & Installation

1. Clone the repository:

```bash
  git clone https://github.com/TAMUSHPE/tamu-shpe-website.git
  cd tamu-shpe-website
```

2. Install dependencies

```bash
  npm install
```

3. Set up enviornment variables. Create a **`.env.local`** file in the root directory and add the necessary api keys:

```bash
FLICKER_API_KEY=our-flickr-key
NEXT_PUBLIC_GOOGLE_API_KEY=our-firebase-key
NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY=our-calendar-key
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Run the development server

```bash
  npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) in your browser

## License

This project is licensed under the MIT License - see the [**`LICENSE`**](LICENSE) file for details.