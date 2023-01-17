// https://github.com/import-js/eslint-plugin-import
module.exports = {
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
        groups: [
          'builtin',
          'external',
          'internal',
          ['index', 'sibling', 'parent'],
          'object',
          'unknown',
          'type',
        ],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '{next*,next*/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@*',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [],
      },
    ],
    /**
     * @description 마지막 import문 이후 개행 여부
     * @link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
     */
    'import/newline-after-import': ['error', { count: 1 }],
    /**
     * @description import한 파일이 올바른지 확인
     * @link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
     */
    'import/no-unresolved': 'off',
    /**
     * @description export된 모듈의 여부를 확인
     * @link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
     */
    'import/named': 'off',
    /**
     * @description 모듈 내에서 namespace 변경 허용
     * @link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
     */
    'import/namespace': 'off',
    /**
     * @description 모듈이 정상적으로 export 되었는지 확인
     * @link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
     */
    'import/default': 'off',
    /**
     * @description 모듈에서 export한 속성에 접근하는지 확인
     * @link https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
     */
    'import/no-named-as-default-member': 'off',
  },
}
