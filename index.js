module.exports = {
  extends: [
    'standard',
    'prettier',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    ...[
      './rules/base',
      './rules/import',
      './rules/prettier',
      './rules/promise',
    ].map(require.resolve),
  ],
  env: {
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
        ...['./rules/typescript'].map(require.resolve),
      ],
      settings: {
        /**
         * @description import plugin with Typescript configuration
         * @link https://github.com/alexgorbatchev/eslint-import-resolver-typescript#configuration
         */
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
      },
    },
  ],
}
