module.exports = {
  purge: [],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
    },
  },
  variants: {
    opacity: ({ after }) => after(['disabled']),
  },
  plugins: [],
}
