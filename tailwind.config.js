/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color:{
        'primary': '#3498db',
        'light-gray': '#f8f9fa',
       'medium-gray': '#ced4da',
      }
    },
  },
  plugins: [],
}