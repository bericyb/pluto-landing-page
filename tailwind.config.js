module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '10xl': '6rem',
    },
    extend: {
      boxShadow: {
        button: '0 35px 60px -15px rgba(255,0,0,0.3)',
      },
      colors: {
        primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#f3f4f7',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        background: {
          100: '#ffffff',
          200: '#232323',
        },
        purple: {
          100: '#A073C0',
          500: '#4F0CC9',
        },
        orange: {
          100: '#E88F87',
        },
        lightBlue: {
          100: '#639FF9',
        },
      },
      lineHeight: {
        hero: '4.0rem',
      },
      backgroundPosition: {
        right: 'right',
      },
    },
  },
  variants: {},
  plugins: [],
};
