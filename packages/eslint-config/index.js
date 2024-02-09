module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jsx-a11y',
    '@typescript-eslint',
    'simple-import-sort'
  ],
  rules: {
    'prettier/prettier': ["error", {
      printWidth: 100,
      tabWidth: 2,
      singleQuote: true,
      trailingComma: 'all',
      arrowParens: 'always',
      semi: true,
      endOfLine: 'auto',
    }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    "simple-import-sort/imports": "error"
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  }
}