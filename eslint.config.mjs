import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  // Global ignores
  {
    ignores: [
      'dist/',
      '.astro/',
      'node_modules/',
      'notes/',
      'vendor/',
      'scripts/',
      '*.config.mjs',
      '*.config.ts',
      '*.config.js',
    ],
  },
  // Base JavaScript configuration
  ...tseslint.configs.recommended,
  // Astro plugin configuration
  ...eslintPluginAstro.configs.recommended,
  // Apply to all files
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  // Astro-specific configuration
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
  }
);
