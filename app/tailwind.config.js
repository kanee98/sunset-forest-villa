module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        cursive: ['"Dancing Script"', 'cursive'], 
      },
      colors: {
        primary: "#0f172a",
        accent: "#38bdf8",
        sky: {
          200: "#7dd3fc",
          300: "#38bdf8",
          400: "#0ea5e9",
        },
        dark: {
          800: "#1e293b",
          900: "#0f172a",
        },
        gold: {
          500: '#D4AF37',
          600: '#C09728',
        },
      },
    },
  },
  plugins: [],
};