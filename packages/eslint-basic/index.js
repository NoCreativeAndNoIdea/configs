const {jsonParser,packageSortKey} = require('./overrides')

/**
 * @type {import(eslint).Linter.Config}
 */
const configs = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  reportUnusedDisableDirectives: true,
  ignorePatterns: [
    '*.min.*',
    '*.d.ts',
    'CHANGELOG.md',
    'dist',
    'LICENSE*',
    'output',
    'out',
    'coverage',
    'public',
    'temp',
    'package-lock.json',
    'pnpm-lock.yaml',
    'yarn.lock',
    '__snapshots__',
    // Ignore for in lint-staged
    '*.css',
    '*.png',
    '*.ico',
    '*.toml',
    '*.patch',
    '*.txt',
    '*.crt',
    '*.key',
    'Dockerfile',
    // Force include
    '!.github',
    '!.vitepress',
    '!.vscode',
    '!.idea',
    // Force exclude
    '.vitepress/cache',
  ],
  extends: [
    'eslint:recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:import/recommended',
  ],
  plugins: [
    'unused-imports',
    'unicorn',
  ],
  rules: {
    // Import
    'import/order': 'error',
    'import/first': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off',
    'import/no-absolute-path': 'off',
    'import/newline-after-import': ['error', { count: 1, considerComments: true }],
    'import/no-self-import': 'error',

    // Common
    'array-callback-return': ['error'],
    'no-async-promise-executor': 'off',
    'no-await-in-loop': 'error',
    'no-constant-binary-expression': 'error',
    'no-duplicate-imports': ['error',{
      includeExports: true
    }],
    'no-new-native-nonconstructor': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unreachable-loop': 'error',

    // Common code style
    'camelcase': ['error',{
      'ignoreImports': true
    }],
    'capitalized-comments': 'error',
    'complexity': ['error',3],
    'curly': 'error',
    'default-case': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'func-name-matching': 'error',
    'func-names': 'error',
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'max-classes-per-file': 'error',
    'max-depth': ['error',3],
    'max-lines-per-function': ['error',30],
    'max-nested-callbacks': ['error',2],
    'max-params': ['error', 3],
    'max-statements': ['error', 50],
    'new-cap': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-confusing-arrow': 'error',
    'no-console': 'error',
    'no-else-return': 'error',
    'no-empty': 'error',
    'no-eq-null': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-globals': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-mixed-operators': 'error',
    'no-nested-ternary': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-octal-escape': 'error',
    'no-restricted-exports': 'error',
    'no-restricted-globals': 'error',
    'no-return-assign': 'error',
    'no-throw-literal': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quotes': ['error','single'],
    'require-atomic-updates': 'error',
    'require-await': 'error',
    'semi': ['error','never'],
    'space-before-blocks': 'error',
    'space-before-function-paren': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'switch-colon-spacing': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'template-tag-spacing': 'error',
    'wrap-iife': 'error',
    'yield-star-spacing': 'error',
    'yoda': 'error',

    // Unicorn
    // Pass error message when throwing errors
    'unicorn/error-message': 'error',
    // Uppercase regex escapes
    'unicorn/escape-case': 'error',
    // Array.isArray instead of instanceof
    'unicorn/no-instanceof-array': 'error',
    // Prevent deprecated `new Buffer()`
    'unicorn/no-new-buffer': 'error',
    // Keep regex literals safe!
    'unicorn/no-unsafe-regex': 'off',
    // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
    'unicorn/number-literal-case': 'error',
    // Includes over indexOf when checking for existence
    'unicorn/prefer-includes': 'error',
    // String methods startsWith/endsWith instead of more complicated stuff
    'unicorn/prefer-string-starts-ends-with': 'error',
    // TextContent instead of innerText
    'unicorn/prefer-text-content': 'error',
    // Enforce throwing type error when throwing error while checking typeof
    'unicorn/prefer-type-error': 'error',
    // Use new when throwing error
    'unicorn/throw-new-error': 'error',
    // Prefer using the node: protocol
    'unicorn/prefer-node-protocol': 'error',
    // Prefer using number properties like `Number.isNaN` rather than `isNaN`
    'unicorn/prefer-number-properties': 'error',
    // Ban `new Array` as `Array` constructor's params are ambiguous
    'unicorn/no-new-array': 'error',

    'no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
    'eslint-comments/disable-enable-pair': 'off',
    'import/no-named-as-default-member': 'off',
    'import/no-named-as-default': 'off',
    'import/namespace': 'off',

    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
  },
  overrides: [
    jsonParser,
    packageSortKey
  ]
}

module.exports = configs
