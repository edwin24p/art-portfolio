/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],},
        colors: {
          'white': 'rgba(255, 255, 255, 0.87)',
          'black': '#121212',
        }
    },
  },
  plugins: [],
}

