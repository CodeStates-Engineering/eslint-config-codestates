module.exports = {
  extends: [
    './index.js',
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
};
