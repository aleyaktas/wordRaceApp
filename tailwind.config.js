/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/themes/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        textSecondary: '#6C6C6C',
        textInput: '#F5F5F5',
        darkGreen: '#075765',
      },
      fontFamily: {
        default: ['Poppins'],
      },
    },
  },
  plugins: [],
};
