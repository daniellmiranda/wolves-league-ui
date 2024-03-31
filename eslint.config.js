import wlEslintConfig from '@wolves-league/eslint-config';

const nodeConfig = wlEslintConfig.configs.node.map(configObject => ({ files: ['packages/**/*'], ...configObject }));
const reactConfig = wlEslintConfig.configs.react.map(configObject => ({ files: ['packages/**/*'], ...configObject }));

/** @type {Array<import('@wolves-league/eslint-config').Config>} */
export default [...nodeConfig, ...reactConfig];
