/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '632px',
          md: '760px',
          lg: '1016px',
          xl: '1192px',
          '2xl': '1428px',
        },
      },
      backgroundColor: {
        'champagne-color': 'var(--header-bg-color)',
      },
      colors: {
        'orange-color': 'var(--text-orange-color)',
        'grey-color': 'var(--text-grey-color)',
      },
    },
  },
  plugins: [],
};
