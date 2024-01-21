/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
  
    extend: {
      screens: {
        "sm-max700": { max: "700px" },
        "sm-max450": { max: "450px" },
        // lg: "890px",
        // sm: "640px",
        // md: "768px",
        // xl: "1200px",
      },
    },
  },
  plugins: [],
}