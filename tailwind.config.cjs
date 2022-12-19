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
        'teal': '#029f9e',
        'pink': '#f10180',
        'orange': '#ec5c0d',
        'red': '#e73121',
        'grey': '#696c74',
        'light-grey': '#d3d3d3',
        'dark-grey': '#666666',
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
};
