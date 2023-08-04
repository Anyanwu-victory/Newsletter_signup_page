/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {

    listStyleType: {
      
    },

    screens: {
      'sm': '375px',

      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {

      colors:{
        Tomato: 'hsl(4, 100%, 67%)',
        DarkSlateGrey: 'hsl(234, 29%, 20%)',
        CharcoalGrey: 'hsl(235, 18%, 26%)',
        Grey: 'hsl(231, 7%, 60%)',
        White: 'hsl(0, 0%, 100%)',

      },
    },
  },
  plugins: [],
}

