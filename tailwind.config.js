const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    colors: {     
      primary: "#27272a",
      secondary: "#e7e5e4",
      tomato: "#ff6347"
    },
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}
