import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import { fixupPluginRules } from "@eslint/compat";
import cssModulesPlugin from "eslint-plugin-css-modules";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins:  {
      "css-modules": fixupPluginRules(cssModulesPlugin)
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "css-modules/no-unused-class": [2, { "camelCase": true }],
      "css-modules/no-undef-class": [2, { "camelCase": true }]
    },
  },
]);
