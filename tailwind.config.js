/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'courgette': ['Courgette', 'cursive'],
      },
      screens: {
        'xs': {'max': '639px'},
        
      },
    },
  },
  plugins: [],
}