module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      primary: 'Rubik',
    },
    colors: {
      primary: '#232129',
      accent: '#6738E1',
      grey: '#494455',
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/img/bg.svg')",
      },
    },
  },
  plugins: [],
};
