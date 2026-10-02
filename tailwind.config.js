/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C3AED',
          dark: '#6D28D9',
          light: '#A855F7',
        },
        accent: {
          DEFAULT: '#2563EB',
          dark: '#1E40AF',
          light: '#3B82F6',
        },
        background: {
          light: '#FFFFFF',
          'light-card': '#F5F0FF',
          dark: '#0B0B14',
          'dark-card': '#151522',
        },
        border: {
          light: '#E9D5FF',
          dark: 'rgba(124, 58, 237, 0.2)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
