/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'new-blue': '#3a5878',
        'new-orange': '#f05d23',
        'new-darkblue': '#072140',
      },
    },
  },
  plugins: [],
}