/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A0F2C",
        teal: "#14B8A6",
        gold: "#F4C542",
        card: "#0B1220",
        bg: "#020617",
        textPrimary: "#F9FAFB",
        textSecondary: "#CBD5F5"
      }
    }
  },
  plugins: []
};
