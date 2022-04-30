module.exports = {
  env: {
    node: true,
    jest: true,
    es6: true,
  },
  extends: [
    'next',
    'next/core-web-vitals',
    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier',
  ],
  rules: {
    // off
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
    'import/no-extraneous-dependencies': 'off', // for the conflict with jest
    camelcase: 'off',
    'react/require-default-props': 'off',
    'no-underscore-dangle': 'off',
    '@next/next/link-passhref': 'off',
    'jsx-a11y/anchor-is-valid': 'off', // use NextLink's passHref

    // custom
    'import/order': [
      'error',
      { groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin', 'object', 'type'] },
    ],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: '.',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
