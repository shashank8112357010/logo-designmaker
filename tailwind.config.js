/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#0B1926",
        secondaryBlack: "#182736",
        darkBlack: "#12202E",
        lightBlack: "#1F3143",
        buttonBlack: "#2F2F2F",
        primaryGreen: "#5CFF85",
        primaryGray: "#BDBDBD",
        primaryGrey: "#8D8D8D",
      },
      fontSize: {
        lapHeaderText: "50px",
        tabHeaderText: "30px",
        mobHeaderText: "20px",

        lapHeaderBody: "16px",
        tabHeaderBody: "14px",
        mobHeaderBody: "12px",

        lapHeading1: "38px",
        tabHeading1: "25px",
        mobHeading1: "18px",

        lapBody: "16px",
        tabBody: "12px",
        mobBody: "12px",

        lapTitle: "20px",
        tabTitle: "14px",
        mobTitle: "14px",

        lapTitle2: "16px",
        tabTitle2: "12px",
        mobTitle2: "12px",

        lapfooterTitle: "20px",
        tabfooterTitle: "16px",
        mobfooterTitle: "16px",

        lapfooterLinks: "16px",
        tabfooterLinks: "14px",
        mobfooterLinks: "14px",

        lapfooterBody: "12px",
        tabfooterBody: "12px",
        mobfooterBody: "12px",

        lapTitle3: "14px",
        tabTitle3: "12px",
        mobTitle3: "12px",
      },
      fontFamily: {
        springRainSolid: ["springRainSolid", "sans-serif"]
      },
      screens: {
        xs: "460px",
        lgg: "1090px"
      }
    },
  },
  plugins: [],
};
