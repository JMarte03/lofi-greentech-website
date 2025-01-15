/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    //breakpoints for small, medium, large and xlarge screens
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      // costumized colors
      colors: {
        greyishGreen: '#F4F8FC'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
};
