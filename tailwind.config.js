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
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '7/14': '49%'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
