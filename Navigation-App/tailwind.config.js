/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')], // ESTO ES CLAVE EN V4
  theme: {
    extend: {},
  },
  plugins: [],
}
