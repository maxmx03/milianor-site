/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      white: '#fff',
      white50: '#fafafa',
      white100: '#eee',
      gray: '#7f8487',
      gray50: '#73777b',
      gray100: '#f2f2f2',
      black: '#000',
      black50: '#111',
      black100: '#333',
      yellow: '#f7ec09',
      yellow50: '#efd345',
      yellow100: '#faf4b7',
    },
  },
  plugins: [],
}
