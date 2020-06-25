# lexstep-style

> Configuration files and style guides for LexStep projects

## Installing Dependencies

```json
{
  "devDependencies": {
    "@typescript-eslint/eslint-plugin": "^3.0.2",
    "@typescript-eslint/parser": "^3.0.2",
    "commitizen": "^4.1.2",
    "cz-conventional-changelog-emoji": "0.1.0",
    "eslint": "^7.1.0",
    "eslint-config-prettier": "^6.10.0",
    "eslint-config-xo": "^0.29.1",
    "eslint-config-xo-space": "^0.24.0",
    "eslint-config-xo-typescript": "^0.29.0",
    "eslint-plugin-chai-friendly": "^0.6.0",
    "eslint-plugin-import": "^2.20.2",
    "eslint-plugin-jest": "^23.13.2",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-unicorn": "^20.1.0",
    "eslint-plugin-you-dont-need-lodash-underscore": "^6.10.0",
    "husky": "^4.2.5",
    "jest": "^25.1.0",
    "lint-staged": "^10.2.6",
    "prettier": "^2.0.5"
  }
}
```

quick install using Yarn:

```shell
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser commitizen cz-conventional-changelog-emoji eslint eslint-config-prettier eslint-config-xo eslint-config-xo-space eslint-config-xo-typescript eslint-plugin-chai-friendly eslint-plugin-import eslint-plugin-jest eslint-plugin-node eslint-plugin-unicorn eslint-plugin-you-dont-need-lodash-underscore husky jest lint-staged prettier typescript
```

## Using the Configuration

- Install the dependencies (see dependencies above)
- Copy the contents of package.json and merge it with the existing `package.json` of your new project
- Copy `.eslintrc.js` and `.prettierrc` into your project
