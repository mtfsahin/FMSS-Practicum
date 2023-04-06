/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'chamois': {
        100: '#f8eedc',
        200: '#f1ddbf',
        300: '#e5bf8c',
        400: '#da9d5d',
        500: '#d2843d',
        600: '#c46d32',
        700: '#a3562b',
        800: '#834629',
        900: '#6a3b24',
        950: '#391d11'
      }

    },
    extend: {},
  },
  plugins: [],
}