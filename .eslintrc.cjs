module.exports = {
  env: { node: true },
  settings: {
    react: {
      version: '19',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'eslint-plugin-react-compiler'],
  rules: {
    'react-compiler/react-compiler': 'error',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  ignorePatterns: [
    'src/index.ts',
    'dist/**',
    '**/*babel*',
    '**/*.stories.*',
    '**/*Store.*',
    '**/*.test.*',
    '**/setupTests*.*',
    'node_modules/**/*.ts?(x)',
  ],
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
};
