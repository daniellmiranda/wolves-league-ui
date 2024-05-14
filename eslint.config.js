import wlConfig from '@wolves-league/eslint-config';

const nodeConfig = wlConfig.configs.node.map(configObject => ({ files: ['packages/tokens/**/*'], ...configObject }));
const reactConfig = wlConfig.configs.react.map(configObject => ({ files: ['packages/react/**/*', 'packages/docs/**/*'], ...configObject }));

/** @type {Array<import('@wolves-league/eslint-config').Config>} */
export default [...nodeConfig, ...reactConfig];
