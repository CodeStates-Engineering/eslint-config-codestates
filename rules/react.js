module.exports = {
  rules: {
    /**
     * @description JSX 확장명 여부
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
     */
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', 'tsx', 'ts'] },
    ],
  },
}
