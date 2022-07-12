module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order', 'stylelint-config-prettier'],
  plugins: [
    'stylelint-order',
    'stylelint-scss',
    'stylelint-less'
    // 'stylelint-declaration-block-no-ignored-properties'
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    // 'plugin/declaration-block-no-ignored-properties': true,
    'comment-empty-line-before': null,
    'declaration-empty-line-before': null,
    'function-name-case': 'lower',
    'no-descending-specificity': null,
    'no-invalid-double-slash-comments': null,
    'rule-empty-line-before': ['always', { except: ['after-single-line-comment', 'first-nested'] }]
  },
  ignoreFiles: [
    'node_modules/**/*',
    '_temp/**/*',
    'static/_dist/**/*',
    'server/_dist/**/*',
    'static/resource/**/*',
    'assets/public/fonts/**/*'
  ]
}
