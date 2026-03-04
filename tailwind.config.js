/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B5FFF',
        secondary: '#12B76A',
      },
      fontFamily: {
        sans: ['Inter', 'PingFang SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}