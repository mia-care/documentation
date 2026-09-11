'use strict';

const js = require('@eslint/js');
const react = require('eslint-plugin-react');
const globals = require('globals');
const babelParser = require('@babel/eslint-parser');

// Flat-config migration of the legacy .eslintrc / .eslintignore, required
// since ESLint v9 dropped support for the eslintrc format. Rules and
// settings below are a 1:1 port; no rule was added, removed, or changed.
module.exports = [
  {
    ignores: [
      'build/**',
      '.docusaurus/**',
      'static/docs_files_to_download/**',
    ],
  },
  js.configs.recommended,
  react.configs.flat.recommended,
  {
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      parser: babelParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2017,
      },
    },
    settings: {
      react: {
        version: '16.8',
      },
    },
    rules: {
      'no-console': 2,
      'no-unused-vars': 2,
      'object-curly-spacing': [2, 'never'],
      'operator-linebreak': [2, 'after'],
      'react/jsx-closing-bracket-location': 2,
      'react/jsx-curly-brace-presence': 'off',
      'react/jsx-first-prop-new-line': 2,
      'react/jsx-no-literals': 2,
      'react/jsx-sort-props': 2,
      'react/jsx-wrap-multilines': [2, {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
      }],
      'react/no-multi-comp': [2, {ignoreStateless: true}],
      'react/no-unused-prop-types': 2,
      'react/no-unused-state': 2,
      'react/sort-prop-types': 2,
      'react/sort-comp': [2, {
        order: ['static-methods', 'lifecycle', 'everything-else', 'render'],
      }],
    },
  },
];
