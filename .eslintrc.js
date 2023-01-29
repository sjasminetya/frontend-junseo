module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jest', 'import', 'react-hooks', 'react'],
  rules: {
    // note you must disable the base rule as it can report incorrect errors
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'max-len': [2, { code: 180 }],
    'max-lines': [2, { max: 300, skipBlankLines: true, skipComments: true }],
    'no-use-before-define': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'arrow-body-style': 'off',
    // "no-console": 2,
    'no-debugger': 2,
    'no-nested-ternary': 2,
    'no-return-await': 2,
    'no-trailing-spaces': 2,
    'no-var': 2,
    'prefer-arrow-callback': 'off',
    'operator-linebreak': [
      1,
      'before',
      {
        overrides: {
          '=': 'after',
        },
      },
    ],
    'no-unused-vars': 'off',
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: true,
        unnecessary: true,
        numbers: false,
      },
    ],
    quotes: [
      'error',
      'double',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    semi: [
      'error',
      'always',
    ],
    'comma-dangle': [
      'error', 'always-multiline',
    ],
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
    'react/jsx-curly-spacing': 2,
    'react/jsx-key': 2,
    'react/jsx-max-depth': [2, { max: 5 }],
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 0,
    'react/jsx-sort-default-props': [2, { ignoreCase: true }],
    'react/jsx-sort-props': [2, { ignoreCase: true }],
    'sort-keys': [2, 'asc', { caseSensitive: false, natural: false }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-var-requires': 0,
  },
  settings: {
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      alias: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.svg'],
      },
    },
  },
  overrides: [
    {
      files: ['!styles.js'],
      rules: {
        'sort-keys': 0,
      },
    },
  ],
};
