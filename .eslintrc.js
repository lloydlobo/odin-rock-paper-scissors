module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  // extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // plugins: ['prettier'],
  rules: {
    // 'prettier/prettier': 'error',
  },
};

// ------------------------------------------------------------------

// https://dev.to/saurabhggc/add-eslint-prettier-and-airbnb-to-your-project-3mo8
/* Extending "prettier" turns off a bunch of core ESLint rules,
as well as a few rules from these plugins:
/* (Remember, "rules" always “wins” over "extends"!) — https://github.com/Fundamentals-Playground/eslint-config-prettier */
// add "prettier" to the "extends" array in your .eslintrc.* file.
// * Make sure to put it last, ...
// ..so it gets the chance to override other configs.

// eslint-config-prettier also ships with a little CLI tool
// to help you check if your configuration contains any rules
// that are unnecessary or conflict with Prettier.
// /* You can run it using npx: $ npx eslint-config-prettier path/to/main.js */

// -----------------------------------------------------------------------------
// 20220420181715
/* extends: ["airbnb-base", "prettier"], */
/* rules: {
  indent: "error",
  semi: ["error", "always"],
  quotes: ["error", "double"],
}, */
