/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#322501",
        tertiary: "#FFFFFF"
      },
      screens: {
        'mobile-320': '320px',  // Menambahkan breakpoint 320px
        'mobile-425': '425px',  // Menambahkan breakpoint 425px
      },
    },
  },
  plugins: [],
}