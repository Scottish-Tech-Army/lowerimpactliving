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
        'dark-green': '#20a55f',
        'light-green': '#8abc25',
        'dark-blue': '#016ab1',
        'light-blue': '#006fb7',
        'teal': '#ADD9D4',
        'pink': '#f10180',  
        'orange': '#ec5c0d',
        'red': '#e73121',
        'mustard': '#fcc100',
        'grey': '#696c74',
        'light-grey': '#d3d3d3',
        'dark-grey': '#666666',
        'primary1': '#3B97A1',
        'primary2': '#ED9DA3',
        'primary3': '#71C9D4',
        'primary4': '#100469',
        'primary5': '#B0A8F0',
        'darkteal': '#163642',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 1)',
      },
      padding: {
        'pad': '58px',
      },
      maxWidth: {
        '2220': '2220px',
      },
    },
  },
  plugins: [],
};
