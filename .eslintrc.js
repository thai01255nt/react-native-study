// module.exports = {
//   root: true,
//   extends: ['@react-native-community', 'prettier'],
//   parser: '@typescript-eslint/parser',
//   plugins: ['@typescript-eslint'],
//   overrides: [
//     {
//       files: ['*.ts', '*.tsx'],
//       rules: {
//         '@typescript-eslint/no-unused-vars': [
//           'error',
//           {
//             argsIgnorePattern: '^_',
//           },
//         ],
//         'no-unused-vars': 'off',
//         'no-shadow': 'off',
//         '@typescript-eslint/no-shadow': 11,
//         'no-undef': 'off',
//       },
//     },
//   ],
// };
module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
      },
    },
  ],
};
