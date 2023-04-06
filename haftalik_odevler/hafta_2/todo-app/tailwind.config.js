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
      },
      'comet': {
        '50': '#f6f7f9',
        '100': '#eceef2',
        '200': '#d5d9e2',
        '300': '#b1bac8',
        '400': '#8794a9',
        '500': '#68778f',
        '600': '#525e75',
        '700': '#444d60',
        '800': '#3b4251',
        '900': '#343946',
        '950': '#23272e',
    },
    'blue-smoke': {
      '50': '#f5f8f6',
      '100': '#e0e7e5',
      '200': '#c0cfc9',
      '300': '#98b0a7',
      '400': '#78938a',
      '500': '#58746b',
      '600': '#455c55',
      '700': '#3a4b46',
      '800': '#313e3a',
      '900': '#2c3533',
      '950': '#161d1c',
  },
  'norway': {
    '50': '#f2f7f2',
    '100': '#e1ecdf',
    '200': '#c2d9c1',
    '300': '#92ba92',
    '400': '#6b9c6c',
    '500': '#4a7f4d',
    '600': '#37643b',
    '700': '#2c5030',
    '800': '#254029',
    '900': '#1f3522',
    '950': '#101e12',
},
  

    },
    extend: {},
  },
  plugins: [],
}