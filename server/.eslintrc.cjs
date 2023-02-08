/* eslint-disable max-len */
/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    "max-len": ["warn", { code: 100 }],
    "no-undef": ["off"] // TS to ensure that, see https://github.com/antfu/unplugin-auto-import#eslint
  }
}
