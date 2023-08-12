import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  spacing,
} from '@wolves-league/tokens';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    borderRadius,
    colors,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight,
    spacing,
    extend: {},
  },
  plugins: [],
};
