/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: '#FFCA1D',
        textBlack: '#1F1F1F',
        bluecyan:'#3ADAD9',
        gray:'#4A4A4A',
        section_gray:'#E9E9F5',
        apply:'#4B4AEF',
        card:'#D9D9D91A',
      },
      boxShadow: {
        'custom-right-bottom': '5px 5px 4px 0 rgba(0, 0, 0, 0.5)'
      },
      animation: {
        'rotate-clockwise': 'rotateClockwise 50s linear infinite',
        'rotate-counterclockwise': 'rotateCounterClockwise 50s linear infinite',
      },
      keyframes: {
        rotateClockwise: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        rotateCounterClockwise: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
}