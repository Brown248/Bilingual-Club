import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        brand: {
          orange: 'var(--color-brand-orange)',
          'orange-hover': 'var(--color-brand-orange-hover)',
          yellow: 'var(--color-brand-yellow)',
          'yellow-soft': 'var(--color-brand-yellow-soft)',
          green: 'var(--color-brand-green)',
          'green-light': 'var(--color-brand-green-light)',
          white: 'var(--color-brand-white)',
          gray: 'var(--color-brand-gray-light)',     // พื้นหลัง
          'gray-line': 'var(--color-brand-gray-medium)', // เส้นขอบ
          black: 'var(--color-brand-black)',
        }
      },
      animation: {
        'float-organic': 'float-organic 8s ease-in-out infinite',
        'fade-scale': 'fade-scale-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-soft': 'soft-pulse 2s infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'bounce-slight': 'bounce-slight 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
      },
      keyframes: {
        'float-organic': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(10px, -15px) rotate(2deg)' },
          '66%': { transform: 'translate(-5px, 10px) rotate(-1deg)' },
        },
        'fade-scale-up': {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'soft-pulse': {
          '0%': { boxShadow: '0 0 0 0 rgba(255, 159, 28, 0.4)' },
          '70%': { boxShadow: '0 0 0 10px rgba(255, 159, 28, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(255, 159, 28, 0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'bounce-slight': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        }
      },
      // เพิ่มเงาให้ดูนุ่มนวลขึ้น (Soft Shadow)
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(255, 159, 28, 0.3)',
      }
    },
  },
  plugins: [],
};
export default config;