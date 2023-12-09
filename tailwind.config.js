/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: {
        light: "#a8a4ff",
        DEFAULT: "#635fc7",
        medium: "#635fc740",
        low: "#635fc71a",
      },
      red: {
        light: "#ff9898",
        DEFAULT: "#ea5555",
      },
      grey: {
        light: "#f4f7fd",
        medium: "#828fa3",
        dark: "#2b2c37",
        vdark: "#20212c",
      },
      lines: {
        light: "#eaebfa",
        dark: "#3e3f4e",
      },
      black: "#000112",
    },
    fontSize: {
      ms: "1.3rem",
      sm: "1.2rem",
      md: "1.5rem",
      lg: "1.8rem",
      lx: "2rem",
      xl: "2.4rem",
    },
    lineHeight: {
      ms: "2.3rem",
      sm: "1.5rem",
      md: "1.9rem",
      lg: "2.3rem",
      lx: "2.5rem",
      xl: "3rem",
    },
    letterSpacing: {
      sm: ".24rem",
    },
    extend: {
      spacing: {
        0.8: "0.8rem",
        1.2: "1.2rem",
        1.6: "1.6rem",
        2.4: "2.4rem",
        3.2: "3.2rem",
        4.8: "4.8rem",
        34.3: "34.3rem",
        48: "48rem",
      },
      borderRadius: {
        2: "2rem",
        2.4: "2.4rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
