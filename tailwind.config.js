/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1E1E1E",
        primary: "#0B4F6C",
        secondary: "#05374D",
        tertiary: "#087E8B",
        quaternary: "#12B4C5",
        light: "#FBFBFF",
      },
      margin: {
        mobile: "3rem",
        tablet: "2rem",
        desktop: "1rem",
      },
      padding: {
        mobile: "3rem",
        tablet: "2rem",
        desktop: "1rem",
      },
      transitionDelay: {
        primary: "200ms",
      },
    },
  },
  plugins: [require("tailwindcss-hyphens")],
};
