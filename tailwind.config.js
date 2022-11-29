module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '450px',
        sm: '600px',
        md: '960px',
        lg: '1280px',
        xl: '1920px',
        'sm-max': { max: '600px' },
        'md-max': { max: '960px' },
        'lg-max': { max: '1280px' },
        'xl-max': { max: '1920px' },
      },
      spacing: {
        '2x': 'calc(200%)',
        '3x': 'calc(300%)',
        '4x': 'calc(400%)',
        '5x': 'calc(500%)',
        '6x': 'calc(600%)',
        '7x': 'calc(700%)',

        200: '50rem',
      },
      backgroundImage: {
        'discussing-doctors': "url('/src/assets/images/discussingDoctors.png')",
      },
      colors: {
        primary: '#3B72FF',
        secondary: '#4392F1',
        info: '#4392F1',
        success: '#4caf50',
        warning: '#ff9800',
        error: '#F14343',

        // colors
        'white-light': '#F7F9FF',
        'white-light-blue': '#E2EFFF',
        'black-blue': '#00071A',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
