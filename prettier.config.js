import wlConfig from '@wolves-league/eslint-config';

/** @type {import('@wolves-league/eslint-config').Config['prettier']} */
export default {
  ...wlConfig.configs.prettier,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cn'],
};