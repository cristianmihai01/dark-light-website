module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js}'],
  theme: {
    fontFamily: {
      primary: 'Rubik',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1224px',
      xl: '1350px',
    },
    extend: {
      colors: {
        primary: '#232129',
        accent: {
          DEFAULT: '#6738E1',
          hover: '#5A26DF',
        },
        grey: '#494455',
      },
      backgroundImage: {
        heroLight: "url('/src/assets/img/bg-light.svg')",
        heroDark: "url('/src/assets/img/bg-dark.svg')",
      },
    },
  },
  plugins: [],
};
