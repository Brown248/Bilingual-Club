import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // บรรทัดนี้คือหัวใจสำคัญ ต้องเขียนแบบนี้
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F3C88",
        secondary: "#4F6EF7",
        accent: "#F5B700",
        background: "#FFFFFF",
        textDark: "#1A1A1A",
        textGray: "#6B7280",
      },
      fontFamily: {
        heading: ['var(--font-poppins)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;