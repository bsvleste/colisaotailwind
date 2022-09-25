/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.tsx"],
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'logo-colisao': "url('../../assets/logoColisao.png')",
      },
      colors: {
        colisao: {
          500: "#FFED00"
        }
      }
    },
  },
  plugins: [],
}

