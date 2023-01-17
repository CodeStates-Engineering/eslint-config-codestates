module.exports = {
  rules: {
    /**
     * @description JSX 속성에서 큰따옴표 또는 작은따옴표를 사용
     * @link https://eslint.org/docs/latest/rules/jsx-quotes
     */
    // 'jsx-quotes': ['error', 'prefer-double'],
    /**
     * @description 불필요한 fragment 사용 금지
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
     */
    // 'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
    /**
     * @description 자식 유무에 따른 태그 처리
     * @link https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
     */
    // 'react/self-closing-comp': [
    //   'error',
    //   {
    //     component: true,
    //     html: true,
    //   },
    // ],
    // "react/jsx-one-expression-per-line": "off"
  },
}
