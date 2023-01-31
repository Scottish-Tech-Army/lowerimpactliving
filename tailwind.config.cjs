/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
        'primary2': '#9CE7F0',
        'primary3': '#F0B541',
        'primary4': '#100469',
        'primary5': '#B0A8F0',
      },
    },
  },
  plugins: [],
};
