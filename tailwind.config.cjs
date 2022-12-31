/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        md: "568px",
      },
      fontFamily:{
        Quicksand: 'Quicksand, sans-seif'
      }
    },
  },
  plugins: [],
};
