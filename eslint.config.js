module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended', // Prettier와 ESLint를 통합
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect', // React 버전을 자동으로 감지
    },
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'react-hooks',
    'prettier',
    'tailwindcss',
  ],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true, endOfLine: 'auto' }],
    'react/react-in-jsx-scope': 'off', // Next.js에서 React 자동 임포트를 지원
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/prop-types': 'off', // TypeScript를 사용하므로 prop-types 비활성화
    'no-console': 'warn',
    'tailwindcss/classnames-order': 'warn', // Tailwind CSS 클래스 순서 검사
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
};
