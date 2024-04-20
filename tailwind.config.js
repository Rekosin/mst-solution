/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    backgroundSize:{
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
     'hero-pattern':  "url('/src/assets/heroImg.jpg')",
    },

    extend: {},
  },
  plugins: [],
}

