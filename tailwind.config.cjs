/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        secondary_light: "#0079d3",
        primary_light: "#ff4500",
      },
    },
  },
  plugins: [],
};
