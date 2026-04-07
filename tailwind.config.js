/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eaecf5',
          100: '#d0d6e8',
          200: '#aab6d6',
          300: '#7b8fc0',
          400: '#5369a8',
          500: '#394d8e',
          600: '#2c3b73',
          700: '#23305c',
          800: '#1e284d',
          900: '#1a2240',
          950: '#11162b',
        }
      }
    },
  },
  plugins: [],
}
