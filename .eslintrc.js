module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    semi: 0,
    'comma-dangle': 0,
    'linebreak-style': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 0,
    'react/jsx-wrap-multilines': 'off',
    'default-param-last': 0,
    'prettier/prettier': [
      'error',
      {
        semi: false,
        endOfLine: 'auto',
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
}
