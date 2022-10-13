/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'accent': '#DFFC6E'
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
