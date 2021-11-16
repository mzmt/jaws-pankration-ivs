module.exports = {
  // purge: 本番環境で使わないcssをパージする
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    height: {
      '200px': '200px',
      '400px': '400px',
      '600px': '600px'
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
