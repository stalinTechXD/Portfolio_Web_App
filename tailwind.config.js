/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        theme : '#FFFFFF',
        theme2 : '#000000',
        themehover : '#C4F0FE',
        themetext : '#00658A',
        themehomecolor : '#EFF2F5',
        textthemecolor : '#01658A',
        btexttheme : '#B9ECFE',
        projectbgcolor : "#C4F0FE",
        backgroundformcolor : "#00658A",
      },
      fontFamily : {
        mont : ['Montserrat' , 'sans-serif']
      }
    },
    screens: {
      '2xl': { 'max': '1535px' },
      // => @media (max-width: 1535px) { ... }

      'xl': { 'max': '1279px' },
      // => @media (max-width: 1279px) { ... }

      'lg': { 'max': '1023px' },
      // => @media (max-width: 1023px) { ... }

      'md': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'sm': { 'max': '639px' },
      // => @media (max-width: 639px) { ... }
    },
  },
  
  plugins: [],
}