/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.tsx"],
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    fontSize: {
      sx: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      xxl: 32
    },
    colors: {
      'black': "#000",
      yellow: {
        500: '#FFED00'
      }
    },
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif"
      },
    },
  },
  plugins: [],
}

