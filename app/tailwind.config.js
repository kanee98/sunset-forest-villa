module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // Luxury serif
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: "#0f172a",
        accent: "#38bdf8", // Or use #D4AF37 for a gold tone
      },
    },
  },
  plugins: [],
}