/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b0e15",
        secondary_dark: "#181b22",
        secondary_ligth: "#1e212a",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
