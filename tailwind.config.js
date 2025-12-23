/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jp-navy': '#0f2c4c',
        'jp-blue': '#005f99',
        'jp-gold': '#d4af37',
        'jp-cta': '#ff9900',
        'jp-ctaHover': '#e68a00',
        'jp-red': '#e60012',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'shimmer': 'shimmer 2s infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-card': 'float-card 4s ease-in-out infinite',
        'float-card-delayed': 'float-card 4s ease-in-out 2s infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'float-card': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        }
      }
    },
  },
  plugins: [],
}