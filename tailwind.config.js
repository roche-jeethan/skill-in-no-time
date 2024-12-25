/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'pale-orange': '#ffe9b3', // Add your pale orange color
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

