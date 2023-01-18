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
    /**
     * @description React jsx 허용 여부
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
     */
    'react/react-in-jsx-scope': 'off',
    /**
     * @description JSX props spread 허용 여부
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
     */
    'react/jsx-props-no-spreading': 'off',
    /**
     * @description optional proptype 여부
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
     */
    'react/require-default-props': 'off',
    /**
     * @description 함수 컴포넌트
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
     */
    'react/function-component-definition': [
      0,
      { namedcomponents: 'arrow-function' },
    ],
    /**
     * @description 빈 JSX 반환 여부
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
     */
    'react/jsx-no-useless-fragment': 'warn',
    /**
     * @description 배열 내 index 키 사용 여부
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-array-index-key.md
     */
    'react/no-array-index-key': 'off',
    /**
     * @description 미사용 proptype
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
     */
    'react/no-unused-prop-types': 'warn',
  },
}
