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
        'bonanova': ['Bona Nova', 'serif'],
      },
      boxShadow: {
        'custom-top': '0 -4px 8px rgba(0, 0, 0, 0.3)',
      },
     
    },
  },
  plugins: [],
}