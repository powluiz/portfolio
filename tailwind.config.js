/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors'

export const breakpoints = {
  sm: '480px',
  md: '768px',
  lg: '976px',
  xl: '1440px',
}

export const themeColors = {
  primary: {
    low: '#0F172A',
    dark: '#7547FF',
    base: '#875FFF',
    light: '#DCD1FF',
    high: '#EBF0FF',
  },
  neutral: {
    low: '#556376',
    dark: '#657792',
    base: '#86A0C5',
    light: '#BECBE0',
    high: '#D3DFF4',
    black: '#000',
    white: '#fff',
    transparent: 'transparent',
  },
  success: {
    dark: '#75C228',
    base: '#8DE039',
    light: '#B0FA67',
  },
  error: {
    dark: '#BB2929',
    base: '#E03939',
    light: '#FB7171',
  },
}

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: { ...breakpoints },
    colors: { ...colors, ...themeColors },
    fontFamily: { sans: ['geist', 'system-ui', 'sans-serif'] },
    extend: {
      backgroundImage: {
        noise: 'url("./src/assets/noise.png")',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
        'wiggle-slow': 'wiggle 6s ease-in-out infinite',
        'wiggle-pos': 'wiggle-pos 7s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-7deg)' },
          '50%': { transform: 'rotate(7deg)' },
        },
        'wiggle-pos': {
          '0%, 100%': { transform: 'translate(-2%,-2%)' },
          '25%': { transform: 'translate(2%,2%)' },
          '50%': { transform: 'translate(-2%,2%)' },
          '75%': { transform: 'translate(2%,-2%)' },
        },
      },
    },
  },
  plugins: [],
}
