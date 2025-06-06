/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors:{
        primary:'#f97316',
        secondary:'#6b7280',
        dark : '#0f172a'
      },
      screens:{
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}



