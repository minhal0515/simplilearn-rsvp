/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        primary: '0A2D6F',
        primaryAlt: '#1E4BE0',
        accent: "#F5A623",
        highlight: "#00C6D7",
        accent: "#F7931E",
        muted: "#F5F7FA",
      },
      fontSize: {
        hero: ["48px", { lineHeight: "56px" }],
        section: ["32px", { lineHeight: "40px" }],
      }
    },
  },
  plugins: [],
}

