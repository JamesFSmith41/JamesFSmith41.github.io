/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      'main-background' : 'hsl(222, 47%, 11%)',
      'text-color': 'hsl(223, 100%, 95%)',
      'main-shadow': 'hsl(222, 96%, 11%)',
      'main-gradient-start': 'hsl(222, 20%, 11%)',
      'main-gradient-stop': 'hsl(222, 60%, 11%)',
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
}

