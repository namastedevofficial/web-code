/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      grey2: "#b2becd",
      grey4: "#5f6368",
      grey5: "#303134",
      grey6: "#202124",
      white: "#ffffff",
    }
  },
  plugins: [],
}
