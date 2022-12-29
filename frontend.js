module.exports = {
  extends: [
    './index.js',
    'standard-jsx',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/jsx-runtime',
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
