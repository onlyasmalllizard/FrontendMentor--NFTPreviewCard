module.exports = {
  content: ['./src/**/*.{html,js,jsx}', './index.html'],
  theme: {
    colors: {
      primary: {
        1: 'hsl(215, 51%, 70%)',
        2: 'hsl(178, 100%, 50%)',
      },
      neutral: {
        900: 'hsl(217, 54%, 11%)',
        800: 'hsl(216, 50%, 16%)',
        700: 'hsl(215, 32%, 27%)',
        100: 'hsl(0, 0%, 100%)',
      },
    },
    fontFamily: { sans: ['Outfit', 'sans-serif'] },
    extend: {},
  },
  plugins: [],
};
