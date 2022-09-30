/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      'olive': '#C3CBA8',
      'olive-light': '#F6F6F7',
      'olive-dark': '#A3A78A',
    },
    extend: {},
  },
  plugins: [],
}
