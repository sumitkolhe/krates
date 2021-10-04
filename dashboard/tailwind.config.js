const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter'],
      },
      colors: {
        gray: colors.trueGray,
        'geist-background': 'var(--geist-background)',
        'geist-foreground': 'var(--geist-foreground)',
        accent1: 'var(--accent1)',
        accent2: 'var(--accent2)',
        accent3: 'var(--accent3)',
        accent4: 'var(--accent4)',
        accent5: 'var(--accent5)',
        accent6: 'var(--accent6)',
        accent7: 'var(--accent7)',
        accent8: 'var(--accent8)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
