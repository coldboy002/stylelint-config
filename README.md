# @coldboy002/stylelint-config

[![NPM version](https://img.shields.io/npm/v/@coldboy002/stylelint-config.svg)](https://www.npmjs.org/package/@coldboy002/stylelint-config)

> Shareable stylelint config for CSS/SCSS

## Installation

***npm***

```bash
npm install --save-dev @coldboy002/stylelint-config
```

***yarn***

```bash
yarn add --dev @coldboy002/stylelint-config
```

Note: This package requires Node.js 20.0.0 or later. It is not compatible with older versions.

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

- [stylelint-config-clean-order](https://github.com/kutsan/stylelint-config-clean-order) — Order your styles with stylelint-order..
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) shared config and configures its rules for SCSS
- [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss) — The standard shareable SCSS config for Stylelint.

## Rules

To see the rules that this config uses, please read the [config itself](./stylelint.config.cjs).

Rules are grouped and sorted by default as in the original lists:

- [stylelint](https://stylelint.io/user-guide/rules/list)
- [stylelint-scss](https://github.com/kristerkari/stylelint-scss#list-of-rules)
- [stylelint-order](https://github.com/hudochenkov/stylelint-order)

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
