/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-blue": "#3f5bf6",
        "button-blue-active": "#0E31F2",
      },
      fontFamily: {
        sans: ["Inter"],
        secondaryFont: ["Work Sans"],
      },
    },
  },
  plugins: [],
};
