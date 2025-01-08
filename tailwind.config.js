/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montez: ['Montez', 'cursive'],
        pridi: ['Pridi', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;