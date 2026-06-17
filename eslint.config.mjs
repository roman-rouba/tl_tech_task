import js from "@eslint/js";
import globals from "globals";
import html from "eslint-plugin-html";

export default [
  {
    files: ["**/*.html"],

    plugins: {
      html,
    },

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        ...globals.browser,
      },
    },

    settings: {
      "html/html-extensions": [".html"],
      "html/javascript-tag-names": ["script"],
    },

    rules: {
      ...js.configs.recommended.rules,

      // For a small educational repo this is often more convenient as warning.
      "no-unused-vars": "warn",
      "no-console": "warn",
    },
  },
];