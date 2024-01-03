/** @type {import('tailwindcss').Config} */

const themeColors = {
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
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      ...themeColors,
    },
    fontFamily: {
      sans: ['geist', 'system-ui', 'sans-serif'],
    },
  },
  plugins: [],
}
