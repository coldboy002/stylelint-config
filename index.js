// Some additions based on:
// * https://github.com/bjankord/stylelint-config-sass-guidelines/issues/20
// const SELECTOR_CLASS_PATTERN_BEM =
//   '^(?:(?:|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$';
// * https://github.com/bjankord/stylelint-config-sass-guidelines
// const SELECTOR_CLASS_PATTERN_SASS_GUIDELINES = '^(?:u|is|has)-[a-z][a-zA-Z0-9]*$|^(?!u|is|has)[a-zA-Z][a-zA-Z0-9]*(?:-[a-z][a-zA-Z0-9]*)?(?:--[a-z][a-zA-Z0-9]*)?$';
// const SELECTOR_CLASS_PATTERN_OLDER = '^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9\\@]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$';

const SELECTOR_CLASS_PATTERN =
  '^(?:(?:o|c|u|t|is|has|js)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9\\@]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$';

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'order/order': [
      [
        'custom-properties',
        'dollar-variables',

        { type: 'at-rule', name: 'extend' },
        {
          type: 'at-rule',
          name: 'include',
        },
        'declarations',
        {
          type: 'rule',
          selector: /^&:[\w-]+/,
        },
        {
          type: 'rule',
          selector: /^&.is-[\w-]+/,
        },
        {
          type: 'rule',
          selector: /^&::[\w-]+/,
        },
        {
          type: 'at-rule',
          name: 'include',
          hasBlock: true,
        },
        { type: 'at-rule', name: 'media' },
        'rules',
      ],
      {
        severity: 'warning',
      },
    ],
    'order/properties-alphabetical-order': null,
    'at-rule-disallowed-list': ['debug'],
    'color-named': 'never',
    'declaration-property-value-disallowed-list': {
      border: ['none'],
      'border-top': ['none'],
      'border-right': ['none'],
      'border-bottom': ['none'],
      'border-left': ['none'],

      // improve accessibility
      display: ['none'],
      outline: ['0', 'none'],
      'text-align': ['justify'],
    },
    'max-nesting-depth': [
      1,
      {
        ignoreAtRules: ['each', 'media', 'supports', 'include'],
      },
    ],
    'selector-class-pattern': SELECTOR_CLASS_PATTERN,
    'selector-max-compound-selectors': 3,
    'selector-max-id': 0,
    'selector-no-qualifying-type': true,
  },
  overrides: [
    {
      files: ['**/*.scss'],
      extends: ['stylelint-config-standard-scss'],
      rules: {
        'scss/at-import-partial-extension-blacklist': ['scss'],
        'scss/selector-no-redundant-nesting-selector': true,
      },
    },
  ],
};
