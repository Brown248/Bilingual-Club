import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Concept: Ascend Tone
        primary: "#1F3C88",    // Navy Blue
        secondary: "#4F6EF7",  // Soft Blue
        accent: "#F5B700",     // Gold / Highlight
        background: "#FFFFFF", // Clean White
        textDark: "#1A1A1A",   // High Contrast Text
        textGray: "#6B7280",   // Soft Text
      },
      fontFamily: {
        // Head: Poppins
        heading: ['var(--font-poppins)', 'sans-serif'], 
        // Body: Inter
        body: ['var(--font-inter)', 'sans-serif'],
        // Default sans
        sans: ['var(--font-inter)', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
export default config;