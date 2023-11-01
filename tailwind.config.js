/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/themes/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5BB9CA',
        secondary: '#1D7483',
        textSecondary: '#6C6C6C',
        textInput: '#F5F5F5',
        darkGreen: '#075765',
        iconBorder: '#E1E1E1',
        roomCardFooter: '#0DBB7E',
        questionCard: '#23BAD4',
        answerCard: '#C8E5E0',
        darkRed: '#FB4E4E',
        black: '#000',
      },
      fontFamily: {
        poppinsRegular: ['Poppins-Regular'],
        poppinsBold: ['Poppins-Bold'],
        poppinsSemiBold: ['Poppins-SemiBold'],
        poppinsMedium: ['Poppins-Medium'],
        poppinsLight: ['Poppins-Light'],
      },
    },
  },
  plugins: [],
};
