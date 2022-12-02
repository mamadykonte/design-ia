const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    extend: {
      fontFamily: {
        clash_display: ["var(--font-clash_display)", ...fontFamily.sans],
        epilogue: ["var(--font-epilogue)", ...fontFamily.sans],
      },
      backgroundImage: {
        "gradient-circle":
          "radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)",
        "gradient-mask":
          "url('/mask.png'),linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
      },
    },
  },
  plugins: [],
};
