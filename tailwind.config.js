/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
        contentContainer: "1140px",
        containerSmall: "1024px",
        containerXs: "768px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
        titleFont: ["Inter", "sans-serif"],
      },
      fontWeight: {
        normal: "600",
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,17,0.7)",
      },

      //color palettes
      //["#faf3fa", "#293c4d", "#f59427", "#303136", "#67f790", "#27aabf"]
      //["#111c22", "#243d42", "#cdc47f", "#eddccc", "#b8b3ad"]

      //Burnt Tangerine
      colors: {
        bodyColor: "#121212",
        textGreen: "#27aabf",
        textLight: "#ccd6f6",
        textYellow: "#f59427",
        textDark: "#325068",
        hoverColor: "#111c22",
      },
      colors_Bk: {
        bodyColor: "#0A192F",
        textGreen: "#64ffda",
        textLight: "#ccd6f6",
        textDark: "#8892b0",
        hoverColor: "rgba(100, 255, 218, 0.1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
