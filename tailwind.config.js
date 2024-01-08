/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Rubik: "Rubik Glitch",
        Kaushan: "Kaushan Script"
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.50)',
        '4xl': [
            '0 15px 5px rgba(0, 70, 60, 0.70)',
            '0 45px 65px rgba(0, 0, 0, 0.90)'
        ]
      }
    },
  },
  plugins: [],
}