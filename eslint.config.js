import { defineConfig } from '@tofrankie/eslint'

export default defineConfig({
  typescript: false,
  rules: {
    'regexp/no-super-linear-backtracking': 'off',
  },
})
