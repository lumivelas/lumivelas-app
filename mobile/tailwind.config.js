/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    colors: {
      white: '#EAE4D3',
      danger: 'B35442',
      primary: '#5A7D3A',
      secundary: '#C27A4A',
    },
    extend: {
      fontFamily: {
        bold: [ 'Poppins-Bold' ],
        thin: [ 'Poppins-Thin' ],
        regular: [ 'Poppins-Bold' ]
      }
    },
  },
  plugins: [],
}

