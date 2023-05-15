# @coldboy002/stylelint-config

[![NPM version](https://img.shields.io/npm/v/@coldboy002/stylelint-config.svg)](https://www.npmjs.org/package/@coldboy002/stylelint-config)

> Shareable stylelint config for CSS/SCSS

## Installation

```bash
npm install --save-dev @coldboy002/stylelint-config
```

or

```bash
yarn add --dev @coldboy002/stylelint-config
```

Note: This package requires Node.js 15.0.0 or later. It is not compatible with older versions.

## Usage

Add this line to your `package.json`

```json
"stylelint": {
  "extends": "@coldboy002/stylelint-config"
}
```

Add this config to `.stylelintrc.json`:

```json
{
  "extends": "@coldboy002/stylelint-config"
}
```

See also: [https://stylelint.io/user-guide/configure](https://stylelint.io/user-guide/configure)

### Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to turn off the `scss/dollar-variable-pattern` rule:

```json
{
  "extends": "@coldboy002/stylelint-config",
  "rules": {
    "scss/dollar-variable-pattern": null
  }
}
```

## Extensions

- [stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order) — A Stylelint config that sorts CSS properties the way Recess did and Bootstrap did/does.
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) shared config and configures its rules for SCSS
- [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss) — The standard shareable SCSS config for Stylelint.

## Rules

To see the rules that this config uses, please read the [config itself](./index.js).

Rules are grouped and sorted by default as in the original lists:

- [stylelint](https://stylelint.io/user-guide/rules/list)
- [stylelint-scss](https://github.com/kristerkari/stylelint-scss#list-of-rules)

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
