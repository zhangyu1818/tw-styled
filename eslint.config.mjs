import { defineConfig } from '@zhangyu1818/eslint-config'

export default defineConfig(
  {
    presets: {
      javascript: {
        'no-redeclare': 'off',
      },
      typescript: true,
      test: true,
      react: true,
      prettier: true,
    },
  },
  [
    {
      ignores: ['eslint.config.mjs', 'jest.config.js'],
    },
  ],
)
