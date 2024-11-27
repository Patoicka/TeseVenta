/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Archivos donde Tailwind aplicará estilos
  ],
  theme: {
    extend: {
      colors: {
        alabaster: {
          100: '#F7F9F5', // Más claro
          200: '#EEF1EA',
          300: '#E4E8DF',
          400: '#DCE1D5',
          500: '#DAE0D2', // Base
          600: '#BCC3B4',
          700: '#9DA595',
          800: '#7F8877',
          900: '#616A59', // Más oscuro
        },
      },
    },
  },
  plugins: [],
};
