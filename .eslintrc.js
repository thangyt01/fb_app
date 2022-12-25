module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  env: {
    'react-native/react-native': true,
    jest: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 8,
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'react-hooks'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'linebreak-style': ['error', 'unix'],
    'no-undef': ['error'],
    'no-console': ['off'],
    'no-unused-vars': ['warn'],
    'react/display-name': ['off'],
    'react/prop-types': ['off'],
    'react-native/no-unused-styles': ['off'],
    'react-native/split-platform-components': ['warn'],
    'react-native/no-inline-styles': ['off'],
    'react-native/no-color-literals': ['off'],
    'react-hooks/rules-of-hooks': ['warn'],
    'react-hooks/exhaustive-deps': ['warn'],
  },
};
