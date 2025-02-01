/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: { 
      colors: {
      customBlue: '#517FF6',
      customDarkBlue: '#253663',
    },},
  },
  plugins: [],
}

