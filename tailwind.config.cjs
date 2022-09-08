/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        'logo-colisao': "url('../../assets/logoColisao.png')",
      },
      colors:{
        colisao:{
          500:"#FFED00"
        }
      }
    },
  },
  plugins: [],
}

