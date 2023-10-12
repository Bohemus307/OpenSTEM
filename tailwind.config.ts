import formsPlugin from '@tailwindcss/forms'
import headlessuiPlugin from '@headlessui/tailwindcss'
import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '2rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1.1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        sans: 'var(--font-inter)',
        display: 'var(--font-lexend)',
      },
      maxWidth: {
        '2xl': '40rem',
      },
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
  plugins: [formsPlugin, headlessuiPlugin],
} satisfies Config
