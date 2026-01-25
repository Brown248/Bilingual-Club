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
        primary: "#1F3C88",
        secondary: "#4F6EF7",
        accent: "#F5B700",
        background: "#FFFFFF",
      },
      fontFamily: {
        sans: ['var(--font-inter)'], // Assuming Inter via next/font
      }
    },
  },
  plugins: [],
};
export default config;