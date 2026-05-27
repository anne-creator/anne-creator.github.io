/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DEDBC8',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
      },
      boxShadow: {
        glow: '0 20px 80px rgba(222, 219, 200, 0.16)',
      },
    },
  },
  plugins: [],
};
