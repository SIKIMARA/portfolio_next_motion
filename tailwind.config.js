const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      backgroundImage: {
        'gradient': 'linear-gradient(153deg, rgba(241,214,114,0.6502976190476191) 0%, rgba(250,250,250,1) 34%, rgba(255,255,255,1) 75%, rgba(1,37,45,0.6110819327731092) 100%)',
        'gradient2':'linear-gradient(138deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
      },
      colors:{
        dark : "#1E1E1E",
        light : "#F5F5F5",
        primary : "rgb(2,57,57)",
        secondary : "#FF5722",
      }
    },
  },
  plugins: [],
}
