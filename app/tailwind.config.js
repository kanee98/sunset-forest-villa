module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], 
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#0f172a",
        accent: "#38bdf8", 
        gold: {
          500: '#D4AF37',
          600: '#C09728',
        },
      },
    },
  },
  plugins: [],
}