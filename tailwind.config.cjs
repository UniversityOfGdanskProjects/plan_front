/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryLight' : '#D9D9D9',
        'secondaryLight': '#052d73',
        'primaryDark': '#333333',
        'secondaryDark': '#75C7FF',
        'textLight': '#00000065',
        'textDark': '#FFFFFF65',
        'red': '#FF928B',
        'yellow': '#EFE9AE',
        'blue': '#90DBF4',
        'green': '#CDEAC0'
      }
    },
  },
  plugins: [],
}
