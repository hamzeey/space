/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mobile': "url('./src/Asssets/background-home-mobile.jpg')",
        'tablet': "url('./src/Asssets/background-home-tablet.jpg')",
        'desktop': "url('./src/Asssets/background-home-desktop.jpg')",
      },
      fontFamily: {
        'barlow': ['Barlow Condensed', 'sans-serif']
      }
    },
  },
  plugins: [],
}

