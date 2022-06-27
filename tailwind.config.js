const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      mypeach: "#FEFAF4",
      mygray: "#D3D3D3",
      myblue: "#2E16B9",
      mylightblue: "#5B34DE",
    },
  },
  plugins: [],
});
