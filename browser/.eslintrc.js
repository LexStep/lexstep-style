/* eslint-disable */
module.exports = {
  settings: {
    version: "detect",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:unicorn/recommended",
    "xo/browser",
    "xo/esnext",
    "xo-typescript/space",
    "xo-react/space",
    "plugin:cypress/recommended",
    "plugin:chai-friendly/recommended",
    "plugin:jest/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier/@typescript-eslint",
    "prettier",
    "prettier/babel",
    "prettier/react",
    "prettier/unicorn",
    "plugin:functional/external-recommended",
    "plugin:functional/recommended",
  ],
  plugins: ["chai-friendly", "cypress", "jest", "import", "functional"],
  rules: {
    "unicorn/filename-case": 0,
    "@typescript-eslint/semi": 0,
    "@typescript-eslint/restrict-template-expressions": 0,
    "@typescript-eslint/default-param-last": 0,
    "@typescript-eslint/prefer-readonly-parameter-types": 0,
    "@typescript-eslint/no-unsafe-call": 0,
    "@typescript-eslint/no-unsafe-member-access": 0,
    "@typescript-eslint/ban-ts-ignore": 0, // temporary fix until typescript eslint updates to support ts-expect-error
    "@typescript-eslint/no-base-to-string": 0,
    "unicorn/prevent-abbreviations": "warn",
    "react/prop-types": 0,
    "jest/prefer-expect-assertions": 0,
    "capitalized-comments": 0,
    "comma-dangle": 0,
    "functional/no-expression-statement": "off",
    "functional/no-class": "off",
    "functional/functional-parameters": "off",
    "functional/no-conditional-statement": "off",
    "functional/no-let": "warn",
    "functional/no-loop-statement": "warn",
    "functional/no-this-expression": "off",
    "functional/no-throw-statement": "off",
    "functional/no-try-statement": "off",
    "functional/no-return-void": "warn",
    "unicorn/no-array-callback-reference": "warn",
    "import/extensions": [
      "error",
      {
        svg: "allow",
      },
    ],
    "import/no-unassigned-import": [
      "error",
      {
        allow: ["**/*.css"],
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.js"],
      rules: {
        "jest/no-try-expect": 0,
      },
    },
    {
      files: "src/**/*.spec.ts",
      rules: {
        "@typescript-eslint/ban-ts-comment": "warn",
        "functional/immutable-data": "off",
        "functional/prefer-readonly-type": "off",
      },
    },
    {
      files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/space-before-function-paren": 0,
        "@typescript-eslint/no-unsafe-call": 0,
        "@typescript-eslint/no-unsafe-member-access": 0,
      },
    },
    {
      files: ["cypress/**/*.js", "cypress/**/*.ts"],
      rules: {
        "jest/expect-expect": 0,
        "jest/valid-expect": 0,
      },
    },
  ],
};
