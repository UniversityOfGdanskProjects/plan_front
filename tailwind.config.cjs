/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primaryLight' : '#D9D9D9',
        'secondaryLight': '#052d73',
        'primaryDark': '#191C27',
        'secondaryDark': '#26283B',
        'textLight': '#191C27',
        'textDark': '#D9D9D9',
        'red': '#FF928B',
        'yellow': '#EFE9AE',
        'blue': '#90DBF4',
        'green': '#CDEAC0'
      }
    },
  },
  plugins: [],
}
