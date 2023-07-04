const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono", "ui-monospace", "monospace"],
      },
      colors: {
        whiteButNotWhite: {
          DEFAULT: "#EFF9FC",
          200: "#C6D8DD",
          300: "#9AA6AA",
        },
        yellow: {
          50: "#FEFFF0",
          100: "#FDFFDB",
          200: "#FCFFBD",
          300: "#FAFF99",
          400: "#F8FF7A",
          500: "#F7FF56",
          600: "#F3FF14",
          700: "#C2CC00",
          800: "#838A00",
          900: "#3F4200",
          950: "#222400",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/hero.png)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat",
        },
        ".shadow-skill": {
          "box-shadow": "0px 15px 30px 0px rgba(0, 0, 0, 0.10)",
        },
      };

      addUtilities(utilities);
    }),
  ],
};
