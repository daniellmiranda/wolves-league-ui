import {
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  spacing,
} from '@wolves-league-ui/tokens';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
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
