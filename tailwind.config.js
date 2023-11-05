/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pacific: ['Pacifico', 'cursive'],
      },
      colors: {
        primary: 'rgb(143, 205, 9)',
        orange_bg: '#ffb701',
      },
    },
  },
  plugins: [],
};

