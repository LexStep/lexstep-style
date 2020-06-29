# lexstep-style (React)

> Configuration files and style guides for LexStep Node.js projects

## Installing Dependencies

```json
{
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^3.4.0",
    "@typescript-eslint/parser": "^3.4.0",
    "commitizen": "^4.1.2",
    "cz-conventional-changelog-emoji": "^0.1.0",
    "eslint": "^7.3.1",
    "eslint-config-prettier": "^6.11.0",
    "eslint-config-xo": "^0.31.0",
    "eslint-config-xo-space": "^0.25.0",
    "eslint-config-xo-typescript": "^0.31.0",
    "eslint-plugin-chai-friendly": "^0.6.0",
    "eslint-plugin-import": "^2.22.0",
    "eslint-plugin-jest": "^23.17.1",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-unicorn": "^20.1.0",
    "eslint-plugin-you-dont-need-lodash-underscore": "^6.10.0",
    "husky": "^4.2.5",
    "jest": "^26.1.0",
    "lint-staged": "^10.2.11",
    "prettier": "^2.0.5",
    "typescript": "^3.9.5"
  }
}
```

quick install using Yarn:

```shell
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser commitizen cz-conventional-changelog-emoji \
eslint eslint-config-prettier eslint-config-xo eslint-config-xo-space eslint-config-xo-typescript eslint-plugin-chai-friendly \
eslint-plugin-import eslint-plugin-jest eslint-plugin-node eslint-plugin-unicorn eslint-plugin-you-dont-need-lodash-underscore \
husky jest lint-staged prettier typescript eslint-config-xo-react eslint-plugin-cypress eslint-plugin-react eslint-plugin-react-hooks
```

## Using the Configuration

- Install the dependencies (see dependencies above)
- Copy `.eslintrc.js` (which you can find [here](./.eslintrc.js)) into your project
- Copy `.prettierrc` (from [../shared/.prettierrc](../shared/.prettierrc)) into your project
- Add Husky/Lint-Staged configuration to `package.json` (see ['lint on commit' section](../shared/lint-on-commit.md))
