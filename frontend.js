module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    './index.js',
    'airbnb/hooks',
    ...['./rules/react', './rules/react-hooks', './rules/jsx-a11y'].map(
      require.resolve,
    ),
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    jsx: true,
    useJSXTextNode: true,
  },
}
