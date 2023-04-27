# @coldboy002/stylelint-config

> Shareable stylelint config for CSS/SCSS

## Installation

```bash
npm install --save-dev @coldboy002/stylelint-config stylelint
```

or

```bash
yarn add --dev @coldboy002/stylelint-config stylelint
```

Note: This package requires Node.js 15.0.0 or later. It is not compatible with older versions.

## Usage

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

See also: [https://stylelint.io/user-guide/configure#extends](https://stylelint.io/user-guide/configure#extends)

## Extensions

- [stylelint-config-recess-order](https://github.com/stormwarning/stylelint-config-recess-order) — A Stylelint config that sorts CSS properties the way Recess did and Bootstrap did/does.
- [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss) — The standard shareable SCSS config for Stylelint.

## Rules

To see the rules that this config uses, please read the [config itself](./index.js).

Rules are grouped and sorted by default as in the original lists:

- [stylelint](https://stylelint.io/user-guide/rules/list)
- [stylelint-scss](https://github.com/kristerkari/stylelint-scss#list-of-rules)

## Example

### Before

```css
@import url("foo.css");
@import url("bar.css");

@custom-media --foo (min-width: 30em);

/**
 * Multi-line comment
 */

:root {
  --brand-red: hsl(5deg 10% 40%);
}

/* Single-line comment */

.class-foo:not(a, div) {
  margin: 0;
  top: calc(100% - 2rem);
}

/* Flush single line comment */
@media (width >= 60em) {
  #id-bar {
    /* Flush to parent comment */
    --offset: 0px;

    color: #fff;
    font-family: Helvetica, "Arial Black", sans-serif;
    left: calc(var(--offset) + 50%);
  }

  /* Flush nested single line comment */
  a::after {
    display: block;
    content: "→";
    background-image: url("x.svg");
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
```

### After

```css
@import 'foo.css';
@import 'bar.css';

@custom-media --foo (min-width: 30em);

/**
 * Multi-line comment
 */

:root {
  --brand-red: hsl(5deg 10% 40%);
}

/* Single-line comment */

.class-foo:not(a, div) {
  top: calc(100% - 2rem);
  margin: 0;
}

/* Flush single line comment */
@media (width >= 60em) {
  #id-bar { //Don't use id
    /* Flush to parent comment */
    --offset: 0px;

    left: calc(var(--offset) + 50%);
    font-family: Helvetica, 'Arial Black', sans-serif;
    color: #fff;
  }

  /* Flush nested single line comment */
  a::after {
    display: block;
    content: '→';
    background-image: url('x.svg');
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

```

## [Changelog](CHANGELOG.md)

## [License](LICENSE)
