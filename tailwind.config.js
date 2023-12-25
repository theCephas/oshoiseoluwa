/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      // xl: "1280px",
    },
    extend: {
      backgroundImage: {
        blackorchid:
          // 'url("https://www.transparenttextures.com/patterns/bedge-grunge.png")',
          'url("https://transparenttextures.com/patterns/black-orchid.png")',
        // url(
        // "https://www.transparenttextures.com/patterns/45-degree-fabric-dark.png",
      },
      shapeRendering: {
        geometricPrecision: "geometricPrecision",
      },
    },
    fontFamily: {
      cantarella: ["Cantarell", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      dancingscript: ["Dancing Script", "cursive"],
    },
  },
  plugins: [],
};
