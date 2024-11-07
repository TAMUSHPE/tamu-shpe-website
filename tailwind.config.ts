import type { Config } from "tailwindcss";
import plugin from 'tailwindcss/plugin';


const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        infiniteScroll : 'infiniteScroll 30s linear infinite',
      },
      keyframes: {
        infiniteScroll : {
          from : {transform: 'translateX(0%)'},
          to : {transform : 'translateX(-100%)'},
        },
      },
      animatedPlayState: {
        'running' : 'running',
        'paused' : 'paused',
      },
    },
  },
  plugins: [

    plugin(function({addUtilities}) { 
      const newUtilities = {
        '.paused': {
          'animation-play-state': 'paused',
        },
        '.running': {
          'animation-play-state': 'running',
        },

      };
      addUtilities(newUtilities);
    }),
  ],
};
export default config;
