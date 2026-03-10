import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginReactRefresh from 'eslint-plugin-react-refresh';
import eslintPluginJs from '@stylistic/eslint-plugin-js';
import globals from 'globals';
import js from '@eslint/js';
import {defineConfig} from 'eslint/config';

export default defineConfig([
  {ignores: ['dist']},
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        }
      },
    },
    plugins: {
      'react': eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'react-refresh': eslintPluginReactRefresh,
      '@stylistic/js': eslintPluginJs,
    },
    rules: {
      ...js.configs.recommended.rules,
      '@stylistic/js/semi': 'error',
      ...eslintPluginReactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        {allowConstantExport: true},
      ],

      // code within `</>` cannot be captured
      'no-unused-vars': 'off',
      'no-undef': 'off',
    },
  },
]);
