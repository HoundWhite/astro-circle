/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'celestial-900': '#040308',
        'celestial-700': '#242B55',
        'celestial-500': '#3D4576',
        'celestial-450': '#656D9E',
        'celestial-300': '#93739C',
        'celestial-200': '#caaed6',
        'celestial-100': '#ECD5DD'
      },
    },
  },
  plugins: [],
}

