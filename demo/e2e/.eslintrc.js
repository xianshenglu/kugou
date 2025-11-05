module.exports = {
  overrides: [
    {
      files: ['*.js'],
      globals: {
        require: true,
      },
    },
  ],
  rules: {
    'import/no-extraneous-dependencies': ['off'],
    '@typescript-eslint/no-floating-promises': ['off'],
  },
};

