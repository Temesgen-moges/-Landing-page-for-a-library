const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,jsx,ts,tsx}"], // Merged content
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#ffc727",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        dark: "#111111",
      },
      borderColor: {
        primary: '#ffc727',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      backgroundImage: {
        "banner-bg": "url('/public/bannerBg.jpg')",
      },
    },
  },
  plugins: [
    // Your other plugins can go here
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".my-rotate-y-180": {
          transform: "rotateY(180deg)",
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".perspective": {
          perspective: "1000px",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
      });
    }),
  ],
};
