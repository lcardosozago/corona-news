module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      },
      colors: {
        'table-confirmed': '#f48833',
        'table-deaths': '#000000',
        'table-healed': '#68b817',
        'table-suspects': '#005c83'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
