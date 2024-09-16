// eslint.config.mjs
import {defineConfig} from "eslint";

export default defineConfig({
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "no-console": "warn",
    "no-debugger": "warn",
    quotes: ["error", "single"],
    semi: ["error", "always"],
    eqeqeq: "error",
    "react/prop-types": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    indent: ["error", 2],
    "no-magic-numbers": ["warn", {ignore: [0, 1]}],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
});
