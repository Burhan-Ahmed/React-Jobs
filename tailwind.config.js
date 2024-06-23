/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans:['Roboto','sans-serif'],
      }
    },
  },
  plugins: [],
}

