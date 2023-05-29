/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif']
      },
      colors:{
        highlight:" #006AFF",
        textColor:"#1A1919",
        cardColor:"#FDFDFD"
      }, gridTemplateColumns:{
        180:"repeat(auto-fit, minmax(180px, 1fr))",
        240:"repeat(auto-fit, minmax(240px, 1fr))"
      }
    },
  },
  plugins: [],
}

