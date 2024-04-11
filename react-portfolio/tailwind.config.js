/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      'main-background' : 'hsl(217, 0%, 98%)',
      'text-color': 'hsl(223, 100%, 0%)',
      'main-shadow': 'hsl(222, 96%, 11%)',
      'main-gradient-start': 'hsl(222, 20%, 11%)',
      'main-gradient-stop': 'hsl(222, 60%, 11%)',
      'hover': 'hsl(217, 3%, 84%)'
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

