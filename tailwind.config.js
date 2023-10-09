/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#e7f7fa',
          200: '#d9d9d9',
          300: '#b8e8f1',
          400: '#5ac9de',
          500: '#10454F',
          600: '#2190a5',
          700: '#0e3e47',
          800: '#051518',
        },
        secondary: {
          100: '#eff2f3',
          200: '#cfd8da',
          300: '#b0bec1',
          400: '#90a3a8',
          500: '#506266',
          600: '#70898f',
          700: '#3e4c4f',
          800: '#252e30',
        },
        baseGreen: {
          500: '#818274',
        },
        brightGreen: {
          500: '#BDE038',
        },
        oliveGreen: {
          500: '#A3AB78',
        },
      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
}

