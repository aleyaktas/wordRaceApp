/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5B4FDA',
        secondary: '#3E54AC',
        third: '#A084DC',
        text: '#4A4B5C',
        placeholder: '#636363',
        gray: '#F3F3F3',
        border: '#C5C5C5',
      },
      fontFamily: {
        default: ['Poppins'],
      },
    },
  },
  plugins: [],
};
