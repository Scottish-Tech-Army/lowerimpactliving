/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      screens: {
        // sm: '600px',
        // md: '728px',
        // lg: '984px',
        xl: '1280px',
      },
    },
    extend: {
      colors: {
        'black': '#000000',
        'white': '#ffffff',
        'grey': '#696c74',
        'dark-green': '#20a55f',
        'dark-blue': '#016ab1',
        'teal': '#ADD9D4',
        'dark-teal': '#163642',
        'red': '#e73121',
        'primary1': '#3B97A1',
        'primary2': '#ED9DA3',
        'primary3': '#71C9D4',
        'primary4': '#100469',
        'primary5': '#B0A8F0',
      },
      maxWidth: {
        '2220': '2220px',
      },
    },
  },
  plugins: [],
};
