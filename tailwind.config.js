/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "ui-sans-serif", "sans-serif"],
        bebas: ["Bebas Neue", "ui-sans-serif", "sans-serif"],
      },
      backgroundImage: {
        main: "linear-gradient(rgba(0,0,0,.8),rgba(0,0,0,.8)),url('images/basketball-court-bg.jpg')",
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
        none: "none",
      },
      keyframes: {
        fade: {
          "0%": {
            opacity: "0",
          },

          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        fade: "fade 0.5s ease-in",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
