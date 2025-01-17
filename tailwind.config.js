/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    //breakpoints for small, medium, large and xlarge screens
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1055px",
      xl: "1440px",
    },
    extend: {
      // costumized colors
      colors: {
        greyishGreen: '#F4F8FC',
        darkGreen: '#1C6665',
        lightText: '#606773',
        darkText: '#070707',
        lightGray: '#E3E6EA',
        lightGreen: '#D0FA94',
        orange: '#FE8259',
        brown: '#302A26'
      },
      flexBasis: {
        '7/14': '49%',
        'almost-1/4': '24%'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
