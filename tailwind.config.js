/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        bubblegum: ["Bubblegum Sans", "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
};
