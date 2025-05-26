/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background-rgb) / <alpha-value>)",
        foreground: "rgb(var(--foreground-rgb) / <alpha-value>)",
        primary: "#1a1a1a",
        secondary: "#4a4a4a",
        accent: "#f5b70a",
      },
    },
  },
  plugins: [],
};
