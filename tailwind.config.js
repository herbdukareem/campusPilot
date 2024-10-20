import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        'primary': '#5abb7b',
        'background-light': '#f8fcff', // Light theme background
        'background-dark': '#1a202c', // Dark theme background
      }
    },
  },
  safelist: [
    'tw-bg-primary',
    'tw-bg-appPrimary',
    'tw-bg-appSecondary',
    'tw-text-appPrimary',
    'tw-text-appSecondary',
  ],
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        layout: {},
        colors: {
          background: '#f8fcff', // Same as background-light
          lightbg: '#e6f0ed', // Same as background-light
          'whitebg': 'white',
          primary: '#286754'
        }
      },
      dark: {
        layout: {},
        colors: {
          background: '#1a202c', // Same as background-dark
          'lightbg': '#1a202c', // Same as background-dark
          'whitebg': '#1a202c',
          primary: '#286754'
        }
      },
    }
  }
  )],
}
