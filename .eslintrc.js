module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    }
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['prettier', 'react-hooks'],
  rules: {
    'prettier/prettier': ['error'],
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-unresolved': 'off', // prettier not 0
    'import/prefer-default-export': 'off', // prettier not 0
    'react/jsx-boolean-value': 'off', // prettier not 0
    'react/button-has-type': 'off', // prettier not 0
    'jsx-a11y/click-events-have-key-events': 'off', // prettier not 0
    'jsx-a11y/no-static-element-interactions': 'off', // prettier not 0

    'react/forbid-prop-types': 0, // prettier not 0
    'import/extensions': 0, // prettier not 0
    'react/require-default-props': 0, // prettier not 0

    'react/jsx-indent': 0, // prettier conflicts with eslint, 10 places in project can be fixed by 0 or in code

    'react/jsx-wrap-multilines': [
      'error',
      { declaration: false, assignment: false }
    ],
    'react/jsx-curly-newline': 'off',
    // ------|||||
    'react-hooks/rules-of-hooks': 'error', // tests files
    'react-hooks/exhaustive-deps': 'warn',
    'no-useless-escape': 'off',
    'react/no-array-index-key': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-alert': 'off',
    'no-nested-ternary': 'off',
    'no-unused-expressions': 'off',
    'no-return-assign': 'off',
    'no-shadow': 'off'
  }
};
