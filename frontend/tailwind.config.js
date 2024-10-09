/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neonSunset: "#FF6C11",
        electricDream: "#FF3864",
        cyberAqua: "#2DE2E6",
        digitalVoid: "#261447",
        midnightAbyss: "#0D0221",
      },
    },
  },
  plugins: [],
};
