import tseslint from 'typescript-eslint'
import eslintConfigPrettier from "eslint-config-prettier";
export default [
  eslintConfigPrettier,
  {
    plugins: {
      '@typescript-eslint': tseslint,
    },
    rules: {
      '@/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
        },
      ],
      'no-unused-vars': 'off',
      'no-shadow': 'off',
      '@/no-shadow': 1,
      'no-undef': 'off',
    },
  },
]