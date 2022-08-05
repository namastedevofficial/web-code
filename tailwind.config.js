/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey2: "#b2becd",
        grey4: "#5f6368",
        grey5: "#303134",
        grey6: "#202124",
      }
    },
    screens: {
      xs: '300px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      b0: '368px',
      b1: '720px',
      b2: '1072px',
      b3: '1424px',
      b4: '1776px',
    },
  },
  plugins: [],
}
