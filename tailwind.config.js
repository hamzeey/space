/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-mobile': "url('./src/Asssets/background-home-mobile.jpg')",
        'home-tablet': "url('./src/Asssets/background-home-tablet.jpg')",
        'home-desktop': "url('./src/Asssets/background-home-desktop.jpg')",
        'destination-mobile': "url('./src/Asssets/background-destination-mobile.jpg')",
        'destination-tablet': "url('./src/Asssets/background-destination-tablet.jpg')",
        'destination-desktop': "url('./src/Asssets/background-destination-desktop.jpg')",
        'crew-mobile': "url('./src/Asssets/background-crew-mobile.jpg')",
        'crew-tablet': "url('./src/Asssets/background-crew-tablet.jpg')",
        'crew-desktop': "url('./src/Asssets/background-crew-desktop.jpg')",
        'technology-mobile': "url('./src/Asssets/background-technology-mobile.jpg')",
        'technology-tablet': "url('./src/Asssets/background-technology-tablet.jpg')",
        'technology-desktop': "url('./src/Asssets/background-technology-desktop.jpg')",

      },

      fontFamily: {
        'barlow': ['Barlow Condensed', 'sans-serif'],
        'bellefair': ['Bellefair', 'serif']
      },
      colors: {
        'accent': '#D0D6F9'

      }

    },
  },
  plugins: [],
}

