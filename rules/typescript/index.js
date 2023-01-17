// NOTE: https://typescript-eslint.io/
module.exports = {
  rules: {
    /**
     * @description 사용하지 않는 변수 사용
     * @link https://typescript-eslint.io/rules/no-unused-vars/
     */
    '@typescript-eslint/no-unused-vars': 'error',
    /**
     * @description 빈 함수 작성 금지
     * @link https://typescript-eslint.io/rules/no-empty-function/
     */
    '@typescript-eslint/no-empty-function': 'error',
    /**
     * @description any 타입 작성 금지
     * @link https://typescript-eslint.io/rules/no-explicit-any/
     */
    '@typescript-eslint/no-explicit-any': [
      'error',
      { ignoreRestArgs: true, fixToUnknown: true },
    ],
    /**
     * @description 변수 정의 전 사용 금지
     * @link https://typescript-eslint.io/rules/no-use-before-define/
     */
    '@typescript-eslint/no-use-before-define': ['error', { functions: false }],
    /**
     * @description 타입 형변환 통일
     * @link https://typescript-eslint.io/rules/consistent-type-assertions/
     */
    '@typescript-eslint/consistent-type-assertions': 'error',
    /**
     * @description interface를 일괄적으로 사용
     * @link https://typescript-eslint.io/rules/consistent-type-definitions/
     */
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    /**
     * @description class 문법의 접근제한자 일괄적으로 사용
     * @link https://typescript-eslint.io/rules/explicit-member-accessibility/
     */
    '@typescript-eslint/explicit-member-accessibility': 'off',
  },
}
