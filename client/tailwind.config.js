/** @type {import('tailwindcss').Config} */

import { themeColor } from "./src/components/themeColor";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["KoHo", "sans-serif"],
        content: ["Open Sans", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        "custom-green": `#${themeColor}`,
        "ui-bg": "#fff",
        "custom-green": "#6f4e37",
      
      },
      boxShadow: {
        brand: "0 2px 5px",
      },
    },
  },
  darkMode: "media",
  plugins: [require("daisyui"), "prettier-plugin-tailwindcss"],
};
