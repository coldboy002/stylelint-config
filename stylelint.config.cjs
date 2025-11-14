const { propertyGroups } = require('stylelint-config-clean-order');

const propertiesOrder = propertyGroups.map((properties) => ({
  noEmptyLineBetween: true,
  emptyLineBefore: 'never', // Don't add empty lines between order groups.
  properties,
}));

module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
  rules: {
    'order/properties-order': [
      propertiesOrder,
      {
        unspecified: 'bottomAlphabetical',
      },
    ],
  },
  overrides: [
    {
      files: ['*.scss', '**/*.scss'],
      extends: ['stylelint-config-standard-scss'],
    },
  ],
};
