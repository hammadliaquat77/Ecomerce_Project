/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4263eb", // apne custom colors yahan define kar sakte ho
        secondary: "#63e6be",
    },
    container:{
      center: true, // container ko center karne ke liye
      padding: {
          DEFAULT: '1rem',
          sm: '3rem',
      }
  }
    },
  },
   darkMode: "selector",
  plugins: [],
}

